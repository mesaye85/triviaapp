"use strict";
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 5614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Session = ({ score, onNewHighScore })=>{
    const [highScore, setHighScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [newHighScore, setNewHighScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Fetch the current high score from the server when the component mounts
        axios.get("/api/highscore") // replace with your actual backend API endpoint
        .then((response)=>{
            setHighScore(response.data.highScore);
        }).catch((err)=>{
            console.error(err);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Check if the current score is a new high score
        if (score > highScore) {
            setHighScore(score);
            setNewHighScore(true);
            // Update the high score on the server
            axios.put("/api/highscore", {
                score
            }) // replace with your actual backend API endpoint
            .catch((err)=>{
                console.error(err);
            });
            if (onNewHighScore) {
                onNewHighScore(score);
            }
        }
    }, [
        score,
        highScore,
        onNewHighScore
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                children: [
                    "Current Score: ",
                    score
                ]
            }),
            newHighScore && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: "You beat your high score!"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Session);


/***/ })

};
;