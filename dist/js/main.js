/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\nvar _timer = _interopRequireDefault(__webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\"));\nvar _menu = _interopRequireDefault(__webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\"));\nvar _modal = _interopRequireDefault(__webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\"));\nvar _scroll = _interopRequireDefault(__webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\"));\nvar _calc = _interopRequireDefault(__webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\"));\nvar _submit = _interopRequireDefault(__webpack_require__(/*! ./modules/submit */ \"./modules/submit.js\"));\nvar _tabs = _interopRequireDefault(__webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }\n(0, _timer.default)(\"17 october 2026\");\n(0, _menu.default)();\n(0, _modal.default)();\n(0, _scroll.default)();\n(0, _calc.default)();\n(0, _submit.default)();\n(0, _tabs.default)();\n\n//# sourceURL=webpack:///./index.js?\n}");

/***/ },

/***/ "./modules/calc.js"
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n// calc.js\n\nconst calc = () => {\n  const inputSquare = document.querySelector('.calc-square');\n  const inputCount = document.querySelector('.calc-count');\n  const inputDay = document.querySelector('.calc-day');\n  inputSquare.addEventListener(\"input\", e => {\n    // Меняем значение (value) самого инпута, удаляя всё, кроме цифр\n    inputSquare.value = inputSquare.value.replace(/[^\\d]/g, '').slice(0, 4); // максимальное значение поля 9999\n  });\n  inputCount.addEventListener(\"input\", e => {\n    // Меняем значение (value) самого инпута, удаляя всё, кроме цифр\n    inputCount.value = inputCount.value.replace(/[^\\d]/g, '').slice(0, 2); // максимальное значение поля 99\n  });\n  inputDay.addEventListener(\"input\", e => {\n    // Меняем значение (value) самого инпута, удаляя всё, кроме цифр\n    inputDay.value = inputDay.value.replace(/[^\\d]/g, '').slice(0, 3); // максимальное значение поля 999\n  });\n};\nvar _default = exports[\"default\"] = calc;\n\n//# sourceURL=webpack:///./modules/calc.js?\n}");

/***/ },

/***/ "./modules/menu.js"
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const closeBtn = document.querySelector(\".close-btn\");\n  const menu = document.querySelector(\"menu\");\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\n  const handleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n  menuBtn.addEventListener(\"click\", handleMenu);\n  closeBtn.addEventListener(\"click\", handleMenu);\n  menuItems.forEach(menuItem => menuItem.addEventListener(\"click\", handleMenu));\n};\nvar _default = exports[\"default\"] = menu;\n\n//# sourceURL=webpack:///./modules/menu.js?\n}");

/***/ },

/***/ "./modules/modal.js"
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst modal = () => {\n  const modal = document.querySelector('.popup');\n  const buttons = document.querySelectorAll('.popup-btn');\n  const closeBtn = modal.querySelector('.popup-close');\n  const MOBILE_BREAKPOINT = 768;\n  const ANIMATION_DURATION = 300; // мс\n\n  let animationFrameId = null;\n  const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;\n  const animate = ({\n    from,\n    to,\n    duration,\n    onUpdate,\n    onComplete\n  }) => {\n    const startTime = performance.now();\n    if (animationFrameId) {\n      cancelAnimationFrame(animationFrameId);\n    }\n    const step = now => {\n      const elapsed = now - startTime;\n      const progress = Math.min(elapsed / duration, 1);\n      const eased = 1 - (1 - progress) * (1 - progress);\n      const value = from + (to - from) * eased;\n      onUpdate(value);\n      if (progress < 1) {\n        animationFrameId = requestAnimationFrame(step);\n      } else {\n        animationFrameId = null;\n        if (onComplete) onComplete();\n      }\n    };\n    animationFrameId = requestAnimationFrame(step);\n  };\n  const openModal = () => {\n    modal.style.display = 'block';\n    if (isMobile()) {\n      modal.style.opacity = '1';\n      modal.style.transform = 'scale(1)';\n      return;\n    }\n    modal.style.opacity = '0';\n    modal.style.transform = 'scale(0.9)';\n    animate({\n      from: 0,\n      to: 1,\n      duration: ANIMATION_DURATION,\n      onUpdate: value => {\n        modal.style.opacity = value;\n        modal.style.transform = `scale(${0.9 + value * 0.1})`;\n      }\n    });\n  };\n  const closeModal = () => {\n    if (isMobile()) {\n      modal.style.display = 'none';\n      return;\n    }\n    animate({\n      from: 1,\n      to: 0,\n      duration: ANIMATION_DURATION,\n      onUpdate: value => {\n        modal.style.opacity = value;\n        modal.style.transform = `scale(${0.9 + value * 0.1})`;\n      },\n      onComplete: () => {\n        modal.style.display = 'none';\n      }\n    });\n  };\n  buttons.forEach(btn => {\n    btn.addEventListener('click', openModal);\n  });\n  closeBtn.addEventListener('click', closeModal);\n};\nvar _default = exports[\"default\"] = modal;\n\n//# sourceURL=webpack:///./modules/modal.js?\n}");

/***/ },

/***/ "./modules/scroll.js"
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst scroll = () => {\n  const DURATION = 800;\n  const HEADER_OFFSET = 0;\n  let animationFrameId = null;\n  const easeInOutQuad = t => {\n    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;\n  };\n  const scrollToElement = targetY => {\n    const startY = window.pageYOffset;\n    const distance = targetY - startY;\n    const startTime = performance.now();\n    if (animationFrameId) {\n      cancelAnimationFrame(animationFrameId);\n    }\n    const step = now => {\n      const elapsed = now - startTime;\n      const progress = Math.min(elapsed / DURATION, 1);\n      const eased = easeInOutQuad(progress);\n      window.scrollTo(0, startY + distance * eased);\n      if (progress < 1) {\n        animationFrameId = requestAnimationFrame(step);\n      } else {\n        animationFrameId = null;\n      }\n    };\n    animationFrameId = requestAnimationFrame(step);\n  };\n  const handleMenuClick = e => {\n    const href = e.currentTarget.getAttribute(\"href\");\n    if (!href || !href.startsWith(\"#\") || href === \"#\") return;\n    const targetEl = document.querySelector(href);\n    if (!targetEl) return;\n    e.preventDefault();\n    const targetY = targetEl.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;\n    scrollToElement(targetY);\n  };\n  const menuLinks = document.querySelectorAll('a[href^=\"#\"]');\n  menuLinks.forEach(link => {\n    link.addEventListener(\"click\", handleMenuClick);\n  });\n};\nvar _default = exports[\"default\"] = scroll;\n\n//# sourceURL=webpack:///./modules/scroll.js?\n}");

/***/ },

/***/ "./modules/submit.js"
/*!***************************!*\
  !*** ./modules/submit.js ***!
  \***************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n// submit.js\n\n// --- Валидация формы при отправке ---\n\nconst submit = () => {\n  // --- Валидация форм при отправке ---\n  const forms = document.querySelectorAll('form[name=\"user_form\"]');\n  forms.forEach(form => {\n    form.addEventListener(\"submit\", e => {\n      let isValid = true;\n\n      // 1. Проверка поля \"Ваше имя\" — только кириллица, дефис, пробел\n      const nameField = form.querySelector('input[type=\"text\"]');\n      if (nameField && nameField.value.trim() !== \"\") {\n        if (!/^[\\sа-яА-ЯёЁ-]+$/.test(nameField.value)) {\n          alert(\"В имени разрешены только кириллица, дефис и пробел\");\n          isValid = false;\n        }\n      }\n\n      // 2. Проверка поля email — только латиница, цифры, спецсимволы\n      const emailField = form.querySelector('input[type=\"email\"]');\n      if (emailField && emailField.value.trim() !== \"\") {\n        if (!/^[a-zA-Z0-9@\\-_.!~*'']+$/.test(emailField.value)) {\n          alert(\"В email разрешены только латиница, цифры и символы: @ - _ . ! ~ * '\");\n          isValid = false;\n        }\n      }\n\n      // 3. Проверка поля tel — только цифры, скобки, дефис\n      const telField = form.querySelector('input[type=\"tel\"]');\n      if (telField && telField.value.trim() !== \"\") {\n        if (!/^[d()\\-]+$/.test(telField.value)) {\n          alert(\"В номере телефона разрешены только цифры, круглые скобки и дефис\");\n          isValid = false;\n        }\n      }\n\n      // 4. Проверка поля \"Ваше сообщение\" — только кириллица, дефис, пробел\n      const messageField = form.querySelector('input[placeholder=\"Ваше сообщение\"]');\n      if (messageField && messageField.value.trim() !== \"\") {\n        if (!/^[\\sа-яА-ЯёЁ-]+$/.test(messageField.value)) {\n          alert(\"В сообщении разрешены только кириллица, дефис и пробел\");\n          isValid = false;\n        }\n      }\n\n      // Если есть хотя бы одно обязательное пустое поле (required)\n      const requiredFields = form.querySelectorAll('[required]');\n      requiredFields.forEach(field => {\n        if (!field.value.trim()) {\n          isValid = false;\n        }\n      });\n\n      // Итог: блокируем отправку, если что-то невалидно\n      if (!isValid) {\n        e.preventDefault();\n      }\n    });\n  });\n};\n\n//   const forms = document.querySelectorAll('form');\n\n//   forms.addEventListener(\"submit\", (e) => {\n//     let isValid = true;\n\n//     const messageField = forms.querySelector('input[type=\"text\"]');\n//     if (messageField && messageField.value.trim() !== \"\") {\n//       if (!/^[\\sа-яА-ЯёЁ-]+$/.test(messageField.value)) {\n//         alert(\"В поле 'Ваше имя' разрешены только кириллица, дефис и пробел\");\n//         isValid = false;\n//       }\n//     }\n\n//     const emailField = forms.querySelector('input[type=\"email\"]');\n//     if (emailField && emailField.value.trim() !== \"\") {\n//       if (!/^[a-zA-Z0-9@\\-_.!~*'']+$/.test(emailField.value)) {\n//         alert(\"В поле 'E-email' разрешены только латиница, цифры и символы: @ - _ . ! ~ * '\");\n//         isValid = false;\n//       }\n//     }\n\n//     const telField = forms.querySelector('input[type=\"tel\"]');\n//     if (telField && telField.value.trim() !== \"\") {\n//       if (!/^[\\d()\\-]+$/.test(telField.value)) {\n//         alert(\"В поле 'Номер телефона' разрешены только цифры, круглые скобки и дефис\");\n//         isValid = false;\n//       }\n//     }\n\n//     // const requiredFields = forms.SquerySelectorAll('[required]');\n//     // requiredFields.forEach((field) => {\n//     //   if (!field.value.trim()) {\n//     //     isValid = false;\n//     //   }\n//     // });\n\n//     if (!isValid) {\n//       e.preventDefault();\n//     }\n//   });\n// }\nvar _default = exports[\"default\"] = submit;\n\n//# sourceURL=webpack:///./modules/submit.js?\n}");

/***/ },

/***/ "./modules/tabs.js"
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst tabs = () => {};\nvar _default = exports[\"default\"] = tabs;\n\n//# sourceURL=webpack:///./modules/tabs.js?\n}");

/***/ },

/***/ "./modules/timer.js"
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
(__unused_webpack_module, exports) {

eval("{\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nconst timer = deadLine => {\n  const timerHours = document.getElementById(\"timer-hours\");\n  const timerMinutes = document.getElementById(\"timer-minutes\");\n  const timerSeconds = document.getElementById(\"timer-seconds\");\n  const padZero = num => String(num).padStart(2, \"0\");\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadLine).getTime();\n    let dateNow = new Date().getTime();\n    let timeRemaining = (dateStop - dateNow) / 1000;\n\n    // если дедлайн уже прошёл — не уходим в минус, фиксируем на нуле\n    if (timeRemaining < 0) {\n      timeRemaining = 0;\n    }\n    let hours = Math.floor(timeRemaining / 60 / 60);\n    let minutes = Math.floor(timeRemaining / 60 % 60);\n    let seconds = Math.floor(timeRemaining % 60);\n    return {\n      timeRemaining,\n      hours,\n      minutes,\n      seconds\n    };\n  };\n  const updateClock = () => {\n    // console.log(\"tick\");\n\n    let getTime = getTimeRemaining();\n    timerHours.textContent = padZero(getTime.hours);\n    timerMinutes.textContent = padZero(getTime.minutes);\n    timerSeconds.textContent = padZero(getTime.seconds);\n    if (getTime.timeRemaining <= 0) {\n      clearInterval(intervalId);\n    }\n  };\n  updateClock();\n  const intervalId = setInterval(updateClock, 1000);\n};\nvar _default = exports[\"default\"] = timer;\n\n//# sourceURL=webpack:///./modules/timer.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;