/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateContact() {
    const content = document.querySelector("#home-content")

    const contact = document.createElement("div")
    const contactText = document.createTextNode("123 456 789\n Freedom Square, Warsaw")
    contact.append(contactText)
    content.append(contact)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateHome() {
    const content = document.querySelector("#home-content")

    // content-left
    const contentLeft = document.createElement("div")
    
    const contentLeftImage = document.createElement("img")
    contentLeftImage.src=("profile.jpg")

    contentLeft.setAttribute("id", "home-content-left")

    const contentPar = document.createElement("p")
    const contentParText = document.createTextNode("The best ramen in Poland")

    content.append(contentLeft)
    contentLeft.append(contentLeftImage)
    contentLeft.append(contentPar)
    contentPar.append(contentParText)
    
    // content-right
    const contentRight = document.createElement("div")
    contentRight.setAttribute("id", "home-content-right")
    const contentRightText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo accusamus nobis, nemo sapiente qui reiciendis corporis nulla iste et. Voluptate rem alias consectetur quia incidunt.")

    content.append(contentRight)
    contentRight.append(contentRightText)
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function generateMenu() {
    const content = document.querySelector("#home-content")

    const menu = document.createElement("div")

    for (let i = 0; i < 5; i++) {
        let menuItem = document.createElement("div")
        let menuImg = document.createElement("img")
        let menuDisc = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum diam libero, et ultrices felis.")
        menuImg.src=("ramen.jpg")
        menuItem.setAttribute("class", "menu-item")
        menuItem.append(menuDisc)
        menuItem.append(menuImg)
        menu.append(menuItem)
    }

    
    content.append(menu)

    menu.setAttribute("id", "menu")
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





const content = document.querySelector("#home-content")

function clearAll() {
    while(content.firstChild) {
        content.removeChild(content.lastChild)
    }
}

clearAll()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()

const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const contactBtn = document.querySelector("#contact-btn")

homeBtn.onclick = function() {
    clearAll()
    ;(0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
}

menuBtn.onclick = function() {
    clearAll()
    ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
}

contactBtn.onclick = function() {
    clearAll()
    ;(0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNUZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7OztBQzVCZjtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7O1VDdkJmO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNBO0FBQ007OztBQUcxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQVk7O0FBRVo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHFEQUFZO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHdEQUFlO0FBQ25CLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtY29udGVudFwiKVxuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb25zdCBjb250YWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMTIzIDQ1NiA3ODlcXG4gRnJlZWRvbSBTcXVhcmUsIFdhcnNhd1wiKVxuICAgIGNvbnRhY3QuYXBwZW5kKGNvbnRhY3RUZXh0KVxuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRhY3QpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29udGFjdCIsImZ1bmN0aW9uIGdlbmVyYXRlSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWNvbnRlbnRcIilcblxuICAgIC8vIGNvbnRlbnQtbGVmdFxuICAgIGNvbnN0IGNvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIFxuICAgIGNvbnN0IGNvbnRlbnRMZWZ0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgY29udGVudExlZnRJbWFnZS5zcmM9KFwicHJvZmlsZS5qcGdcIilcblxuICAgIGNvbnRlbnRMZWZ0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS1jb250ZW50LWxlZnRcIilcblxuICAgIGNvbnN0IGNvbnRlbnRQYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGNvbnRlbnRQYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUaGUgYmVzdCByYW1lbiBpbiBQb2xhbmRcIilcblxuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRlbnRMZWZ0KVxuICAgIGNvbnRlbnRMZWZ0LmFwcGVuZChjb250ZW50TGVmdEltYWdlKVxuICAgIGNvbnRlbnRMZWZ0LmFwcGVuZChjb250ZW50UGFyKVxuICAgIGNvbnRlbnRQYXIuYXBwZW5kKGNvbnRlbnRQYXJUZXh0KVxuICAgIFxuICAgIC8vIGNvbnRlbnQtcmlnaHRcbiAgICBjb25zdCBjb250ZW50UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29udGVudFJpZ2h0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZS1jb250ZW50LXJpZ2h0XCIpXG4gICAgY29uc3QgY29udGVudFJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIElsbG8gYWNjdXNhbXVzIG5vYmlzLCBuZW1vIHNhcGllbnRlIHF1aSByZWljaWVuZGlzIGNvcnBvcmlzIG51bGxhIGlzdGUgZXQuIFZvbHVwdGF0ZSByZW0gYWxpYXMgY29uc2VjdGV0dXIgcXVpYSBpbmNpZHVudC5cIilcblxuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRlbnRSaWdodClcbiAgICBjb250ZW50UmlnaHQuYXBwZW5kKGNvbnRlbnRSaWdodFRleHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSG9tZSIsImZ1bmN0aW9uIGdlbmVyYXRlTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWNvbnRlbnRcIilcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGxldCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgICBsZXQgbWVudURpc2MgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIGVsZW1lbnR1bSBkaWFtIGxpYmVybywgZXQgdWx0cmljZXMgZmVsaXMuXCIpXG4gICAgICAgIG1lbnVJbWcuc3JjPShcInJhbWVuLmpwZ1wiKVxuICAgICAgICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnUtaXRlbVwiKVxuICAgICAgICBtZW51SXRlbS5hcHBlbmQobWVudURpc2MpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SW1nKVxuICAgICAgICBtZW51LmFwcGVuZChtZW51SXRlbSlcbiAgICB9XG5cbiAgICBcbiAgICBjb250ZW50LmFwcGVuZChtZW51KVxuXG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIilcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVNZW51IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2VuZXJhdGVIb21lIGZyb20gXCIuL2hvbWUuanNcIlxuaW1wb3J0IGdlbmVyYXRlTWVudSBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCBnZW5lcmF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC5qc1wiXG5cblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1jb250ZW50XCIpXG5cbmZ1bmN0aW9uIGNsZWFyQWxsKCkge1xuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdENoaWxkKVxuICAgIH1cbn1cblxuY2xlYXJBbGwoKVxuZ2VuZXJhdGVNZW51KClcblxuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZS1idG5cIilcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnRuXCIpXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWJ0blwiKVxuXG5ob21lQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBjbGVhckFsbCgpXG4gICAgZ2VuZXJhdGVIb21lKClcbn1cblxubWVudUJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgY2xlYXJBbGwoKVxuICAgIGdlbmVyYXRlTWVudSgpXG59XG5cbmNvbnRhY3RCdG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyQWxsKClcbiAgICBnZW5lcmF0ZUNvbnRhY3QoKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==