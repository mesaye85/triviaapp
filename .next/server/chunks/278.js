"use strict";
exports.id = 278;
exports.ids = [278];
exports.modules = {

/***/ 3684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const categories = [
    "History",
    "ChatGPT",
    "Sports",
    "Science tech",
    "Geography",
    "Entertainment"
];
const Category = ({ onCategorySelect })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Select a Category"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: categories.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>onCategorySelect(category),
                            children: category
                        })
                    }, category))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ }),

/***/ 5973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "footer-gradiant",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "\xa9 2023 All rights reserved"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "|"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Meet the Team"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "|"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: "Contact Us"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 2278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8131);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5973);
/* harmony import */ var _TypingBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3973);
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8026);
/* harmony import */ var _QuestionProcessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8136);
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5614);
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8492);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3684);










function GameFace() {
    const [showGame, setShowGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLoggingIn, setIsLoggingIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isRegistering, setIsRegistering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [showCategory, setShowCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handlePlayGame = ()=>{
        if (isLoggedIn) {
            setShowGame(true);
        } else {
            setShowCategory(true);
        }
    };
    const handleLoginClick = ()=>{
        setIsLoggingIn(true);
    };
    const handleLogout = ()=>{
        setIsLoggedIn(false);
        setShowGame(false);
        setShowCategory(false);
    };
    const handleRegistration = ()=>{
        setIsRegistering(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isLoggedIn) {
            setShowCategory(true);
        }
    }, [
        isLoggedIn
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "app-container",
        children: [
            !showGame && !isLoggingIn && !isRegistering && !showCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TypingBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "buttons-container",
                children: [
                    !showGame && !showCategory && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: "Welcome to Trivia Game"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "nolog-button",
                                onClick: handlePlayGame,
                                children: "Play Game"
                            }),
                            !isLoggingIn && !isRegistering && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "log-button",
                                onClick: handleLoginClick,
                                children: "LOGIN"
                            }),
                            !isLoggingIn && !isRegistering && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "log-button",
                                onClick: handleRegistration,
                                children: "REGISTER"
                            })
                        ]
                    }),
                    isLoggingIn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
                        setIsLoggingIn: setIsLoggingIn
                    }),
                    isRegistering && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Registration__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
                    showCategory && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Category__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
                    showGame && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GameOver__WEBPACK_IMPORTED_MODULE_5__["default"], {}),
                    showGame && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuestionProcessor__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
                    showGame && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Session__WEBPACK_IMPORTED_MODULE_7__["default"], {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameFace);


/***/ }),

/***/ 8026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const GameOver = ({ score, onNavigate })=>{
    function handlePlayAgain() {
        onNavigate("category");
    }
    function handleExit() {
        onNavigate("gameface");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Game Over"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Your final score is: ",
                    score
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handlePlayAgain,
                children: "Play Again"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: handleExit,
                children: "Exit Game"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameOver);


/***/ }),

/***/ 3973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function TypingBanner() {
    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const originalText = "WELCOME TO TRIVIAGPT!\nPLAY, SCORE, AND SAVE! \uD83D\uDE80\nLOGIN/REGISTER TO KEEP TRACK\nOF YOUR HIGH SCORES, OR SIMPLY PLAY FOR THE JOY OF IT! \uD83C\uDFAE";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let index = 0;
        const timerId = setInterval(()=>{
            if (index < originalText.length) {
                setText((prevText)=>prevText + originalText.charAt(index));
                index++;
            } else {
                clearInterval(timerId);
            }
        }, 50);
        return ()=>{
            clearInterval(timerId);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "banner",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: text
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypingBanner);


/***/ })

};
;