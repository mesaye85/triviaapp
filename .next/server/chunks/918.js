"use strict";
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 8131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Login = ({ setIsLoggingIn })=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isRegistering, setIsRegistering] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [passwordError, setPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [confirmPasswordError, setConfirmPasswordError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleToggleForm = ()=>{
        setIsRegistering(!isRegistering);
        // Reset form fields and errors when toggling the form
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
    };
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        // Validate form fields
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        if (email.trim() === "") {
            setEmailError("Please enter your email");
            return;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email");
            return;
        }
        if (password.trim() === "") {
            setPasswordError("Please enter a password");
            return;
        }
        if (password.length < 8) {
            setPasswordError("The password must be 8 characters or longer");
            return;
        }
        if (isRegistering && confirmPassword.trim() === "") {
            setConfirmPasswordError("Please confirm your password");
            return;
        }
        if (isRegistering && password !== confirmPassword) {
            setConfirmPasswordError("Passwords do not match");
            return;
        }
        // Perform login or registration logic
        if (isRegistering) {
            // Registration logic
            // TODO: Implement the registration logic here
            // You can make an API call to register the user or store the registration details as per your backend implementation
            console.log("Registration successful");
        } else {
            // Login logic
            // TODO: Implement the login logic here
            // You can make an API call to verify the user's credentials or handle authentication as per your backend implementation
            console.log("Login successful");
            setIsLoggingIn(false); // Update isLoggedIn state in App.js
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mainContainer",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "titleContainer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: isRegistering ? "Registration" : "Login"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleFormSubmit,
                children: [
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
                    isRegistering && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inputContainer",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: "inputButton",
                            type: "submit",
                            value: isRegistering ? "Register" : "Log in"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "registerText",
                            children: [
                                isRegistering ? "If you already have an account   " : "If you don't have an account   ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "register-link",
                                    onClick: handleToggleForm,
                                    children: isRegistering ? "Log in" : "Register"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ })

};
;