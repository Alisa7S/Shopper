/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const getCards = __webpack_require__(\"./src sync recursive\")() \n\nconst mobileMenu = document.querySelector('.mobile-menu')\nconst navbar = document.querySelector('.navbar')\n\nconst links = {\n    products:document.querySelector('#Products'),\n    sellers:document.querySelector('#Sellers'),\n    earphones:document.querySelector('#Earphones'),\n    launches:document.querySelector('#Launches'),\n}\n\ndocument.querySelector('.burger-menu').addEventListener('click', (event) => {\n        mobileMenu.classList.remove('hidden')\n        mobileMenu.classList.add('visible')\n    })\n\n\nmobileMenu.querySelector('.mobile-menu__close')\n    .addEventListener('click', (event) => {\n        mobileMenu.classList.remove('visible')\n        mobileMenu.classList.add('hidden')\n    })\n\n    function scrollToSection(event) {\n        const classes = event.target.className;\n        if (classes.includes('menu-link')) {\n            const content = event.target.innerText;\n            switch (content) {\n                case 'Products':\n                    links.products.scrollIntoView();\n                    break;\n                case 'Sellers':\n                    links.sellers.scrollIntoView();\n                    break;\n                case 'Earphones':\n                    links.earphones.scrollIntoView();\n                    break;\n                case 'Launches':\n                    links.launches.scrollIntoView();\n                    break;\n            }\n        }\n    }\n    \n    mobileMenu.addEventListener('click', scrollToSection);\n    navbar.addEventListener('click', scrollToSection);\n\n    // console.log('Webpack work')\n    \n\n//# sourceURL=webpack://shopper/./src/main.js?");

/***/ }),

/***/ "./src sync recursive":
/*!*******************!*\
  !*** ./src/ sync ***!
  \*******************/
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://shopper/./src/_sync?");

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;