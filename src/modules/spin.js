const spin = () => {
  const section = document.createElement('section');

  const circleBounce = document.createElement('div');
  circleBounce.className = 'sk-circle-bounce';

  for (let i = 1; i <= 12; i++) {
    const child = document.createElement('div');
    child.className = `sk-child sk-circle-${i}`;
    circleBounce.appendChild(child);
  }

  section.appendChild(circleBounce);
  return section;
};

export default spin;