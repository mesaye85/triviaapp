"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 8492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Registration = ()=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirmPasswordError, setConfirmPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const onButtonClick = ()=>{
        // Set initial error values to empty
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        // Check if the user has entered all fields correctly
        if (email === "") {
            setEmailError("Please enter your email");
            return;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email");
            return;
        }
        if (password === "") {
            setPasswordError("Please enter a password");
            return;
        }
        if (password.length < 8) {
            setPasswordError("The password must be 8 characters or longer");
            return;
        }
        if (confirmPassword === "") {
            setConfirmPasswordError("Please confirm your password");
            return;
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            return;
        }
        // TODO: Implement the registration logic here
        // You can make an API call to register the user or store the registration details as per your backend implementation
        // Display a success message to the user or redirect to another page
        console.log("Registration successful");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "titleContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Registration"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inputContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: email,
                        placeholder: "Enter your email here",
                        onChange: (ev)=>setEmail(ev.target.value),
                        className: "inputBox"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "errorLabel",
                        children: emailError
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inputContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: password,
                        placeholder: "Enter your password here",
                        type: "password",
                        onChange: (ev)=>setPassword(ev.target.value),
                        className: "inputBox"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "errorLabel",
                        children: passwordError
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inputContainer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        value: confirmPassword,
                        placeholder: "Confirm your password",
                        type: "password",
                        onChange: (ev)=>setConfirmPassword(ev.target.value),
                        className: "inputBox"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "errorLabel",
                        children: confirmPasswordError
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "inputContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    className: "inputButton",
                    type: "button",
                    onClick: onButtonClick,
                    value: "Register"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);


/***/ })

};
;