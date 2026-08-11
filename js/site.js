/* EverHealthy — shared site runtime */
(function () {
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const page = document.body.dataset.page || "";

  /* ---------- header ---------- */
  const NAV = [
    ["courses.html", "Courses", "courses"],
    ["mastery.html", "Mastery", "mastery"],
    ["specialisations.html", "Specialisations", "specs"],
    ["conditions.html", "Conditions", "conditions"],
    ["certification.html", "Certification", "certification"],
    ["about.html", "About", "about"],
  ];
  const headerEl = $("#site-header");
  if (headerEl) {
    headerEl.innerHTML = `
      <div class="announce">Admissions open · New cohorts begin August 2026 · <a href="book.html">Book a discovery call</a></div>
      <div class="wrap nav-inner">
        <a class="logo" href="index.html" aria-label="EverHealthy Nutrition Academy home">
          <img src="assets/logo.png" alt="EverHealthy Nutrition Academy" class="logo-img">
        </a>
        <nav class="nav-links" aria-label="Main">
          ${NAV.map(([href, label, id]) => `<a href="${href}" class="${page === id ? "active" : ""}">${label}</a>`).join("")}
          <a href="book.html" class="btn dark sm nav-cta">Book a call</a>
        </nav>
        <button class="nav-burger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="mobile-menu" hidden>
        <a href="index.html" class="${page === "home" ? "active" : ""}">Home</a>
        ${NAV.map(([href, label, id]) => `<a href="${href}" class="${page === id ? "active" : ""}">${label}</a>`).join("")}
        <div class="mm-cta"><a href="book.html" class="btn primary lg" style="width:100%">Book a discovery call →</a></div>
      </div>`;
    const burger = $(".nav-burger", headerEl);
    const menu = $(".mobile-menu", headerEl);
    burger.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open);
      menu.hidden = !open;
      document.documentElement.style.setProperty("--header-h", headerEl.offsetHeight + "px");
    });
    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") { document.body.classList.remove("menu-open"); menu.hidden = true; }
    });
  }

  /* ---------- footer ---------- */
  const footerEl = $("#site-footer");
  if (footerEl) {
    footerEl.innerHTML = `
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a class="logo" href="index.html" aria-label="EverHealthy Nutrition Academy home">
              <img src="assets/logo-on-dark.png" alt="EverHealthy Nutrition Academy" class="logo-img">
            </a>
            <p style="color:rgba(255,255,255,0.65);font-size:13.5px;margin:16px 0 18px;max-width:320px">
              India's institute for functional nutrition education — training root-cause practitioners through rigorous, exam-verified certification.
            </p>
            <div class="disclaimer" style="background:rgba(255,255,255,0.05);border-color:rgba(255,255,255,0.12);color:rgba(255,255,255,0.65);font-size:12px">
              <div class="ico" style="width:22px;height:22px;font-size:13px">!</div>
              <div>Educational content for trained practitioners. Not medical advice — always consult a qualified healthcare provider.</div>
            </div>
          </div>
          <div>
            <h5>Learn</h5>
            <ul>
              <li><a href="courses.html">All certifications</a></li>
              <li><a href="mastery.html">Mastery programs</a></li>
              <li><a href="specialisations.html">Specialisations</a></li>
              <li><a href="conditions.html">Learn by condition</a></li>
            </ul>
          </div>
          <div>
            <h5>Academy</h5>
            <ul>
              <li><a href="about.html">About &amp; faculty</a></li>
              <li><a href="certification.html">Certification process</a></li>
              <li><a href="certification.html#samples">Sample certificates</a></li>
              <li><a href="certification.html#verify">Verify a credential</a></li>
            </ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul>
              <li><a href="book.html">Book a discovery call</a></li>
              <li><a href="book.html#consultation">Diet consultation</a></li>
              <li><a href="mailto:hello@everhealthy.academy">hello@everhealthy.academy</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 EverHealthy Nutrition Academy · All rights reserved</div>
          <div style="display:flex;gap:18px"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Refunds</a></div>
        </div>
      </div>`;
  }

  /* ---------- reveal on scroll ---------- */
  function bindReveals(root) {
    const els = $$("[data-reveal]", root).filter(el => !el.__rv);
    if (!("IntersectionObserver" in window)) { els.forEach(el => el.classList.add("in")); return; }
    document.documentElement.classList.add("js-reveal");
    // safety: if IO never fires (embedded webviews, capture tools), force-reveal
    setTimeout(() => { $$("[data-reveal]").forEach(el => el.classList.add("in")); }, 1200);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(el => { el.__rv = 1; io.observe(el); });
  }

  /* ---------- accordions ---------- */
  function bindAccordions(root) {
    $$(".acc-head, .case-head", root).forEach(head => {
      if (head.__acc) return; head.__acc = 1;
      head.addEventListener("click", () => {
        const item = head.parentElement;
        const body = $(".acc-body, .case-body", item);
        if (!body) return;
        const open = item.classList.toggle("open");
        body.style.maxHeight = open ? body.scrollHeight + "px" : "0px";
        head.setAttribute("aria-expanded", open);
      });
    });
    // open items marked default-open
    $$(".acc-item.open, .case-card.open", root).forEach(item => {
      const body = $(".acc-body, .case-body", item);
      if (body) body.style.maxHeight = body.scrollHeight + "px";
    });
  }

  /* ---------- tabs ---------- */
  function bindTabs(root) {
    $$("[data-tab-btn]", root).forEach(btn => {
      if (btn.__tab) return; btn.__tab = 1;
      btn.addEventListener("click", () => {
        const group = btn.closest("[data-tab-group]");
        const id = btn.dataset.tabBtn;
        $$("[data-tab-btn]", group).forEach(b => b.classList.toggle("active", b === btn));
        $$("[data-tab-panel]", group).forEach(p => p.classList.toggle("active", p.dataset.tabPanel === id));
      });
    });
  }

  /* ---------- rails ---------- */
  function bindRails(root) {
    $$(".rail-wrap", root).forEach(wrap => {
      if (wrap.__rail) return; wrap.__rail = 1;
      const rail = $(".rail", wrap);
      $$(".rail-btn", wrap).forEach(btn => {
        btn.addEventListener("click", () => {
          const dir = btn.dataset.dir === "prev" ? -1 : 1;
          rail.scrollBy({ left: dir * (rail.firstElementChild.offsetWidth + 16) * 2, behavior: "smooth" });
        });
      });
    });
  }

  /* ---------- counters ---------- */
  function bindCounters(root) {
    $$("[data-count]", root).forEach(el => {
      if (el.__cnt) return; el.__cnt = 1;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const io = new IntersectionObserver((en) => {
        if (!en[0].isIntersecting) return;
        io.disconnect();
        const t0 = performance.now(), dur = 1400;
        (function tick(t) {
          const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * e).toLocaleString("en-IN") + suffix;
          if (p < 1) requestAnimationFrame(tick);
        })(t0);
      }, { threshold: 0.4 });
      io.observe(el);
    });
  }

  /* ---------- forms (client-side demo submit) ---------- */
  function bindForms(root) {
    $$("form[data-form]", root).forEach(form => {
      if (form.__f) return; form.__f = 1;
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!form.reportValidity()) return;
        form.classList.add("sent");
        form.scrollIntoView === undefined || window.scrollBy({ top: -10 });
      });
    });
  }

  /* ---------- sticky mobile CTA ---------- */
  function bindStickyCta() {
    const bar = $(".sticky-cta");
    if (!bar) return;
    document.body.classList.add("has-sticky-cta");
    let shown = false;
    window.addEventListener("scroll", () => {
      const show = window.scrollY > 480;
      if (show !== shown) { shown = show; bar.classList.toggle("show", show); }
    }, { passive: true });
  }

  /* ---------- shared render helpers (used by pages) ---------- */
  window.EHUI = {
    programCard(p, opts) {
      opts = opts || {};
      const href = "program.html?id=" + p.id;
      const im = EH.progImg[p.id];
      const tag = p.type === "cert" ? (p.level || "Certification") : p.type === "mastery" ? "Mastery" : (p.isNew ? "New · 2 weeks" : "Specialisation");
      const price = EH.fmtPrice(p.price);
      return `
        <a class="card pcard" href="${href}" ${opts.reveal ? `data-reveal style="--d:${opts.delay || 0}ms"` : ""}>
          <div class="ph r32"><img src="${im}" alt="${p.name}" loading="lazy"><span class="tag clay">${tag}</span></div>
          <div class="pcard-body">
            <div class="kicker">${p.duration}${p.type === "cert" ? " · 3 exams · badge" : ""}</div>
            <h3>${p.name}</h3>
            <p class="pcard-desc">${p.short}</p>
            <div class="pcard-foot">
              <div><span class="price">${price}</span>${p.emi ? `<div class="kicker" style="font-size:9.5px;margin-top:2px">EMI ${p.emi}</div>` : ""}</div>
              <span class="go">Explore →</span>
            </div>
          </div>
        </a>`;
    },
    arc(certList, compact) {
      return `
        <div class="arc-list" data-reveal>
          ${certList.map((c, i) => `
            <a class="arc-item" href="program.html?id=${c.id}">
              <div class="arc-num"><div class="arc-dot">${String(i + 1).padStart(2, "0")}</div></div>
              <div class="arc-main">
                <div class="arc-level">${c.level.toUpperCase()}
                  ${c.startHere ? '<span class="arc-badge">Start here</span>' : ""}
                  ${c.flagship ? '<span class="arc-badge" style="background:var(--clay)">Flagship · 1 year</span>' : ""}
                </div>
                <h3>${c.name}${c.abbr ? ` <span style="color:var(--muted);font-size:0.7em">(${c.abbr})</span>` : ""}</h3>
                ${compact ? "" : `<p class="arc-desc">${c.short}</p>`}
              </div>
              <div class="arc-meta">
                <span class="arc-price">${EH.fmtPrice(c.price)}</span>
                <span class="arc-dur">${c.duration} · EMI ${c.emi.split(" ")[0]}</span>
              </div>
              <span class="btn ghost sm arc-go">View course →</span>
            </a>`).join("")}
        </div>`;
    },
    person(m, size) {
      const initials = m.name.replace("Dr. ", "").split(" ").map(w => w[0]).slice(0, 2).join("");
      return `
        <div class="person">
          <div class="avatar ${m.tone || "forest"}">${initials}</div>
          <div><div class="p-name">${m.name}</div><div class="p-role">${m.role}</div></div>
        </div>`;
    },
    faq(list) {
      return `
        <div class="acc faq" data-reveal>
          ${list.map((f, i) => `
            <div class="acc-item">
              <button class="acc-head" aria-expanded="false">
                <span class="ttl">${f.q}</span><span class="chev">+</span>
              </button>
              <div class="acc-body"><div class="acc-body-in">${f.a}</div></div>
            </div>`).join("")}
        </div>`;
    },
    refresh(root) {
      bindReveals(root || document);
      bindAccordions(root || document);
      bindTabs(root || document);
      bindRails(root || document);
      bindCounters(root || document);
      bindForms(root || document);
    },
  };

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    // let page-level render scripts run first (they're inline before this fires)
    EHUI.refresh(document);
    bindStickyCta();
  });
})();
