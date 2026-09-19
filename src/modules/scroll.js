const scroll = () => {
  const DURATION = 800;
  const HEADER_OFFSET = 0;

  let animationFrameId = null;

  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  };

  const scrollToElement = (targetY) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / DURATION, 1);
      const eased = easeInOutQuad(progress);

      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        animationFrameId = null;
      }
    };

    animationFrameId = requestAnimationFrame(step);
  };

  const handleMenuClick = (e) => {
    const href = e.currentTarget.getAttribute("href");

    if (!href || !href.startsWith("#") || href === "#") return;

    const targetEl = document.querySelector(href);
    if (!targetEl) return;

    e.preventDefault();

    const targetY =
      targetEl.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;

    scrollToElement(targetY);
  };

  const menuLinks = document.querySelectorAll('a[href^="#"]');

  menuLinks.forEach((link) => {
    link.addEventListener("click", handleMenuClick);
  });
};

export default scroll;
