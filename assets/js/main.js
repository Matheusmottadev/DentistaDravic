const WHATSAPP_NUMBER = "5511915023134";
const WHATSAPP_MESSAGE =
  "Olá, vim do site e gostaria de efetuar um agendamento.";
const COOKIE_CONSENT_KEY = "pisomCookieConsent";

const SITE_NAV_ITEMS = [
  { href: "/paginas/lentes-em-resina.html", label: "Lentes em Resina" },
  { href: "/paginas/lentes-em-porcelana.html", label: "Lentes Premium" },
  { href: "/paginas/botox.html", label: "Botox" },
  { href: "/paginas/preenchimento-labial.html", label: "Preenchimento Labial" },
  { href: "/paginas/gengivoplastia.html", label: "Gengivoplastia" },
];

const normalizePath = (path) => {
  if (!path || path === "/") {
    return "/index.html";
  }

  return path.replace(/\/$/, "/index.html");
};

const currentPath = normalizePath(window.location.pathname);

document.querySelectorAll("[data-site-header]").forEach((placeholder) => {
  const navLinks = SITE_NAV_ITEMS.map(({ href, label }) => {
    const isActive = normalizePath(href) === currentPath;
    const activeAttributes = isActive ? ' class="is-active" aria-current="page"' : "";

    return `<a href="${href}"${activeAttributes}>${label}</a>`;
  }).join("");

  placeholder.outerHTML = `
    <header class="site-header" data-mobile-nav>
      <a class="brand" href="/index.html" aria-label="Ir para a home">
        <img
          class="brand__logo"
          src="/assets/images/logo-pisom.png"
          alt="Logo Pisom Odontologia"
          width="128"
          height="96"
        />
      </a>

      <button
        class="site-header__toggle"
        type="button"
        aria-expanded="false"
        aria-controls="site-header-panel"
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="site-header__panel" id="site-header-panel">
        <nav class="site-nav" aria-label="Navegação principal">
          ${navLinks}
        </nav>

        <a class="button button--ghost site-header__cta" data-whatsapp-link href="#">
          Agendar avaliação
        </a>
      </div>
    </header>
  `;
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  const linkPath = normalizePath(new URL(link.href, window.location.origin).pathname);
  const isActive = linkPath === currentPath;

  link.classList.toggle("is-active", isActive);

  if (isActive) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  const customMessage = link.dataset.whatsappMessage || WHATSAPP_MESSAGE;
  const message = encodeURIComponent(customMessage);
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const enableMarketingTools = () => {
  window.pisomMarketingConsent = true;
  window.dispatchEvent(new CustomEvent("pisom:marketing-consent"));
};

const savedCookieConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

if (savedCookieConsent === "accepted") {
  enableMarketingTools();
}

if (!savedCookieConsent) {
  const banner = document.createElement("section");
  banner.className = "cookie-consent";
  banner.setAttribute("aria-label", "Aviso de cookies");
  banner.innerHTML = `
    <div class="cookie-consent__text">
      <strong>Privacidade e cookies</strong>
      <p>
        Usamos cookies para melhorar sua experiencia. Futuramente, ferramentas
        como Google e Meta poderao medir acessos e campanhas, sempre conforme
        nossa <a href="/politica-de-privacidade.html">Política de Privacidade</a>.
      </p>
    </div>
    <div class="cookie-consent__actions">
      <button class="button button--secondary" type="button" data-cookie-reject>Recusar</button>
      <button class="button" type="button" data-cookie-accept>Aceitar</button>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelector("[data-cookie-accept]")?.addEventListener("click", () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    enableMarketingTools();
    banner.remove();
  });

  banner.querySelector("[data-cookie-reject]")?.addEventListener("click", () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    banner.remove();
  });
}

const mobileNav = document.querySelector("[data-mobile-nav]");

if (mobileNav) {
  const toggle = mobileNav.querySelector(".site-header__toggle");
  const links = mobileNav.querySelectorAll(".site-nav a, .site-header__cta");
  const mobileBreakpoint = window.matchMedia("(max-width: 900px)");

  const closeMobileNav = () => {
    mobileNav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Abrir menu");
  };

  const openMobileNav = () => {
    mobileNav.classList.add("is-open");
    toggle?.setAttribute("aria-expanded", "true");
    toggle?.setAttribute("aria-label", "Fechar menu");
  };

  toggle?.addEventListener("click", () => {
    if (mobileNav.classList.contains("is-open")) {
      closeMobileNav();
      return;
    }

    openMobileNav();
  });

  links.forEach((link) => {
    link.addEventListener("click", closeMobileNav);
  });

  document.addEventListener("click", (event) => {
    if (!mobileBreakpoint.matches || !mobileNav.classList.contains("is-open")) {
      return;
    }

    if (mobileNav.contains(event.target)) {
      return;
    }

    closeMobileNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileNav();
    }
  });

  const syncMobileNav = () => {
    if (!mobileBreakpoint.matches) {
      closeMobileNav();
    }
  };

  if (typeof mobileBreakpoint.addEventListener === "function") {
    mobileBreakpoint.addEventListener("change", syncMobileNav);
  } else {
    mobileBreakpoint.addListener(syncMobileNav);
  }
}

document.querySelectorAll("[data-comparison]").forEach((comparison) => {
  const range = comparison.querySelector(".comparison__range");

  if (!range) {
    return;
  }

  const syncSplit = () => {
    comparison.style.setProperty("--split", `${range.value}%`);
  };

  syncSplit();
  range.addEventListener("input", syncSplit);
});

const heroImage = document.querySelector(".hero-card > img");

if (heroImage) {
  const updateHeroParallax = () => {
    const offset = Math.min(window.scrollY * 0.08, 18);
    heroImage.style.setProperty("--hero-parallax-y", `${offset}px`);
  };

  updateHeroParallax();
  window.addEventListener("scroll", updateHeroParallax, { passive: true });
}

const marquees = [...document.querySelectorAll(".transformations-marquee")];
const visibleMarquees = new WeakSet();

const setMarqueePaused = (marquee, paused) => {
  marquee.classList.toggle("is-paused", paused);
  marquee.style.setProperty("--marquee-play-state", paused ? "paused" : "running");
};

const updateMarqueeFromMousePosition = (event) => {
  if (event.pointerType && event.pointerType !== "mouse") {
    return;
  }

  const hoveredMarquee = document
    .elementFromPoint(event.clientX, event.clientY)
    ?.closest(".transformations-marquee");

  marquees.forEach((marquee) => {
    const isOffscreen = !visibleMarquees.has(marquee);
    setMarqueePaused(marquee, isOffscreen || marquee === hoveredMarquee);
  });
};

if ("IntersectionObserver" in window) {
  const marqueeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleMarquees.add(entry.target);
          setMarqueePaused(entry.target, false);
          return;
        }

        visibleMarquees.delete(entry.target);
        setMarqueePaused(entry.target, true);
      });
    },
    { rootMargin: "160px 0px" }
  );

  marquees.forEach((marquee) => {
    setMarqueePaused(marquee, true);
    marqueeObserver.observe(marquee);
  });
} else {
  marquees.forEach((marquee) => visibleMarquees.add(marquee));
}

// Pause only after an actual mouse movement over the carousel. Scrolling alone
// must not change its state when the stationary pointer passes over it.
document.addEventListener("pointermove", updateMarqueeFromMousePosition, { passive: true });
window.addEventListener("blur", () => {
  marquees.forEach((marquee) => setMarqueePaused(marquee, !visibleMarquees.has(marquee)));
});

const footerSections = [...document.querySelectorAll("[data-footer-section]")];

if (footerSections.length) {
  const footerBreakpoint = window.matchMedia("(max-width: 720px)");

  const setFooterSectionState = (section, expanded) => {
    const toggle = section.querySelector(".site-footer__toggle");
    const panel = section.querySelector(".site-footer__panel");

    if (!toggle || !panel) {
      return;
    }

    section.classList.toggle("is-open", expanded);
    toggle.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
  };

  const syncFooterSections = () => {
    footerSections.forEach((section) => {
      const panel = section.querySelector(".site-footer__panel");

      if (!panel) {
        return;
      }

      if (footerBreakpoint.matches) {
        const isExpanded =
          section.classList.contains("is-open") &&
          section.querySelector(".site-footer__toggle")?.getAttribute("aria-expanded") === "true";
        setFooterSectionState(section, isExpanded);
        return;
      }

      section.classList.remove("is-open");
      panel.hidden = false;
    });
  };

  footerSections.forEach((section) => {
    const toggle = section.querySelector(".site-footer__toggle");

    if (!toggle) {
      return;
    }

    toggle.addEventListener("click", () => {
      if (!footerBreakpoint.matches) {
        return;
      }

      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      setFooterSectionState(section, !isExpanded);
    });
  });

  syncFooterSections();

  if (typeof footerBreakpoint.addEventListener === "function") {
    footerBreakpoint.addEventListener("change", syncFooterSections);
  } else {
    footerBreakpoint.addListener(syncFooterSections);
  }
}

document.querySelectorAll("[data-testimonial-rotator]").forEach((rotator) => {
  const slides = [...rotator.querySelectorAll(".testimonial-grid--slide")];
  const showcase = rotator.closest(".reviews-showcase");
  const visual = showcase?.querySelector(".reviews-showcase__visual");
  const content = showcase?.querySelector(".reviews-showcase__content");
  const viewport = rotator.querySelector(".testimonial-rotator__viewport");
  let visualSyncTimeout = null;
  let autoRotateTimer = null;
  let isRotatorVisible = false;

  if (slides.length < 2) {
    return;
  }

  let activeIndex = 0;

  const syncRotatorHeight = () => {
    if (!viewport) {
      return;
    }

    const viewportWidth = viewport.getBoundingClientRect().width;
    let maxSlideHeight = 0;

    slides.forEach((slide) => {
      const originalCssText = slide.style.cssText;

      slide.style.display = "grid";
      slide.style.position = "absolute";
      slide.style.visibility = "hidden";
      slide.style.pointerEvents = "none";
      slide.style.width = `${viewportWidth}px`;

      maxSlideHeight = Math.max(maxSlideHeight, slide.offsetHeight);
      slide.style.cssText = originalCssText;
    });

    if (maxSlideHeight > 0) {
      viewport.style.minHeight = `${Math.ceil(maxSlideHeight)}px`;
    }
  };

  const syncShowcaseHeight = () => {
    if (!visual || !content) {
      return;
    }

    if (window.innerWidth <= 1080) {
      viewport?.style.removeProperty("min-height");
      visual.style.height = "";
      visual.classList.remove("is-syncing");
      return;
    }

    syncRotatorHeight();

    const nextHeight = `${content.offsetHeight}px`;

    if (visual.style.height !== nextHeight) {
      visual.classList.add("is-syncing");
      window.clearTimeout(visualSyncTimeout);
      visualSyncTimeout = window.setTimeout(() => {
        visual.classList.remove("is-syncing");
      }, 760);
    }

    visual.style.height = nextHeight;
  };

  const setActiveSlide = (index) => {
    activeIndex = index;

    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === index;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    window.requestAnimationFrame(syncShowcaseHeight);
  };

  const stopAutoRotate = () => {
    window.clearInterval(autoRotateTimer);
    autoRotateTimer = null;
  };

  const startAutoRotate = () => {
    if (autoRotateTimer) {
      return;
    }

    autoRotateTimer = window.setInterval(() => {
      if (!isRotatorVisible) {
        return;
      }

      setActiveSlide((activeIndex + 1) % slides.length);
    }, 5200);
  };

  setActiveSlide(activeIndex);
  window.addEventListener("resize", syncShowcaseHeight);
  window.requestAnimationFrame(syncShowcaseHeight);

  if ("IntersectionObserver" in window) {
    const rotatorObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isRotatorVisible = entry.isIntersecting;

          if (isRotatorVisible) {
            startAutoRotate();
            return;
          }

          stopAutoRotate();
        });
      },
      { threshold: 0.01 }
    );

    rotatorObserver.observe(rotator);
  } else {
    isRotatorVisible = true;
    startAutoRotate();
  }
});

const revealTargets = [
  ...document.querySelectorAll(".section-heading"),
  ...document.querySelectorAll(".comparison"),
  ...document.querySelectorAll(".about-layout"),
  ...document.querySelectorAll(".cta-banner"),
  ...document.querySelectorAll(".service-card-link"),
  ...document.querySelectorAll(".treatment-card"),
  ...document.querySelectorAll(".testimonial-card"),
  ...document.querySelectorAll(".faq-list details"),
  ...document.querySelectorAll(".stat-card"),
  ...document.querySelectorAll(".transformations-marquee"),
  ...document.querySelectorAll(".service-hero__copy"),
  ...document.querySelectorAll(".service-hero__card")
];

revealTargets.forEach((element, index) => {
  element.classList.add("reveal-on-scroll");
  element.classList.add(`reveal-on-scroll--delay-${index % 4}`);
});

const revealImmediatelyInView = () => {
  const viewportHeight = window.innerHeight;

  revealTargets.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < viewportHeight * 0.92) {
      element.classList.add("is-visible-immediate");
    }
  });
};

revealImmediatelyInView();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      entry.target.classList.remove("is-visible-immediate");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.14,
    rootMargin: "0px 0px -8% 0px"
  }
);

revealTargets.forEach((element) => {
  revealObserver.observe(element);
});

const faqColumnBreakpoint = window.matchMedia("(min-width: 901px)");
const faqColumnLists = [...document.querySelectorAll(".faq-list--columns")].map((list) => ({
  list,
  items: [...list.querySelectorAll(":scope > details")]
}));

const syncFaqColumns = () => {
  faqColumnLists.forEach(({ list, items }) => {
    if (!items.length) {
      return;
    }

    list.querySelectorAll(":scope > .faq-list__column").forEach((column) => {
      column.remove();
    });

    if (!faqColumnBreakpoint.matches) {
      items.forEach((item) => list.appendChild(item));
      return;
    }

    const leftColumn = document.createElement("div");
    leftColumn.className = "faq-list__column";

    const rightColumn = document.createElement("div");
    rightColumn.className = "faq-list__column";

    items.forEach((item, index) => {
      (index % 2 === 0 ? leftColumn : rightColumn).appendChild(item);
    });

    list.append(leftColumn, rightColumn);
  });
};

syncFaqColumns();
faqColumnBreakpoint.addEventListener("change", syncFaqColumns);

document.querySelectorAll(".faq-list details").forEach((item) => {
  const summary = item.querySelector("summary");

  if (!summary) {
    return;
  }

  let answer = item.querySelector(".faq-answer");

  if (!answer) {
    answer = document.createElement("div");
    answer.className = "faq-answer";

    [...item.children].forEach((child) => {
      if (child !== summary) {
        answer.appendChild(child);
      }
    });

    item.appendChild(answer);
  }

  const setAnswerState = (isOpen) => {
    answer.style.height = isOpen ? "auto" : "0px";
    answer.style.opacity = isOpen ? "1" : "0";
    answer.style.transform = isOpen ? "translateY(0)" : "translateY(-8px)";
  };

  setAnswerState(item.hasAttribute("open"));

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    const isOpening = !item.hasAttribute("open");
    const startHeight = `${answer.offsetHeight}px`;

    answer.style.transition = "none";
    answer.style.height = startHeight;
    answer.style.opacity = isOpening ? "0" : "1";
    answer.style.transform = isOpening ? "translateY(-8px)" : "translateY(0)";

    if (isOpening) {
      item.setAttribute("open", "");
    }

    const endHeight = isOpening ? `${answer.scrollHeight}px` : "0px";

    window.requestAnimationFrame(() => {
      answer.style.transition =
        "height 360ms cubic-bezier(0.22, 1, 0.36, 1), opacity 220ms ease, transform 360ms cubic-bezier(0.22, 1, 0.36, 1)";
      answer.style.height = endHeight;
      answer.style.opacity = isOpening ? "1" : "0";
      answer.style.transform = isOpening ? "translateY(0)" : "translateY(-8px)";
    });

    window.setTimeout(() => {
      if (isOpening) {
        answer.style.height = "auto";
      } else {
        item.removeAttribute("open");
        answer.style.height = "0px";
      }
    }, 360);
  });
});

const updateScrolledState = () => {
  document.body.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateScrolledState();

let lastScrollY = window.scrollY;
let scrollingDownTimeout;

window.addEventListener(
  "scroll",
  () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY && currentScrollY > 18;

    updateScrolledState();

    if (isScrollingDown) {
      document.body.classList.add("is-scrolling-down");
      window.clearTimeout(scrollingDownTimeout);
      scrollingDownTimeout = window.setTimeout(() => {
        document.body.classList.remove("is-scrolling-down");
      }, 140);
    } else if (currentScrollY <= lastScrollY) {
      document.body.classList.remove("is-scrolling-down");
      window.clearTimeout(scrollingDownTimeout);
    }

    lastScrollY = currentScrollY;
  },
  { passive: true }
);

(() => {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const legacyRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("revealed");
        legacyRevealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    legacyRevealObserver.observe(element);
  });

  document.querySelectorAll(".faq__grid").forEach((grid) => {
    if (grid.querySelector(".faq__column")) {
      return;
    }

    const items = [...grid.querySelectorAll(":scope > .faq-item")];
    if (!items.length) {
      return;
    }

    const leftColumn = document.createElement("div");
    leftColumn.className = "faq__column";

    const rightColumn = document.createElement("div");
    rightColumn.className = "faq__column";

    items.forEach((item, index) => {
      (index % 2 === 0 ? leftColumn : rightColumn).appendChild(item);
    });

    grid.append(leftColumn, rightColumn);
  });

  document.querySelectorAll("[data-resina-quiz]").forEach((quiz) => {
    const title = quiz.querySelector("[data-quiz-title]");
    const body = quiz.querySelector("[data-quiz-body]");
    const result = quiz.querySelector("[data-quiz-result]");
    const steps = [...quiz.querySelectorAll("[data-quiz-step]")];
    const prevButton = quiz.querySelector("[data-quiz-prev]");
    const nextButton = quiz.querySelector("[data-quiz-next]");
    const finishButton = quiz.querySelector("[data-quiz-finish]");
    const initialCopy = {
      title: "Responda às 2 etapas.",
      body: "No final, você recebe uma resposta rápida e direta."
    };
    const choiceMap = {
      "Forma": {
        focus: "melhorar a forma do sorriso"
      },
      "Cor/manchas": {
        focus: "deixar a cor mais uniforme"
      },
      "Alinhamento": {
        focus: "ajustar o alinhamento visual"
      },
      "Natural": {
        outcome: "natural e leve"
      },
      "Visível, sem exagero": {
        outcome: "visível, mas sem exagero"
      },
      "Quero entender": {
        outcome: "mais claro antes de decidir"
      },
      "Naturalidade": {
        priority: "a naturalidade é importante para você"
      },
      "Saber se vale": {
        priority: "você quer entender se vale para o seu caso"
      },
      "Segurança": {
        priority: "você quer segurança antes de começar"
      }
    };
    const requiredGroups = ["incômodo", "resultado", "decisão", "prioridade"];
    let currentStep = 0;
    let isAnimating = false;
    let isShowingResult = false;

    function setInitialCopy() {
      if (!title || !body) {
        return;
      }

      title.textContent = initialCopy.title;
      body.textContent = initialCopy.body;
    }

    function getSelectedChoice(group) {
      return quiz.querySelector(`[data-quiz-choice][data-group="${group}"].is-selected`);
    }

    function buildQuizResult() {
      const selectedChoices = requiredGroups.map((group) => getSelectedChoice(group));

      if (selectedChoices.some((choice) => !choice)) {
        return null;
      }

      const [painChoice, outcomeChoice, decisionChoice] = selectedChoices.map((choice) =>
        choice.textContent.trim()
      );
      const painCopy = choiceMap[painChoice];
      const outcomeCopy = choiceMap[outcomeChoice];
      const decisionCopy = choiceMap[decisionChoice];

      if (!painCopy || !outcomeCopy || !decisionCopy) {
        return null;
      }

      return {
        title: "Seu objetivo faz sentido.",
        body: [
          `Pelo que você marcou, seu objetivo é ${painCopy.focus} com um resultado ${outcomeCopy.outcome}.`,
          `Como ${decisionCopy.priority}, a avaliação presencial ajuda a definir proporção, cor e planejamento com mais clareza.`,
          "Marque um horário com a Dra. Vitória para entender o melhor caminho para o seu sorriso."
        ].join(" ")
      };
    }

    function renderStep() {
      quiz.classList.toggle("is-showing-result", isShowingResult);

      steps.forEach((step, index) => {
        const isActive = index === currentStep;
        step.hidden = isShowingResult || !isActive;
        step.classList.toggle("is-active", isActive);
        step.classList.remove(
          "is-entering-forward",
          "is-entering-backward",
          "is-leaving-forward",
          "is-leaving-backward"
        );
      });

      const activeStep = steps[currentStep];
      const stepQuestions = activeStep ? [...activeStep.querySelectorAll("[data-quiz-question]")] : [];
      const isStepComplete = stepQuestions.every((question) =>
        question.querySelector("[data-quiz-choice].is-selected")
      );
      const isLastStep = currentStep === steps.length - 1;

      if (prevButton) {
        prevButton.hidden = currentStep === 0 && !isShowingResult;
      }

      if (nextButton) {
        nextButton.hidden = isShowingResult || isLastStep;
        nextButton.disabled = !isStepComplete;
      }

      if (finishButton) {
        finishButton.hidden = isShowingResult || !isLastStep;
        finishButton.disabled = !isStepComplete;
      }

      if (result) {
        result.hidden = !isShowingResult;
      }
    }

    function animateToStep(nextStep) {
      if (isAnimating || nextStep === currentStep || nextStep < 0 || nextStep >= steps.length) {
        return;
      }

      const direction = nextStep > currentStep ? "forward" : "backward";
      const currentQuestion = steps[currentStep];
      const incomingQuestion = steps[nextStep];

      isAnimating = true;
      currentQuestion.classList.remove("is-entering-forward", "is-entering-backward");
      currentQuestion.classList.add(direction === "forward" ? "is-leaving-forward" : "is-leaving-backward");

      window.setTimeout(() => {
        currentQuestion.hidden = true;
        currentQuestion.classList.remove("is-active", "is-leaving-forward", "is-leaving-backward");
        currentStep = nextStep;
        renderStep();
        incomingQuestion.hidden = false;
        incomingQuestion.classList.add(
          "is-active",
          direction === "forward" ? "is-entering-forward" : "is-entering-backward"
        );

        window.setTimeout(() => {
          incomingQuestion.classList.remove("is-entering-forward", "is-entering-backward");
          isAnimating = false;
        }, 280);
      }, 220);
    }

    function resetResultVisibility() {
      if (!result) {
        return;
      }

      isShowingResult = false;
      result.hidden = true;
      setInitialCopy();
    }

    function showFinalResult() {
      const finalCopy = buildQuizResult();
      if (!finalCopy || !title || !body || !result) {
        return;
      }

      title.textContent = finalCopy.title;
      body.textContent = finalCopy.body;
      isShowingResult = true;
      renderStep();
      result.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    quiz.querySelectorAll("[data-quiz-choice]").forEach((choice) => {
      choice.addEventListener("click", () => {
        const group = choice.dataset.group;
        const wasSelected = choice.classList.contains("is-selected");

        quiz.querySelectorAll(`[data-quiz-choice][data-group="${group}"]`).forEach((item) => {
          item.classList.remove("is-selected");
        });

        if (wasSelected) {
          resetResultVisibility();
          renderStep();
          return;
        }

        choice.classList.add("is-selected");
        resetResultVisibility();
        renderStep();
      });
    });

    prevButton?.addEventListener("click", () => {
      if (isShowingResult) {
        resetResultVisibility();
        renderStep();
        return;
      }

      animateToStep(Math.max(0, currentStep - 1));
    });

    nextButton?.addEventListener("click", () => {
      const activeStep = steps[currentStep];
      const isStepComplete =
        activeStep &&
        [...activeStep.querySelectorAll("[data-quiz-question]")].every((question) =>
          question.querySelector("[data-quiz-choice].is-selected")
        );

      if (!isStepComplete) {
        return;
      }

      animateToStep(Math.min(steps.length - 1, currentStep + 1));
    });

    finishButton?.addEventListener("click", () => {
      const activeStep = steps[currentStep];
      const isStepComplete =
        activeStep &&
        [...activeStep.querySelectorAll("[data-quiz-question]")].every((question) =>
          question.querySelector("[data-quiz-choice].is-selected")
        );

      if (!isStepComplete) {
        return;
      }

      showFinalResult();
    });

    setInitialCopy();
    renderStep();
  });

  function initSlider(sliderId, beforeId, handleId) {
    const slider = document.getElementById(sliderId);
    const before = document.getElementById(beforeId);
    const handle = document.getElementById(handleId);

    if (!slider || !before || !handle) {
      return;
    }

    let isDragging = false;

    function setPosition(clientX) {
      const rect = slider.getBoundingClientRect();
      let x = clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      const percent = (x / rect.width) * 100;
      before.style.width = `${percent}%`;
      handle.style.left = `${percent}%`;
    }

    handle.addEventListener("mousedown", (event) => {
      isDragging = true;
      event.preventDefault();
    });

    document.addEventListener("mousemove", (event) => {
      if (!isDragging) {
        return;
      }

      setPosition(event.clientX);
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
    });

    handle.addEventListener(
      "touchstart",
      (event) => {
        isDragging = true;
        event.preventDefault();
      },
      { passive: false }
    );

    document.addEventListener(
      "touchmove",
      (event) => {
        if (!isDragging) {
          return;
        }

        setPosition(event.touches[0].clientX);
      },
      { passive: true }
    );

    document.addEventListener("touchend", () => {
      isDragging = false;
    });

    slider.addEventListener("click", (event) => {
      if (event.target === handle || handle.contains(event.target)) {
        return;
      }

      setPosition(event.clientX);
    });
  }

  initSlider("slider1", "before1", "handle1");
  initSlider("slider2", "before2", "handle2");
  initSlider("slider3", "before3", "handle3");

  function initMobileCarousel(carousel) {
    const track = carousel.querySelector("[data-carousel-track]");
    const dotsContainer = carousel.querySelector("[data-carousel-dots]");
    const slides = Array.from(track?.children || []).filter(
      (slide) => slide.classList.contains("ba-slider") || slide.classList.contains("myth-card")
    );
    const mobileBreakpoint = window.matchMedia("(max-width: 768px)");
    const autoAdvanceMs = 2800;
    const autoResumeDelayMs = 7000;

    if (!track || slides.length <= 1 || !dotsContainer) {
      return;
    }

    let activeIndex = 0;
    let dots = [];
    let autoAdvanceTimer = null;
    let resumeTimer = null;
    let isAutoScrolling = false;

    const setActiveDot = (index) => {
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    const clearAutoTimers = () => {
      window.clearTimeout(autoAdvanceTimer);
      window.clearTimeout(resumeTimer);
    };

    const scheduleAutoAdvance = (delay = autoAdvanceMs) => {
      clearAutoTimers();

      if (!mobileBreakpoint.matches) {
        return;
      }

      autoAdvanceTimer = window.setTimeout(() => {
        scrollToSlide((activeIndex + 1) % slides.length, true);
      }, delay);
    };

    const pauseAutoAdvance = () => {
      clearAutoTimers();

      if (!mobileBreakpoint.matches) {
        return;
      }

      resumeTimer = window.setTimeout(() => {
        scheduleAutoAdvance();
      }, autoResumeDelayMs);
    };

    const syncFromScroll = (isUserInitiated = false) => {
      if (!mobileBreakpoint.matches) {
        activeIndex = 0;
        setActiveDot(activeIndex);
        return;
      }

      const slideWidth = slides[0].offsetWidth + 16;
      if (!slideWidth) {
        return;
      }

      activeIndex = Math.round(track.scrollLeft / slideWidth);
      activeIndex = Math.max(0, Math.min(activeIndex, slides.length - 1));
      setActiveDot(activeIndex);

      if (isUserInitiated) {
        pauseAutoAdvance();
      }
    };

    const scrollToSlide = (index, isAutoAdvance = false) => {
      const clampedIndex = Math.max(0, Math.min(index, slides.length - 1));
      const left = slides[clampedIndex].offsetLeft - track.offsetLeft;
      isAutoScrolling = isAutoAdvance;
      track.scrollTo({ left, behavior: "smooth" });
      activeIndex = clampedIndex;
      setActiveDot(activeIndex);

      if (!isAutoAdvance) {
        pauseAutoAdvance();
      } else {
        window.setTimeout(() => {
          isAutoScrolling = false;
          scheduleAutoAdvance();
        }, 450);
      }
    };

    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "before-after__dot";
      dot.setAttribute("aria-label", `Ir para o resultado ${index + 1}`);
      dot.setAttribute("aria-current", "false");
      dot.addEventListener("click", () => scrollToSlide(index));
      dotsContainer.appendChild(dot);
    });

    dots = Array.from(dotsContainer.querySelectorAll(".before-after__dot"));

    track.addEventListener(
      "scroll",
      () => {
        window.requestAnimationFrame(() => syncFromScroll(!isAutoScrolling));
      },
      { passive: true }
    );

    const registerInteractionPause = () => {
      pauseAutoAdvance();
    };

    carousel.addEventListener("touchstart", registerInteractionPause, { passive: true });
    carousel.addEventListener("pointerdown", registerInteractionPause);
    carousel.addEventListener("click", registerInteractionPause);

    const syncBreakpoint = () => {
      if (!mobileBreakpoint.matches) {
        track.scrollTo({ left: 0, behavior: "auto" });
        activeIndex = 0;
        clearAutoTimers();
        isAutoScrolling = false;
      } else {
        scheduleAutoAdvance();
      }

      setActiveDot(activeIndex);
    };

    if (typeof mobileBreakpoint.addEventListener === "function") {
      mobileBreakpoint.addEventListener("change", syncBreakpoint);
    } else {
      mobileBreakpoint.addListener(syncBreakpoint);
    }

    window.addEventListener("resize", () => syncFromScroll(false));
    syncBreakpoint();
  }

  document.querySelectorAll("[data-mobile-carousel]").forEach(initMobileCarousel);

  window.toggleFaq = (button) => {
    const item = button.closest(".faq-item");
    if (!item) {
      return;
    }

    const isOpen = item.classList.contains("open");
    item.classList.toggle("open", !isOpen);
  };

  window.toggleTestimonial = (button) => {
    if (window.innerWidth > 768) {
      return;
    }

    const card = button.closest(".t-card");
    if (!card) {
      return;
    }

    const isExpanded = card.classList.toggle("is-expanded");
    button.textContent = isExpanded ? "Ler menos" : "Ler mais";
  };

  const scrollToHashTarget = (hash, behavior = "smooth") => {
    const targetId = decodeURIComponent(hash.replace("#", ""));
    const target = document.getElementById(targetId);

    if (!target) {
      return false;
    }

    const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 18;

    window.scrollTo({ top: Math.max(top, 0), behavior });
    return true;
  };

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function onAnchorClick(event) {
      const url = new URL(this.getAttribute("href"), window.location.href);

      if (url.pathname !== window.location.pathname || !url.hash) {
        return;
      }

      const didScroll = scrollToHashTarget(url.hash);
      if (!didScroll) {
        return;
      }

      event.preventDefault();
      history.pushState(null, "", url.hash);
    });
  });

  const heroImg = document.querySelector(".hero__img");
  if (heroImg && window.innerWidth > 768) {
    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        if (scrollY < window.innerHeight) {
          heroImg.style.transform = `scale(1.06) translateY(${scrollY * 0.05}px)`;
        }
      },
      { passive: true }
    );
  }

  function animateCounter(element, target, duration = 1500) {
    let start = 0;
    const increment = target / (duration / 16);

    const update = () => {
      start += increment;
      if (start < target) {
        element.textContent = `${Math.floor(start)}+`;
        requestAnimationFrame(update);
        return;
      }

      element.textContent = `${target}+`;
    };

    requestAnimationFrame(update);
  }

  const badgeNumber = document.querySelector(".badge__number");
  if (badgeNumber) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          animateCounter(badgeNumber, 500);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    counterObserver.observe(badgeNumber);
  }
})();
