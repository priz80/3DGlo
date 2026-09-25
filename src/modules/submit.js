// submit.js


// --- Валидация формы при отправке ---


const submit = () => {

  // --- Валидация форм при отправке ---
const forms = document.querySelectorAll('form[name="user_form"]');

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    let isValid = true;

    // 1. Проверка поля "Ваше имя" — только кириллица, дефис, пробел
    const nameField = form.querySelector('input[type="text"]');
    if (nameField && nameField.value.trim() !== "") {
      if (!/^[\sа-яА-ЯёЁ-]+$/.test(nameField.value)) {
        alert("В имени разрешены только кириллица, дефис и пробел");
        isValid = false;
      }
    }
    
    // 2. Проверка поля email — только латиница, цифры, спецсимволы
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value.trim() !== "") {
      if (!/^[a-zA-Z0-9@\-_.!~*'']+$/.test(emailField.value)) {
        alert("В email разрешены только латиница, цифры и символы: @ - _ . ! ~ * '");
        isValid = false;
      }
    }

    // 3. Проверка поля tel — только цифры, скобки, дефис
    const telField = form.querySelector('input[type="tel"]');
    if (telField && telField.value.trim() !== "") {
      if (!/^[d()\-]+$/.test(telField.value)) {
        alert("В номере телефона разрешены только цифры, круглые скобки и дефис");
        isValid = false;
      }
    }

    // 4. Проверка поля "Ваше сообщение" — только кириллица, дефис, пробел
    const messageField = form.querySelector('input[placeholder="Ваше сообщение"]');
    if (messageField && messageField.value.trim() !== "") {
      if (!/^[\sа-яА-ЯёЁ-]+$/.test(messageField.value)) {
        alert("В сообщении разрешены только кириллица, дефис и пробел");
        isValid = false;
      }
    }
    

    // Если есть хотя бы одно обязательное пустое поле (required)
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        isValid = false;
      }
    });

    // Итог: блокируем отправку, если что-то невалидно
    if (!isValid) {
      e.preventDefault();
    }
  });
});

}
  
//   const forms = document.querySelectorAll('form');

//   forms.addEventListener("submit", (e) => {
//     let isValid = true;

//     const messageField = forms.querySelector('input[type="text"]');
//     if (messageField && messageField.value.trim() !== "") {
//       if (!/^[\sа-яА-ЯёЁ-]+$/.test(messageField.value)) {
//         alert("В поле 'Ваше имя' разрешены только кириллица, дефис и пробел");
//         isValid = false;
//       }
//     }

//     const emailField = forms.querySelector('input[type="email"]');
//     if (emailField && emailField.value.trim() !== "") {
//       if (!/^[a-zA-Z0-9@\-_.!~*'']+$/.test(emailField.value)) {
//         alert("В поле 'E-email' разрешены только латиница, цифры и символы: @ - _ . ! ~ * '");
//         isValid = false;
//       }
//     }

//     const telField = forms.querySelector('input[type="tel"]');
//     if (telField && telField.value.trim() !== "") {
//       if (!/^[\d()\-]+$/.test(telField.value)) {
//         alert("В поле 'Номер телефона' разрешены только цифры, круглые скобки и дефис");
//         isValid = false;
//       }
//     }

//     // const requiredFields = forms.SquerySelectorAll('[required]');
//     // requiredFields.forEach((field) => {
//     //   if (!field.value.trim()) {
//     //     isValid = false;
//     //   }
//     // });

//     if (!isValid) {
//       e.preventDefault();
//     }
//   });
// }

export default submit;