import "../scss/spinkit.scss";

const sendForm = ({ formId, calcForm = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const errorText = "Ошибка...";
  const successText = "Спсибо! Наш менеджер свяжется с вами!";

  const validate = (list) => {
    let success = true;

    return success;
  };

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

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};


  
    
    statusBlock.appendChild(spin());
    form.appendChild(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    calcForm.forEach((elem) => {
      const element = document.getElementById(elem.id);
      console.log(element);
      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          const spinner = statusBlock.querySelector('section');
          if (spinner) spinner.remove();
          statusBlock.textContent = successText;
          statusBlock.style.color = '#4caf50';
          form.reset();
        })
        .catch((error) => {
          const spinner = statusBlock.querySelector('section');
          if (spinner) spinner.remove();
          statusBlock.textContent = errorText;
          statusBlock.style.color = '#f44336';
        });
    } else {
      alert("Данные не валидны!!!");
    }
  };

  try {
    if(!form) {
      throw new Error('Верните форму на место, пожалуйста ))!')
    }
    form.addEventListener("submit", (e) => {
    e.preventDefault();

    submitForm();
  });
  } catch(error) {
    console.log(error.message)
  }
};

export default sendForm;
