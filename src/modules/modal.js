const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = modal.querySelector('.popup-close');

  const MOBILE_BREAKPOINT = 768;
  const ANIMATION_DURATION = 300; // мс

  let animationFrameId = null;

  const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

  const animate = ({ from, to, duration, onUpdate, onComplete }) => {
    const startTime = performance.now();

    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - (1 - progress) * (1 - progress);

      const value = from + (to - from) * eased;
      onUpdate(value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        animationFrameId = null;
        if (onComplete) onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(step);
  };

  const openModal = () => {
    modal.style.display = 'block';

    if (isMobile()) {
      modal.style.opacity = '1';
      modal.style.transform = 'scale(1)';
      return;
    }

    modal.style.opacity = '0';
    modal.style.transform = 'scale(0.9)';

    animate({
      from: 0,
      to: 1,
      duration: ANIMATION_DURATION,
      onUpdate: (value) => {
        modal.style.opacity = value;
        modal.style.transform = `scale(${0.9 + value * 0.1})`;
      },
    });
  };

  const closeModal = () => {
    if (isMobile()) {
      modal.style.display = 'none';
      return;
    }

    animate({
      from: 1,
      to: 0,
      duration: ANIMATION_DURATION,
      onUpdate: (value) => {
        modal.style.opacity = value;
        modal.style.transform = `scale(${0.9 + value * 0.1})`;
      },
      onComplete: () => {
        modal.style.display = 'none';
      },
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  closeBtn.addEventListener('click', closeModal);
};

export default modal;