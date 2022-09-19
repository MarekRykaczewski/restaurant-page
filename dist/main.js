/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



const content = document.querySelector("#home-content")

function clearAll() {
    while(content.firstChild) {
        content.removeChild(content.lastChild)
    }
}

clearAll()
;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDNUJmO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7VUN2QmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDQTs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtY29udGVudFwiKVxuXG4gICAgLy8gY29udGVudC1sZWZ0XG4gICAgY29uc3QgY29udGVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgXG4gICAgY29uc3QgY29udGVudExlZnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBjb250ZW50TGVmdEltYWdlLnNyYz0oXCJwcm9maWxlLmpwZ1wiKVxuXG4gICAgY29udGVudExlZnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLWNvbnRlbnQtbGVmdFwiKVxuXG4gICAgY29uc3QgY29udGVudFBhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgY29uc3QgY29udGVudFBhclRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRoZSBiZXN0IHJhbWVuIGluIFBvbGFuZFwiKVxuXG4gICAgY29udGVudC5hcHBlbmQoY29udGVudExlZnQpXG4gICAgY29udGVudExlZnQuYXBwZW5kKGNvbnRlbnRMZWZ0SW1hZ2UpXG4gICAgY29udGVudExlZnQuYXBwZW5kKGNvbnRlbnRQYXIpXG4gICAgY29udGVudFBhci5hcHBlbmQoY29udGVudFBhclRleHQpXG4gICAgXG4gICAgLy8gY29udGVudC1yaWdodFxuICAgIGNvbnN0IGNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjb250ZW50UmlnaHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJob21lLWNvbnRlbnQtcmlnaHRcIilcbiAgICBjb25zdCBjb250ZW50UmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gSWxsbyBhY2N1c2FtdXMgbm9iaXMsIG5lbW8gc2FwaWVudGUgcXVpIHJlaWNpZW5kaXMgY29ycG9yaXMgbnVsbGEgaXN0ZSBldC4gVm9sdXB0YXRlIHJlbSBhbGlhcyBjb25zZWN0ZXR1ciBxdWlhIGluY2lkdW50LlwiKVxuXG4gICAgY29udGVudC5hcHBlbmQoY29udGVudFJpZ2h0KVxuICAgIGNvbnRlbnRSaWdodC5hcHBlbmQoY29udGVudFJpZ2h0VGV4dClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVIb21lIiwiZnVuY3Rpb24gZ2VuZXJhdGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWUtY29udGVudFwiKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbGV0IG1lbnVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICAgIGxldCBtZW51RGlzYyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gZWxlbWVudHVtIGRpYW0gbGliZXJvLCBldCB1bHRyaWNlcyBmZWxpcy5cIilcbiAgICAgICAgbWVudUltZy5zcmM9KFwicmFtZW4uanBnXCIpXG4gICAgICAgIG1lbnVJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudS1pdGVtXCIpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZChtZW51RGlzYylcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJbWcpXG4gICAgICAgIG1lbnUuYXBwZW5kKG1lbnVJdGVtKVxuICAgIH1cblxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnUpXG5cbiAgICBtZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVwiKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZU1lbnUiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZW5lcmF0ZUhvbWUgZnJvbSBcIi4vaG9tZS5qc1wiXG5pbXBvcnQgZ2VuZXJhdGVNZW51IGZyb20gXCIuL21lbnUuanNcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob21lLWNvbnRlbnRcIilcblxuZnVuY3Rpb24gY2xlYXJBbGwoKSB7XG4gICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpXG4gICAgfVxufVxuXG5jbGVhckFsbCgpXG5nZW5lcmF0ZU1lbnUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==