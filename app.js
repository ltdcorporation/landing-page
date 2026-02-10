const config = {
  links: {
    main: "https://jpncoded.pro",
    new: "https://jpncoded.pro/new",
    categories: "https://jpncoded.pro/categories",
    tags: "https://jpncoded.pro/tags",
    actresses: "https://jpncoded.pro/actresses",
    studios: "https://jpncoded.pro/studios",
    dmca: "#",
    privacy: "#",
    terms: "#",
    telegram: "#",
    x: "#",
    discord: "#",
    email: "mailto:hello@jpncoded.pro",
  },
};

const copy = {
  id: {
    nav: {
      home: "Home",
      inside: "Isi",
      links: "Link",
      social: "Sosial",
      faq: "FAQ",
    },
    hero: {
      badge: "18+ only",
      title: "JPncoded <span class=\"accent\">gerbang</span> ke koleksi JAV",
      subtitle:
        "Masuk buat lihat drop terbaru, layout bersih, dan player ngebut. Simple, gak ribet.",
      ctaPrimary: "Masuk JPncoded",
      ctaSecondary: "Lihat kategori",
      note: "Bahasa auto ikut lokasi. Bisa ganti manual kapan aja.",
      cardTitle: "Sekilas",
      cardLine1: "Drop baru rutin biar gak ketinggalan",
      cardLine2: "Streaming stabil + download ready",
      cardLine3: "Layout bersih, fokus konten",
      cardFoot: "Tinggal pilih, langsung masuk.",
    },
    inside: {
      title: "Isi dalamnya",
      subtitle: "Semua dirapihin biar cepat, jelas, dan gampang nyari.",
      f1: { title: "Fresh drops", desc: "Update rutin biar gak ketinggalan." },
      f2: { title: "Clean layout", desc: "Tampilan rapi, fokus ke konten." },
      f3: { title: "Fast stream", desc: "Player ringan, load cepat." },
      f4: { title: "Download ready", desc: "Link siap pakai, tinggal gas." },
    },
    links: {
      title: "Quick access",
      subtitle: "Masuk cepat ke jalur favorit lo.",
      main: { title: "Main site", desc: "JPncoded home base" },
      new: { title: "Fresh drops", desc: "Konten terbaru" },
      categories: { title: "Categories", desc: "Cari vibe lo" },
      tags: { title: "Tags", desc: "Filter spesifik" },
      actresses: { title: "Actresses", desc: "Favorit lo" },
      studios: { title: "Studios", desc: "Studio & koleksi" },
    },
    social: {
      title: "Social & komunitas",
      subtitle: "Update, request, dan ngobrol santai.",
    },
    faq: {
      title: "FAQ",
      subtitle: "Jawaban singkat biar gak bingung.",
      q1: "Gimana cara masuk?",
      a1: "Klik tombol Masuk JPncoded di atas, beres.",
      q2: "Bahasa bisa diganti?",
      a2: "Bisa, tinggal klik switch ID/EN di header.",
      q3: "Update kapan?",
      a3: "Drop rutin, biasanya ada yang baru tiap hari.",
    },
    footer: {
      disclaimer: "JPncoded khusus 18+. Semua link apa adanya, pakai dengan bijak.",
      dmca: "DMCA",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
  en: {
    nav: {
      home: "Home",
      inside: "Inside",
      links: "Links",
      social: "Social",
      faq: "FAQ",
    },
    hero: {
      badge: "18+ only",
      title: "JPncoded <span class=\"accent\">gateway</span> to JAV drops",
      subtitle:
        "Jump in for fresh drops, clean layout, and a fast player. Simple, no mess.",
      ctaPrimary: "Enter JPncoded",
      ctaSecondary: "Browse categories",
      note: "Auto language by IP. Switch anytime.",
      cardTitle: "At a glance",
      cardLine1: "Fresh drops on a regular cadence",
      cardLine2: "Stable streams + download ready",
      cardLine3: "Clean layout, content first",
      cardFoot: "Pick a path and dive in.",
    },
    inside: {
      title: "What's inside",
      subtitle: "Built to stay fast, tidy, and easy to explore.",
      f1: { title: "Fresh drops", desc: "Regular updates so you stay on top." },
      f2: { title: "Clean layout", desc: "No clutter, content first." },
      f3: { title: "Fast stream", desc: "Light player, quick load." },
      f4: { title: "Download ready", desc: "Links are ready when you are." },
    },
    links: {
      title: "Quick access",
      subtitle: "Jump straight to your favorite lane.",
      main: { title: "Main site", desc: "JPncoded home base" },
      new: { title: "Fresh drops", desc: "Latest content" },
      categories: { title: "Categories", desc: "Find your vibe" },
      tags: { title: "Tags", desc: "Filter deeper" },
      actresses: { title: "Actresses", desc: "Your favorites" },
      studios: { title: "Studios", desc: "Studios & collections" },
    },
    social: {
      title: "Social & community",
      subtitle: "Updates, requests, and quick chat.",
    },
    faq: {
      title: "FAQ",
      subtitle: "Quick answers, no fluff.",
      q1: "How do I enter?",
      a1: "Hit the Enter button up top, done.",
      q2: "Can I change language?",
      a2: "Yep, use the ID/EN switch in the header.",
      q3: "How often updates?",
      a3: "Drops are regular, usually daily.",
    },
    footer: {
      disclaimer: "JPncoded is 18+ only. All links are provided as-is. Use responsibly.",
      dmca: "DMCA",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
};

function getCookie(name) {
  const value = document.cookie.split(";").map((item) => item.trim());
  for (const part of value) {
    if (part.startsWith(`${name}=`)) {
      return part.split("=").slice(1).join("=");
    }
  }
  return "";
}

function setCookie(name, value) {
  document.cookie = `${name}=${value}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

function pickInitialLang() {
  const cookieLang = getCookie("lang");
  if (cookieLang === "id" || cookieLang === "en") {
    return cookieLang;
  }
  const stored = localStorage.getItem("lang");
  if (stored === "id" || stored === "en") {
    return stored;
  }
  const browserLang = (navigator.language || "en").toLowerCase();
  if (browserLang.startsWith("id")) {
    return "id";
  }
  return "en";
}

function applyLang(lang) {
  const dict = copy[lang] || copy.en;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.dataset.i18n.split(".");
    const value = path.reduce((acc, key) => (acc ? acc[key] : undefined), dict);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const path = el.dataset.i18nHtml.split(".");
    const value = path.reduce((acc, key) => (acc ? acc[key] : undefined), dict);
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function wireLinks() {
  document.querySelectorAll("[data-link]").forEach((el) => {
    const key = el.dataset.link;
    const href = config.links[key];
    if (href && href !== "#") {
      el.setAttribute("href", href);
      el.removeAttribute("aria-disabled");
      return;
    }
    el.setAttribute("href", "#");
    el.setAttribute("aria-disabled", "true");
  });
}

function bindLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang === "id" ? "id" : "en";
      setCookie("lang", lang);
      localStorage.setItem("lang", lang);
      applyLang(lang);
    });
  });
}

const initialLang = pickInitialLang();
wireLinks();
applyLang(initialLang);
bindLangSwitch();
