import {animate} from "./helpers.js";

const modal = () => {
  const modal = document.querySelector(".popup");
  const content = modal.querySelector(".popup-content");
  const buttons = document.querySelectorAll(".popup-btn");

  const openModal = () => {
    modal.style.display = "block";
    modal.style.opacity = "0";
    content.style.transform = "scale(0) rotate(-360deg)";

    animate({
      timing(timeFraction) {
        return 1 - Math.pow(1 - timeFraction, 3);
      },
      draw(progress) {
        modal.style.opacity = progress;
        content.style.transform = `scale(${progress}) rotate(${progress * -360}deg)`;
      },
      duration: 600
    });
  };

  const closeModal = () => {
    animate({
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.opacity = 1 - progress;
        content.style.transform = `scale(${1 - progress}) rotate(${(1 - progress) * -360}deg)`;
      },
      duration: 400,
      complete: () => {
        modal.style.display = "none";
      }
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      closeModal();
    }
  });
};

export default modal;
