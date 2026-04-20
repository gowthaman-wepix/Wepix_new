/**
 * Downloads homepage-derived logos into public/logos/.
 * Run: node scripts/fetch-client-logos.mjs
 *
 * Uses Shopify /cdn/shop/files/ heuristics, with manual overrides where auto-pick is unreliable.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "logos");

/** Direct CDN URLs when HTML heuristics pick product photos / favicon crops. */
const OVERRIDES = {
  "06": "https://reviash.com/cdn/shop/files/Logo_1_1_160x.png?v=1747047758",
  "08": "https://labeljas.com/cdn/shop/files/website_logo_01_1.png?format=webp&height=600&v=1774876998",
  "09": "https://ishikatrends.com/cdn/shop/files/Ishika_logo_120x.png?v=1769072235",
  "10": "https://www.uzviecostore.com/cdn/shop/files/Logo_Uzvi.png?format=webp&height=480&v=1764588428",
  "14": "https://seamstolove.com/cdn/shop/files/White_Logo_180x.png?v=1736312074",
  "17": "https://hrudhay.com/cdn/shop/files/hrudhay_260x.png?v=1770735654",
  "18": "https://angelicweaves.com/cdn/shop/files/Angelic_Weaves_Logo.png?v=1734417066&width=480",
};

const CLIENTS = [
  { id: "01", page: "https://alankarchennai.in/" },
  { id: "02", page: "https://www.myeitara.com/" },
  { id: "03", page: "https://velaura.in/" },
  { id: "04", page: "https://pearloze.com/" },
  { id: "05", page: "https://lifashion.co.in/" },
  { id: "06", page: "https://reviash.com/" },
  { id: "07", page: "https://yazhlicollection.com/" },
  { id: "08", page: "https://labeljas.com/" },
  { id: "09", page: "https://ishikatrends.com/" },
  { id: "10", page: "https://www.uzviecostore.com/" },
  { id: "11", page: "https://www.lemoonbaby.in/" },
  { id: "12", page: "https://suvaattire.com/" },
  { id: "13", page: "https://www.minitantini.com/" },
  { id: "14", page: "https://seamstolove.com/" },
  { id: "15", page: "https://cloudyfitbyasmitha.com/" },
  { id: "16", page: "https://www.oghaclothing.com/" },
  { id: "17", page: "https://hrudhay.com/" },
  { id: "18", page: "https://angelicweaves.com/" },
  { id: "19", page: "https://madhavasds.com/" },
  { id: "20", page: "https://plumeriabyj.com/" },
];

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

const PRODUCTISH =
  /anarkali|kurti|saree|dress_|gown|banner|slideshow|hero|collection|product|_870x|_2000x|lookbook|model|campaign|video|instagram/i;

function decodeHtmlEntities(url) {
  return url
    .replace(/&amp;/g, "&")
    .replace(/&#38;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function absolutize(base, url) {
  if (!url || url.startsWith("data:")) return null;
  const cleaned = decodeHtmlEntities(url.trim());
  try {
    return new URL(cleaned.replace(/^\/\//, "https://"), base).href;
  } catch {
    return null;
  }
}

function sizeHint(url) {
  const u = decodeHtmlEntities(url);
  let max = 0;
  for (const m of u.matchAll(/(?:^|[?&])(?:width|height|w|h)=(\d+)/gi)) {
    max = Math.max(max, Number(m[1]));
  }
  const m2 = u.match(/_(\d+)x\./i);
  if (m2) max = Math.max(max, Number(m2[1]));
  return max;
}

function scoreLogoCandidate(url) {
  const u = decodeHtmlEntities(url).toLowerCase();
  let s = 0;

  const hasLogo = /logo|wordmark|lockup|brand-mark|site-logo|header-logo|website_logo/.test(u);
  const isShopifyFile = /\/cdn\/shop\/files\//.test(u);

  if (isShopifyFile && hasLogo) s += 220;
  else if (isShopifyFile && /fav|icon_/.test(u)) s += 35;
  else if (isShopifyFile) s += 50;

  if (hasLogo) s += 90;
  if (/\.(png|webp)(\?|$)/i.test(u)) s += 25;
  if (/\.svg(\?|$)/i.test(u)) s += 20;

  const w = (u.match(/(?:^|[?&])width=(\d+)/i) || [])[1];
  const h = (u.match(/(?:^|[?&])height=(\d+)/i) || [])[1];
  const cw = w ? Number(w) : null;
  const ch = h ? Number(h) : null;
  if (cw && ch && cw <= 64 && ch <= 64) s -= 150;
  else if (cw && cw <= 48) s -= 120;
  else if (ch && ch <= 48) s -= 120;

  if (PRODUCTISH.test(u) && !hasLogo) s -= 200;

  const dim = sizeHint(url);
  if (dim > 0 && dim < 120 && !hasLogo) s -= 40;
  if (dim >= 200 && dim <= 900 && hasLogo) s += 30;

  if (/og:image|twitter:image/.test(u)) s += 15;

  return s;
}

function extractCandidates(html, baseUrl) {
  const raw = [];
  const add = (url, tag) => {
    const abs = absolutize(baseUrl, url);
    if (abs && !abs.includes("{{")) raw.push({ url: abs, tag });
  };

  for (const m of html.matchAll(/property=["']og:image["']\s+content=["']([^"']+)["']/gi))
    add(m[1], "og:image");
  for (const m of html.matchAll(/content=["']([^"']+)["']\s+property=["']og:image["']/gi))
    add(m[1], "og:image");
  for (const m of html.matchAll(/name=["']twitter:image["']\s+content=["']([^"']+)["']/gi))
    add(m[1], "twitter:image");
  for (const m of html.matchAll(
    /<link[^>]+rel=["'][^"']*(?:apple-touch-icon|icon)[^"']*["'][^>]+href=["']([^"']+)["']/gi,
  ))
    add(m[1], "link-icon");
  for (const m of html.matchAll(/href=["']([^"']+)["'][^>]*rel=["'][^"']*(?:apple-touch-icon|icon)/gi))
    add(m[1], "link-icon");

  for (const m of html.matchAll(/(?:https?:)?\/\/[^"'\s<>()]+\/cdn\/shop\/files\/[^"'\s<>)]+\.(?:png|jpg|jpeg|webp|gif|svg)(?:\?[^"'\s)]*)?/gi))
    add(m[0], "shopify-file");

  for (const m of html.matchAll(/"logo"\s*:\s*"(https?:[^"]+)"/gi)) add(m[1], "jsonld-logo");

  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]{0,240}>/gi)) {
    const chunk = m[0].toLowerCase();
    if (/logo|brand|header__heading|site-header|navbar-brand|custom-logo/.test(chunk)) add(m[1], "img-logo");
  }

  for (const m of html.matchAll(/src=["']([^"']*\/wp-content\/[^"']*logo[^"']*)["']/gi)) add(m[1], "wp-logo");

  const seen = new Set();
  const deduped = [];
  for (const r of raw) {
    const key = r.url.split("?")[0];
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(r);
  }

  deduped.sort((a, b) => scoreLogoCandidate(b.url) - scoreLogoCandidate(a.url));
  return deduped.map((r) => r.url);
}

function extFromUrlOrType(url, contentType) {
  const ct = (contentType || "").toLowerCase();
  if (ct.includes("image/webp")) return ".webp";
  if (ct.includes("image/svg")) return ".svg";
  if (ct.includes("image/png")) return ".png";
  if (ct.includes("image/jpeg") || ct.includes("image/jpg")) return ".jpg";
  if (ct.includes("image/gif")) return ".gif";

  const low = decodeHtmlEntities(url).split("?")[0].toLowerCase();
  if (low.endsWith(".svg")) return ".svg";
  if (low.endsWith(".webp")) return ".webp";
  if (low.endsWith(".png")) return ".png";
  if (low.endsWith(".jpg") || low.endsWith(".jpeg")) return ".jpg";
  if (low.endsWith(".gif")) return ".gif";
  return ".bin";
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
    signal: AbortSignal.timeout(45000),
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
}

async function fetchBytes(url) {
  const cleanUrl = decodeHtmlEntities(url);
  const res = await fetch(cleanUrl, {
    headers: { "User-Agent": UA, Accept: "image/*,*/*;q=0.8" },
    signal: AbortSignal.timeout(45000),
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`GET ${cleanUrl} -> ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const ct = res.headers.get("content-type") || "";
  return { buf, ct };
}

async function downloadToClient(id, imgUrl) {
  const { buf, ct } = await fetchBytes(imgUrl);
  if (buf.length < 80) throw new Error("image too small");
  const ext = extFromUrlOrType(imgUrl, ct);
  const name = `client-${id}${ext}`;
  const outPath = path.join(OUT_DIR, name);
  for (const e of [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".bin"]) {
    const p = path.join(OUT_DIR, `client-${id}${e}`);
    if (fs.existsSync(p) && p !== outPath) {
      try {
        fs.unlinkSync(p);
      } catch {
        /* ignore */
      }
    }
  }
  fs.writeFileSync(outPath, buf);
  return { id, ok: true, picked: decodeHtmlEntities(imgUrl), file: `/logos/${name}` };
}

async function pickAndDownload({ id, page }) {
  if (OVERRIDES[id]) {
    return downloadToClient(id, OVERRIDES[id]);
  }

  const html = await fetchText(page);
  const candidates = extractCandidates(html, page);
  if (!candidates.length) throw new Error("no image candidates");

  let lastErr;
  for (const imgUrl of candidates.slice(0, 18)) {
    try {
      return await downloadToClient(id, imgUrl);
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("all downloads failed");
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = [];

  for (const c of CLIENTS) {
    process.stdout.write(`client-${c.id} (${c.page}) ... `);

    if (c.id === "20") {
      const existing = path.join(OUT_DIR, "client-20.png");
      if (fs.existsSync(existing) && fs.statSync(existing).size > 5000) {
        console.log("keep existing (storefront is password-only)");
        manifest.push({
          id: c.id,
          ok: true,
          picked: "(existing client-20.png)",
          file: "/logos/client-20.png",
        });
        continue;
      }
    }

    try {
      const r = await pickAndDownload(c);
      console.log("ok\n  ", r.picked);
      manifest.push(r);
    } catch (e) {
      console.log("FAIL", e.message);
      manifest.push({ id: c.id, ok: false, page: c.page, error: String(e.message || e) });
    }
  }

  const manifestPath = path.join(OUT_DIR, "_manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log("\nWrote", manifestPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
