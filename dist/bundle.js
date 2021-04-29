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

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nvar Home = function Home() {\n  var welcome = function welcome() {\n    pageContent.innerHTML += \"\\n      <h1>Welcome,</h1>\\n      <p>The Hyper Progame is the world's premier event for computer and video games and relates products. At The Hyper Progame, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brighest, and most innovative entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and nerver-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, adns social influencers providing unprecedented exposure.</p>\\n    \";\n  };\n\n  var fetchHome = function fetchHome() {\n    var date = '2021-05-01,2025-05-01';\n    fetch(\"https://api.rawg.io/api/games?key=\".concat(_utils__WEBPACK_IMPORTED_MODULE_0__.key, \"&dates=\").concat(date)).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      pageContent.innerHTML += \"<div class=\\\"space-20\\\"><button class=\\\"btn\\\">Platform : any </button></div>\";\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showGames)(response.results);\n    });\n  };\n\n  var render = function render() {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cleanPageContent)();\n    welcome();\n    fetchHome();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://jour234/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nvar PageDetail = function PageDetail(argument) {\n  var foreachPlatform = function foreachPlatform(array) {\n    var result = \"\";\n    array.forEach(function (element) {\n      result += \"<a class=\\\"link-intern\\\" href=\\\"\\\">\".concat(element.platform.name, \"</a>, \");\n    });\n    return result.slice(0, -2);\n  };\n\n  var foreach = function foreach(array) {\n    var result = \"\";\n    array.forEach(function (element) {\n      result += \"<a class=\\\"link-intern\\\" href=\\\"\\\">\".concat(element.name, \"</a>, \");\n    });\n    return result.slice(0, -2);\n  };\n\n  var fetchDetail = function fetchDetail() {\n    fetch(\"https://api.rawg.io/api/games/\".concat(argument, \"?key=\").concat(_utils__WEBPACK_IMPORTED_MODULE_0__.key)).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      //console.log(response) // à enlever\n      imgTop(response);\n      infos(response);\n\n      if (response.stores.length > 0) {\n        buy(response);\n      }\n\n      fetchTrailer();\n      fetchSreenshot();\n    });\n  };\n\n  var buy = function buy(game) {\n    pageContent.innerHTML += \"\\n      <div class=\\\"space-40 section-buy\\\">\\n        <h2>BUY</h2>\\n      </div>\\n    \";\n    game.stores.forEach(function (element) {\n      document.querySelector('div.section-buy').innerHTML += \"<p><a class=\\\"link-extern\\\" href=\\\"https://\".concat(element.store.domain, \"\\\">\").concat(element.store.name, \"</a></p>\");\n    });\n  };\n\n  var imgTop = function imgTop(game) {\n    document.querySelector('main > header').innerHTML = \"\\n      <div class=\\\"section-jumbotron\\\">\\n        <img src=\\\"\".concat(game.background_image, \"\\\" alt=\\\"image-game\\\"></img>\\n        <button class=\\\"btn btn-img\\\">\\n          <a class=\\\"btn\\\" href=\\\"\").concat(game.website, \"\\\">Check Website</a>\\n          <svg aria-hidden=\\\"true\\\" focusable=\\\"false\\\" data-prefix=\\\"fas\\\" data-icon=\\\"play\\\" class=\\\"svg-inline--fa fa-play fa-w-14\\\" role=\\\"img\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"0 0 448 512\\\"><path fill=\\\"currentColor\\\" d=\\\"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z\\\"></path></svg>\\n        </button>\\n      </div>\\n      \");\n  };\n\n  var infos = function infos(game) {\n    var titleAndRating = function titleAndRating() {\n      pageContent.innerHTML += \"\\n        <div id=\\\"title-rating\\\" class=\\\"d-flex item-between\\\">\\n          <h1>\".concat(game.name_original || game.name, \"</h1>\\n        </div>\\n      \");\n\n      if (game.rating_top !== 0 && game.ratings_count !== 0) {\n        document.getElementById('title-rating').innerHTML += \"<h2>\".concat(game.rating, \"/\").concat(game.rating_top, \" - \").concat(game.ratings_count, \" votes</h2>\");\n      }\n    };\n\n    titleAndRating();\n\n    var description = function description() {\n      if (game.description !== \"\" && game.description !== null) {\n        pageContent.innerHTML += \"\".concat(game.description);\n      }\n    };\n\n    description();\n\n    var dateDeveloperPlatformPuplisher = function dateDeveloperPlatformPuplisher() {\n      pageContent.innerHTML += \"<div id=\\\"date-developer-platform-puplisher\\\" class=\\\"d-flex item-between\\\"></div>\";\n\n      if (game.released !== \"\" && game.released !== null) {\n        document.getElementById('date-developer-platform-puplisher').innerHTML += \"\\n          <div class=\\\"col-50\\\">\\n            <h3>Release Date</h3>\\n            <p>\".concat(game.released, \"</p>\\n          </div>\\n        \");\n      }\n\n      if (game.developers.length > 0) {\n        document.getElementById('date-developer-platform-puplisher').innerHTML += \"\\n          <div class=\\\"col-50\\\">\\n            <h3>Developer</h3>\\n            <p>\".concat(foreach(game.developers), \"</p>\\n          </div>\\n        \");\n      }\n\n      if (game.platforms.length > 0) {\n        document.getElementById('date-developer-platform-puplisher').innerHTML += \"\\n          <div class=\\\"col-50\\\">\\n            <h3>Platforms</h3>\\n            <p>\".concat(foreachPlatform(game.platforms), \"</p>\\n          </div>\\n        \");\n      }\n\n      if (game.publishers.length > 0) {\n        document.getElementById('date-developer-platform-puplisher').innerHTML += \"\\n          <div class=\\\"col-50\\\">\\n            <h3>Publishers</h3>\\n            <p>\".concat(foreach(game.publishers), \"</p>\\n          </div>\\n        \");\n      }\n    };\n\n    dateDeveloperPlatformPuplisher();\n\n    var genreAndTag = function genreAndTag() {\n      pageContent.innerHTML += \"<div id=\\\"genre-tag\\\" class=\\\"d-flex item-between\\\"></div>\";\n\n      if (game.genres.length > 0) {\n        document.getElementById('genre-tag').innerHTML += \"\\n          <div class=\\\"col-50\\\">\\n            <h3>Genre</h3>\\n            <p>\".concat(foreach(game.genres), \"</p>\\n          </div>\\n        \");\n      }\n\n      if (game.tags.length > 0) {\n        document.getElementById('genre-tag').innerHTML += \"\\n          <div class=\\\"col-50\\\">\\n            <h3>Tags</h3>\\n            <p>\".concat(foreach(game.tags), \"</p>\\n          </div>\\n        \");\n      }\n    };\n\n    genreAndTag();\n  };\n\n  var fetchTrailer = function fetchTrailer() {\n    fetch(\"https://api.rawg.io/api/games/\".concat(argument, \"/movies?key=\").concat(_utils__WEBPACK_IMPORTED_MODULE_0__.key)).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      if (response.results.length > 0) {\n        pageContent.innerHTML += \"\\n        <div class=\\\"space-40 section-trailer\\\">\\n          <h2>TRAILER</h2>\\n          <video controls width=\\\"100%\\\">\\n            <source src=\\\"\".concat(response.results[0].data.max, \"\\\" type=\\\"video/mp4\\\">\\n            Sorry, your browser doesn't support embedded videos.\\n          </video>\\n        </div>\\n        \");\n      }\n    });\n  };\n\n  var fetchSreenshot = function fetchSreenshot() {\n    fetch(\"https://api.rawg.io/api/games/\".concat(argument, \"/screenshots?key=\").concat(_utils__WEBPACK_IMPORTED_MODULE_0__.key)).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      var showImage = function showImage(array) {\n        for (var i = 0; i < 4; i++) {\n          document.getElementById('img-screenshot').innerHTML += \"\\n          <div class=\\\"imgDetail\\\">\\n            <img src=\\\"\".concat(array[i].image, \"\\\" alt=\\\"\\\"></img>\\n          </div>\");\n        }\n      };\n\n      if (response.results.length > 0) {\n        pageContent.innerHTML += \"\\n          <div class=\\\"space-0 section-screenshot\\\">\\n            <h2>SCREENSHOTS</h2>\\n            <div id=\\\"img-screenshot\\\" class=\\\"d-flex item-between flex-wrap\\\"></div>\\n          </div>\\n        \";\n        showImage(response.results);\n      }\n    });\n  };\n\n  var render = function render() {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cleanPageContent)();\n    fetchDetail();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://jour234/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nvar PageList = function PageList(argument) {\n  var fetchList = function fetchList() {\n    fetch(\"https://api.rawg.io/api/games?key=\".concat(_utils__WEBPACK_IMPORTED_MODULE_0__.key, \"&search=\").concat(argument)).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.showGames)(response.results);\n    });\n  };\n\n  var render = function render() {\n    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.cleanPageContent)();\n    fetchList();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://jour234/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\ndocument.getElementById('icon-search').addEventListener('click', function () {\n  document.getElementById('icon-search').href = \"#pagelist/\".concat(myForm.search.value);\n});\n\n//# sourceURL=webpack://jour234/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n\nvar routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  \"pagelist\": _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n\n//# sourceURL=webpack://jour234/./src/js/routes.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"key\": () => (/* binding */ key),\n/* harmony export */   \"cleanPageContent\": () => (/* binding */ cleanPageContent),\n/* harmony export */   \"showGames\": () => (/* binding */ showGames)\n/* harmony export */ });\nvar key = 'f33d3f2b30334242bc095b695e504fec';\n\nvar cleanPageContent = function cleanPageContent() {\n  document.querySelector('main > header').innerHTML = \"\";\n  pageContent.innerHTML = \"\";\n};\n\nvar showGames = function showGames(array) {\n  var i = 0;\n  var count = 9;\n  pageContent.innerHTML += \"<div class=\\\"d-flex item-between flex-wrap\\\"></div>\";\n\n  var pagination = function pagination(array, i, count) {\n    for (i; i < count; i++) {\n      document.querySelector(\"div.flex-wrap\").innerHTML += \"\\n        <div class=\\\"cardGame col-30 space-20\\\">\\n          <a href=\\\"#pagedetail/\".concat(array[i].id, \"\\\">\\n            <img class=\\\"img-hover\\\" src=\\\"\").concat(array[i].background_image, \"\\\" alt=\\\"\\\"></img>\\n          </a>\\n          <h2 class=\\\"text-white\\\">\").concat(array[i].name, \"</h2>\\n          <div id=\\\"icon-\").concat(i, \"\\\" class=\\\"d-flex\\\">\\n          </div>\\n          \\n        </div>\\n      \");\n\n      if (array[i].platforms !== null) {\n        array[i].parent_platforms.forEach(function (element) {\n          if (element.platform.name === \"PlayStation\") {\n            document.getElementById(\"icon-\".concat(i)).innerHTML += \"<a class=\\\"link-intern\\\" href=\\\"\\\"><img class=\\\"icon-platform flex-wrap\\\" src=\\\"./src/images/ps4.svg\\\" alt=\\\"\\\"></img></a>\";\n          }\n\n          if (element.platform.name === \"PC\") {\n            document.getElementById(\"icon-\".concat(i)).innerHTML += \"<a class=\\\"link-intern\\\" href=\\\"\\\"><img class=\\\"icon-platform flex-wrap\\\" src=\\\"./src/images/windows.svg\\\" alt=\\\"\\\"></img></a>\";\n          }\n\n          if (element.platform.name === \"Xbox\") {\n            document.getElementById(\"icon-\".concat(i)).innerHTML += \"<a class=\\\"link-intern\\\" href=\\\"\\\"><img class=\\\"icon-platform flex-wrap\\\" src=\\\"./src/images/xbox.svg\\\" alt=\\\"\\\"></img></a>\";\n          }\n\n          if (element.platform.name === \"Nintendo\") {\n            document.getElementById(\"icon-\".concat(i)).innerHTML += \"<a class=\\\"link-intern\\\" href=\\\"\\\"><img class=\\\"icon-platform flex-wrap\\\" src=\\\"./src/images/switch.svg\\\" alt=\\\"\\\"></img></a>\";\n          }\n\n          if (element.platform.name === \"Linux\") {\n            document.getElementById(\"icon-\".concat(i)).innerHTML += \"<a class=\\\"link-intern\\\" href=\\\"\\\"><img class=\\\"icon-platform flex-wrap\\\" src=\\\"./src/images/linux.svg\\\" alt=\\\"\\\"></img></a>\";\n          }\n\n          if (element.platform.name === \"Android\") {\n            document.getElementById(\"icon-\".concat(i)).innerHTML += \"<a class=\\\"link-intern\\\" href=\\\"\\\"><img class=\\\"icon-platform flex-wrap\\\" src=\\\"./src/images/mobile.svg\\\" alt=\\\"\\\"></img></a>\";\n          }\n        });\n      }\n    }\n  };\n\n  pagination(array, i, count);\n  pageContent.innerHTML += \"\\n    <div class=\\\"item-center\\\">\\n      <button id=\\\"show-more\\\" class=\\\"btn\\\">Show more</button>\\n    </div>\\n  \";\n  document.getElementById('show-more').addEventListener('click', function () {\n    if (count >= 18) {\n      pagination(array, i += 9, count += 2);\n\n      if (count >= 20) {\n        document.querySelector('div.item-center').innerHTML = \"\";\n      }\n    } else {\n      pagination(array, i += 9, count += 9);\n    }\n  });\n};\n\n\n\n//# sourceURL=webpack://jour234/./src/js/utils.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://jour234/./src/sass/style.scss?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;