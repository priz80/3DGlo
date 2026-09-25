// calc.js
const inputSquare = document.querySelector(".calc-square");
const inputCount = document.querySelector(".calc-count");
const inputDay = document.querySelector(".calc-day");

inputSquare.addEventListener("input", (e) => {
  // Меняем значение (value) самого инпута, удаляя всё, кроме цифр
  inputSquare.value = inputSquare.value.replace(/[^\d]/g, '').slice(0, 4); // максимальное значение поля 9999
});
inputCount.addEventListener("input", (e) => {
  // Меняем значение (value) самого инпута, удаляя всё, кроме цифр
  inputCount.value = inputCount.value.replace(/[^\d]/g, '').slice(0, 2); // максимальное значение поля 99
});
inputDay.addEventListener("input", (e) => {
  // Меняем значение (value) самого инпута, удаляя всё, кроме цифр
  inputDay.value = inputDay.value.replace(/[^\d]/g, '').slice(0, 3); // максимальное значение поля 999
});