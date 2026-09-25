const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  if (!menuBtn || !menu) return;

  // Обработчик 1: открытие/закрытие меню (бургер + крестик + пункты)
  menu.addEventListener("click", (e) => {
    // Клик по крестику — закрыть меню
    if (e.target.closest(".close-btn")) {
      menu.classList.remove("active-menu");
      return;
    }

    // Клик по пунктам меню — закрыть меню
    if (e.target.closest("menu ul li a")) {
      menu.classList.remove("active-menu");
      return;
    }
  });

  // Обработчик 2: клик по бургеру — открыть/закрыть меню
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active-menu");
  });
};

export default menu;