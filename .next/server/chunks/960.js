exports.id = 960;
exports.ids = [960];
exports.modules = {

/***/ 4576:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const GptApi = ({ onQuestionFetched })=>{
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const getQuestion = async ()=>{
            try {
                // Get question and options
                const questionResponse = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("https://api.openai.com/v1/engines/davinci-codex/completions", {
                    prompt: "Create a trivia question about science with multiple choice answers.",
                    max_tokens: 100
                }, {
                    headers: {
                        "Authorization": `Bearer YOUR_OPEN_AI_KEY`
                    }
                });
                const generatedText = questionResponse.data.choices[0].text.trim();
                const [questionText, ...options] = generatedText.split("\n");
                const questionData = {
                    text: questionText,
                    options: options.map((option)=>option.slice(3))
                };
                onQuestionFetched(questionData);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch question from GPT-3 API.");
            }
        };
        getQuestion();
    }, [
        onQuestionFetched
    ]);
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                "Error: ",
                error
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Loading question..."
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GptApi);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9581);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Registration_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9932);
/* harmony import */ var _Registration_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Registration_css__WEBPACK_IMPORTED_MODULE_3__);

 // In GameFace.js
 // In Login.js
 // In Registration.js
// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 9639:
/***/ (() => {



/***/ }),

/***/ 9581:
/***/ (() => {



/***/ }),

/***/ 9932:
/***/ (() => {



/***/ })

};
;