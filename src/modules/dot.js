const dot = ({
  slideClass = '.portfolio-item',
  dotClass = '.dot',
  dotActiveClass = 'dot-active',
} = {}) => {
  const portfolioItems = document.querySelectorAll(slideClass);
  const dotsContainer = document.querySelector('.portfolio-dots');

  if (!dotsContainer || portfolioItems.length === 0) return;

  portfolioItems.forEach((_, index) => {
    const dotEl = document.createElement('li');
    dotEl.classList.add(dotClass.replace('.', ''));
    if (index === 0) {
      dotEl.classList.add(dotActiveClass);
    }
    dotsContainer.appendChild(dotEl);
  });
};

export default dot;