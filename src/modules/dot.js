const dot = () => {
	const portfolioItems = document.querySelectorAll('.portfolio-item');
	const dotsContainer = document.querySelector('.portfolio-dots');

	if (!dotsContainer || portfolioItems.length === 0) return;

	portfolioItems.forEach((_, index) => {
		const dot = document.createElement('li');
		dot.classList.add('dot');
		if (index === 0) {
			dot.classList.add('dot-active');
		}
		dotsContainer.appendChild(dot);
	});
};

export default dot;