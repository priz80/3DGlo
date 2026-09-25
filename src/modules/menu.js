const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menuEl = document.querySelector("menu");

  if (!menuBtn || !menuEl) return;

  // Обработчик 1: бургер — toggle active-menu
  menuBtn.addEventListener("click", () => {
    menuEl.classList.toggle("active-menu");
  });

  // Обработчик 2: делегирование — закрытие меню
  document.addEventListener("click", (e) => {
    // Клик по .close-btn или li — закрыть меню
    if (e.target.closest(".close-btn, li")) {
      menuEl.classList.remove("active-menu");
      return;
    }

    // Клик вне menu и вне бургера — закрыть только если открыто
    if (!e.target.closest("menu") && !e.target.closest(".menu") && menuEl.classList.contains("active-menu")) {
      menuEl.classList.remove("active-menu");
    }
  });
};

export default menu;
