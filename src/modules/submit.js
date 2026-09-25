// submit.js

const submit = () => {
// --- Валидация форм при отправке ---
const forms = document.querySelectorAll('form[name="user_form"]');

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    let isValid = true;

    const messageField = form.querySelector('input[name="user_message"]');
    if (messageField && messageField.value.trim() !== "") {
      if (!/^[\sа-яА-ЯёЁ-]+$/.test(messageField.value)) {
        alert("В сообщении разрешены только кириллица, дефис и пробел");
        isValid = false;
      }
    }

    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value.trim() !== "") {
      if (!/^[a-zA-Z0-9@\-_.!~*'']+$/.test(emailField.value)) {
        alert("В email разрешены только латиница, цифры и символы: @ - _ . ! ~ * '");
        isValid = false;
      }
    }

    const telField = form.querySelector('input[type="tel"]');
    if (telField && telField.value.trim() !== "") {
      if (!/^[\d()\-]+$/.test(telField.value)) {
        alert("В номере телефона разрешены только цифры, круглые скобки и дефис");
        isValid = false;
      }
    }

    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      e.preventDefault();
    }
  });
});
}

export default submit;