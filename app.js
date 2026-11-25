/* ============================================================
   Social links page — pure JavaScript (no libraries, no build step)
   Edit the CONFIG below, then open index.html or upload both
   files to any static host (GitHub Pages, Netlify, etc.).
   ============================================================ */

const CONFIG = {
  name: "Your Name",
  handle: "@yourname",
  bio: "Developer · Creator · Coffee lover. Find me around the internet.",
  avatar: "",            // optional image URL (e.g. "me.jpg"); leave "" to show initials
  accent: "#6d5efc",     // main colour
  links: [
    { type: "instagram", label: "Instagram", url: "https://instagram.com/yourname" },
    { type: "tiktok",    label: "TikTok",    url: "https://tiktok.com/@yourname" },
    { type: "x",         label: "X (Twitter)", url: "https://x.com/yourname" },
    { type: "facebook",  label: "Facebook",  url: "https://facebook.com/yourname" },
    { type: "youtube",   label: "YouTube",   url: "https://youtube.com/@yourname" },
    { type: "github",    label: "GitHub",    url: "https://github.com/yourname" },
    { type: "linkedin",  label: "LinkedIn",  url: "https://linkedin.com/in/yourname" },
    { type: "mail",      label: "Email me",  url: "mailto:you@example.com" }
  ]
};

/* ---------- Icons (inline SVG, stroke style) ---------- */
const ICONS = {
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  tiktok: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',
  x: '<path d="M4 4l11.733 16h4.267l-11.733-16z"/><path d="M4 20l6.768-6.768m2.46-2.46L20 4"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><polygon points="10 15 15 12 10 9"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>',
  web: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>'
};

function svg(name, size = 22) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.web}</svg>`;
}

/* ---------- Styles (injected by JS) ---------- */
function injectStyles() {
  const css = `
  :root{
    --accent:${CONFIG.accent};
    --bg:#f5f5fa; --card:#ffffff; --text:#14141f; --muted:#6b6b80; --border:#e4e4ee;
    --shadow:0 6px 24px rgba(20,20,40,.08);
  }
  [data-theme="dark"]{
    --bg:#0e0e16; --card:#181824; --text:#f1f1f8; --muted:#9a9ab0; --border:#2a2a3c;
    --shadow:0 6px 24px rgba(0,0,0,.45);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{-webkit-text-size-adjust:100%}
  body{
    min-height:100vh; min-height:100dvh;
    font-family:system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    background:var(--bg); color:var(--text);
    transition:background .3s,color .3s;
    display:flex; justify-content:center;
    padding:max(24px,env(safe-area-inset-top)) 16px max(32px,env(safe-area-inset-bottom));
    background-image:
      radial-gradient(60vmax 60vmax at 10% -10%, color-mix(in srgb,var(--accent) 22%,transparent), transparent 60%),
      radial-gradient(50vmax 50vmax at 110% 110%, color-mix(in srgb,var(--accent) 16%,transparent), transparent 60%);
    background-attachment:fixed;
  }
  main{width:100%; max-width:520px; text-align:center; position:relative}
  .theme-btn{
    position:absolute; top:0; right:0; width:42px; height:42px; border-radius:50%;
    border:1px solid var(--border); background:var(--card); color:var(--text);
    display:grid; place-items:center; cursor:pointer; box-shadow:var(--shadow);
    transition:transform .2s;
  }
  .theme-btn:hover{transform:rotate(15deg) scale(1.05)}
  .avatar{
    width:104px; height:104px; border-radius:50%; margin:36px auto 16px;
    display:grid; place-items:center; overflow:hidden;
    font-size:38px; font-weight:700; color:#fff; letter-spacing:1px;
    background:linear-gradient(135deg,var(--accent),color-mix(in srgb,var(--accent) 45%,#ff5fa2));
    box-shadow:0 0 0 4px var(--bg),0 0 0 6px var(--accent),var(--shadow);
  }
  .avatar img{width:100%;height:100%;object-fit:cover}
  h1{font-size:clamp(1.5rem,5vw,1.9rem); font-weight:700}
  .handle{color:var(--accent); font-weight:600; margin-top:4px}
  .bio{color:var(--muted); line-height:1.55; margin:12px auto 28px; max-width:42ch}
  .links{display:flex; flex-direction:column; gap:12px; list-style:none}
  .link{
    display:flex; align-items:center; gap:14px; padding:14px 18px;
    background:var(--card); color:var(--text); text-decoration:none;
    border:1px solid var(--border); border-radius:16px; box-shadow:var(--shadow);
    font-weight:600; font-size:1rem; min-height:56px;
    opacity:0; transform:translateY(12px);
    animation:in .5s ease forwards;
    transition:transform .2s,border-color .2s,box-shadow .2s;
  }
  .link .ico{
    width:38px; height:38px; flex:none; border-radius:11px; display:grid; place-items:center;
    background:color-mix(in srgb,var(--accent) 14%,transparent); color:var(--accent);
  }
  .link .txt{flex:1; text-align:left}
  .link .go{color:var(--muted); transition:transform .2s,color .2s}
  .link:hover,.link:focus-visible{transform:translateY(-2px); border-color:var(--accent); outline:none}
  .link:hover .go,.link:focus-visible .go{transform:translate(2px,-2px); color:var(--accent)}
  .link:active{transform:scale(.98)}
  footer{margin-top:32px; font-size:.8rem; color:var(--muted)}
  @keyframes in{to{opacity:1;transform:none}}
  @media (min-width:768px){
    body{align-items:center}
    main{max-width:560px}
    .link{padding:16px 22px}
  }
  @media (prefers-reduced-motion:reduce){
    *{animation-duration:.01ms!important;transition-duration:.01ms!important}
  }`;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
}

/* ---------- Helpers ---------- */
function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("") || "?";
}

function el(tag, props = {}, html = "") {
  const node = document.createElement(tag);
  Object.assign(node, props);
  if (html) node.innerHTML = html;
  return node;
}

function getTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
  } catch (e) {}
  return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme, btn) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
  if (btn) {
    btn.innerHTML = svg(theme === "dark" ? "sun" : "moon", 20);
    btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }
}

/* ---------- Render ---------- */
function render() {
  document.title = `${CONFIG.name} — Links`;
  const app = document.getElementById("app");
  const main = el("main");

  const themeBtn = el("button", { className: "theme-btn", type: "button" });
  setTheme(getTheme(), themeBtn);
  themeBtn.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(next, themeBtn);
  });
  main.appendChild(themeBtn);

  const avatar = el("div", { className: "avatar" });
  if (CONFIG.avatar) {
    const img = el("img", { src: CONFIG.avatar, alt: CONFIG.name });
    img.addEventListener("error", () => { avatar.textContent = initials(CONFIG.name); });
    avatar.appendChild(img);
  } else {
    avatar.textContent = initials(CONFIG.name);
  }
  main.appendChild(avatar);

  main.appendChild(el("h1", { textContent: CONFIG.name }));
  main.appendChild(el("p", { className: "handle", textContent: CONFIG.handle }));
  main.appendChild(el("p", { className: "bio", textContent: CONFIG.bio }));

  const list = el("ul", { className: "links" });
  CONFIG.links.forEach((l, i) => {
    const li = el("li");
    const a = el("a", { className: "link", href: l.url, target: "_blank", rel: "noopener noreferrer" });
    a.style.animationDelay = `${0.08 * i + 0.1}s`;
    a.innerHTML = `<span class="ico">${svg(l.type)}</span><span class="txt"></span><span class="go">${svg("arrow", 18)}</span>`;
    a.querySelector(".txt").textContent = l.label;
    li.appendChild(a);
    list.appendChild(li);
  });
  main.appendChild(list);

  main.appendChild(el("footer", { textContent: `© ${new Date().getFullYear()} ${CONFIG.name}` }));
  app.appendChild(main);
}

injectStyles();
render();