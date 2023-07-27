"use strict";
exports.id = 136;
exports.ids = [136];
exports.modules = {

/***/ 8136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const QuestionProcessor = ({ category, onGameOver })=>{
    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentQuestion, setCurrentQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [timer, setTimer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);
    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        axios.get(`/api/questions/${category}`).then((response)=>{
            const shuffledQuestions = shuffleArray(response.data);
            if (!shuffledQuestions.length) {
                setError("No questions available for this category");
                return;
            }
            setQuestions(shuffledQuestions);
            setCurrentQuestion(shuffledQuestions[0]);
        }).catch((error)=>{
            console.error("Error fetching questions:", error);
            setError("Error fetching questions");
        });
    }, [
        category
    ]);
    // Start a countdown when the current question changes
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentQuestion) {
            setTimer(20);
            const interval = setInterval(()=>{
                setTimer((prevTimer)=>{
                    if (prevTimer <= 0) {
                        clearInterval(interval);
                        onGameOver(score); // Game Over when the timer runs out
                    }
                    return prevTimer - 1;
                });
            }, 1000);
            return ()=>clearInterval(interval);
        }
    }, [
        currentQuestion,
        onGameOver,
        score
    ]);
    function shuffleArray(array) {
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [
                array[j],
                array[i]
            ];
        }
        return array;
    }
    function getNextQuestion() {
        const currentQuestionIndex = questions.findIndex((q)=>q.id === currentQuestion.id);
        if (currentQuestionIndex >= questions.length - 1) {
            onGameOver(score); // Game Over when all questions have been answered
        } else {
            const nextQuestion = questions[currentQuestionIndex + 1];
            setSelectedOption(null);
            setCurrentQuestion(nextQuestion);
        }
    }
    function handleOptionChange(e) {
        setSelectedOption(e.target.value);
        if (e.target.value === currentQuestion.correctOption) {
            setScore((prevScore)=>prevScore + 100);
            getNextQuestion();
        } else {
            onGameOver(score); // Game Over when a wrong answer is selected
        }
    }
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                "Error: ",
                error
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: currentQuestion?.question
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Time remaining: ",
                    timer,
                    " seconds"
                ]
            }),
            currentQuestion && Object.entries(currentQuestion.options).map(([key, value])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "radio",
                            id: key,
                            name: "option",
                            value: key,
                            checked: selectedOption === key,
                            onChange: handleOptionChange
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: key,
                            children: `${key}: ${value}`
                        })
                    ]
                }, key)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "Score: ",
                    score
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionProcessor);


/***/ })

};
;