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


const Category = ({ onCategorySelect })=>{
    const categories = [
        "History",
        "Geography",
        "Sports",
        "Science & Tech",
        "Entertainment",
        "ChatGPT"
    ];
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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3918);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5973);
/* harmony import */ var _TypingBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3973);
/* harmony import */ var _GameOver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8026);
/* harmony import */ var _QuestionProcessor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8136);
/* harmony import */ var _Session__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5614);
/* harmony import */ var _Registration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8492);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_QuestionProcessor__WEBPACK_IMPORTED_MODULE_6__]);
_QuestionProcessor__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function GameFace() {
    const [screen, setScreen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("gameface");
    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // New state variable for category
    const handlePlayGame = ()=>{
        if (isLoggedIn) {
            setScreen("game");
        } else {
            setScreen("category");
        }
    };
    const handleCategorySelect = (selectedCategory)=>{
        setCategory(selectedCategory);
        setScreen("game");
    };
    const handleLoginClick = ()=>{
        setScreen("login");
    };
    const handleLogout = ()=>{
        setIsLoggedIn(false);
        setScreen("gameface");
    };
    const handleRegistration = ()=>{
        setScreen("registration");
    };
    const handleNavigate = (newScreen)=>{
        setScreen(newScreen);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isLoggedIn) {
            setScreen("category");
        }
    }, [
        isLoggedIn
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "app-container",
        children: [
            screen === "gameface" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_TypingBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
            screen === "gameface" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Welcome to Trivia Game"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "nolog-button",
                        onClick: handlePlayGame,
                        children: "Play Game"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "log-button",
                        onClick: handleLoginClick,
                        children: "LOGIN"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "log-button",
                        onClick: handleRegistration,
                        children: "REGISTER"
                    })
                ]
            }),
            screen === "login" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
                setIsLoggingIn: setIsLoggedIn
            }),
            screen === "registration" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Registration__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
            screen === "category" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Category__WEBPACK_IMPORTED_MODULE_9__["default"], {
                onCategorySelect: handleCategorySelect
            }),
            screen === "game" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GameOver__WEBPACK_IMPORTED_MODULE_5__["default"], {
                onNavigate: handleNavigate
            }),
            screen === "game" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QuestionProcessor__WEBPACK_IMPORTED_MODULE_6__["default"], {
                category: category
            }),
            screen === "game" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Session__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameFace);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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