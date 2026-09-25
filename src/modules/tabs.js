const tabs = () => {
  const tabPanel = document.querySelector(".service-header");
  const tabs = document.querySelectorAll(".service-header-tab");
  const tabContent = document.querySelectorAll(".service-tab");

  if (!tabPanel || tabs.length === 0) return;

  tabPanel.addEventListener("click", (e) => {
    // Находим ближайший родительский элемент с классом service-header-tab
    const clickedTab = e.target.closest(".service-header-tab");

    if (clickedTab) {
      tabs.forEach((tab, i) => {
        if (tab === clickedTab) {
          tab.classList.add('active');
          tabContent[i].classList.remove('d-none')
        } else {
          tab.classList.remove('active');
          tabContent[i].classList.add('d-none')
        }
      });
    }
  });
};

export default tabs;