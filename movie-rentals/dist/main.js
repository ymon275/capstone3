(self["webpackChunkmovie_rentals"] = self["webpackChunkmovie_rentals"] || []).push([[179],{

/***/ 2131:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./src/style.scss
var style = __webpack_require__(4404);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(7757);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Card.js + 3 modules
var Card = __webpack_require__(5692);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Alert.js + 6 modules
var Alert = __webpack_require__(2121);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Form.js + 15 modules
var Form = __webpack_require__(7648);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Button.js
var Button = __webpack_require__(5005);
// EXTERNAL MODULE: ./node_modules/firebase/compat/app/dist/index.esm.js
var index_esm = __webpack_require__(1902);
// EXTERNAL MODULE: ./node_modules/firebase/compat/auth/dist/index.esm.js + 3 modules
var dist_index_esm = __webpack_require__(5986);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/index.esm.js + 2 modules
var firestore_dist_index_esm = __webpack_require__(1591);
;// CONCATENATED MODULE: ./src/firebase.js
// Import the functions you need from the SDKs you need


 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyC27OWGcUbY1Al40FqE-s-061hqPEoln8g",
  authDomain: "movie-rentals-d6bf0.firebaseapp.com",
  projectId: "movie-rentals-d6bf0",
  storageBucket: "movie-rentals-d6bf0.appspot.com",
  messagingSenderId: "670663763627",
  appId: "1:670663763627:web:70a2c67f0071598b4d39ee"
}; // Initialize Firebase

var app = index_esm/* default.initializeApp */.Z.initializeApp(firebaseConfig);
var db = (0,firestore_dist_index_esm/* getFirestore */.ad)(app);
var auth = app.auth();
/* harmony default export */ var firebase = ((/* unused pure expression or super */ null && (app)));
;// CONCATENATED MODULE: ./src/contexts/AuthContext.js



var AuthContext = /*#__PURE__*/react.createContext();
function useAuth() {
  return (0,react.useContext)(AuthContext);
}
function AuthProvider(_ref) {
  var children = _ref.children;

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var _useState3 = (0,react.useState)(true),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    currentUser.updatePassword(password);
  }

  (0,react.useEffect)(function () {
    var unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  var value = {
    currentUser: currentUser,
    login: login,
    signup: signup,
    logout: logout,
    resetPassword: resetPassword,
    updateEmail: updateEmail,
    updatePassword: updatePassword
  };
  return /*#__PURE__*/react.createElement(AuthContext.Provider, {
    value: value
  }, !loading && children);
}
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(6550);
;// CONCATENATED MODULE: ./src/components/SignUp.js







function SignUp() {
  var emailRef = (0,react.useRef)();
  var passwordRef = (0,react.useRef)();
  var passwordConfirmRef = (0,react.useRef)();

  var _useAuth = useAuth(),
      signup = _useAuth.signup;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var history = (0,react_router/* useHistory */.k6)();

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(e) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();

              if (!(passwordRef.current.value !== passwordConfirmRef.current.value)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", setError("Passwords do not match"));

            case 3:
              _context.prev = 3;
              setError('');
              setLoading(true);
              _context.next = 8;
              return signup(emailRef.current.value, passwordRef.current.value);

            case 8:
              history.push("/Login");
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              setError("Failed to create account");

            case 14:
              setLoading(false);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[3, 11]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "container w-25 mt-5"
  }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("h2", {
    className: "text-center mb-4"
  }, "Sign Up"), error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    variant: "danger"
  }, error), /*#__PURE__*/react.createElement(Form/* default */.Z, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "email"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Email"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "email",
    ref: emailRef,
    required: true
  })), /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "password"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Password"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "password",
    ref: passwordRef,
    required: true
  })), /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "password-confirm",
    className: "mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Confirm Password"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "password",
    ref: passwordConfirmRef,
    required: true
  })), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    disabled: loading,
    className: "w-100",
    type: "submit"
  }, "Sign Up")))), /*#__PURE__*/react.createElement("div", {
    className: "w-100 text-center mt-2"
  }, "Already have an account? ", /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/Login"
  }, "Log in")));
}
;// CONCATENATED MODULE: ./src/components/Login.js







function Login() {
  var emailRef = (0,react.useRef)();
  var passwordRef = (0,react.useRef)();

  var _useAuth = useAuth(),
      login = _useAuth.login;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var history = (0,react_router/* useHistory */.k6)();

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(e) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setError('');
              setLoading(true);
              _context.next = 6;
              return login(emailRef.current.value, passwordRef.current.value);

            case 6:
              history.push("/");
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              setError("Failed to log in");

            case 12:
              setLoading(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "container mt-5 w-25"
  }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("h2", {
    className: "text-center mb-4"
  }, "Login"), error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    variant: "danger"
  }, error), /*#__PURE__*/react.createElement(Form/* default */.Z, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "email"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Email"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "email",
    ref: emailRef,
    required: true
  })), /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "password",
    className: "mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Password"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "password",
    ref: passwordRef,
    required: true
  })), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    disabled: loading,
    className: "w-100",
    type: "submit"
  }, "Login")), /*#__PURE__*/react.createElement("div", {
    className: "w-100 text-center mt-3"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/forgot-password"
  }, "Forgot Password?")))), /*#__PURE__*/react.createElement("div", {
    className: "w-100 text-center mt-2"
  }, "Need an account? ", /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/SignUp"
  }, "Sign Up")));
}
;// CONCATENATED MODULE: ./src/components/ForgotPassword.js







function ForgotPassword() {
  var emailRef = (0,react.useRef)();

  var _useAuth = useAuth(),
      resetPassword = _useAuth.resetPassword;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react.useState)(''),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var history = (0,react_router/* useHistory */.k6)();

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(e) {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              setMessage('');
              setError('');
              setLoading(true);
              _context.next = 7;
              return resetPassword(emailRef.current.value);

            case 7:
              setMessage("Check your inbox for futher instructions");
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              setError("Failed to reset password");

            case 13:
              setLoading(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "container mt-5 w-25"
  }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("h2", {
    className: "text-center mb-4"
  }, "Reset Password"), error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    variant: "danger"
  }, error), /*#__PURE__*/react.createElement(Form/* default */.Z, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "email",
    className: "mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Email"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "email",
    ref: emailRef,
    required: true
  })), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    disabled: loading,
    className: "w-100",
    type: "submit"
  }, "Reset Password")), /*#__PURE__*/react.createElement("div", {
    className: "w-100 text-center mt-3"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/Login"
  }, "Login")))), /*#__PURE__*/react.createElement("div", {
    className: "w-100 text-center mt-2"
  }, "Need an account? ", /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/SignUp"
  }, "Sign Up")));
}
;// CONCATENATED MODULE: ./src/images/streamlineLogo.png
/* harmony default export */ var streamlineLogo = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/images/shopping-cart.png
/* harmony default export */ var shopping_cart = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAELCAAAAAAaNacDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJfklEQVR42u2dbbWsOgyGx0Ul1AIO0IAAVCAADyjAAR5wgIO64Awze+/5gjZJE9rmTO6/u86C7mfa5m2ahMv6tfWSegA52BfCeofQWLDVLvWApSD0F7jNqQcsBWE2cAhd6gFLQXAVHEKVesBSENYOsR40bgo3CBNiPYypRywFwVk4hCb1iKUgYNaDUbge7hAmxKag0EneIWDWQ5t6yFIQ1gYOodK3Hn4gjIj1sKQesxSEBeEkh9RjloKAWQ916jGLQRjgEIy69fALAbMeptSDloKw1nAI6pzkHwREUEGdk/yDsMAhqBONjxgjIqjQpx61GIS+eTEfE21O8ina7F7MF2PQ5iQPQ+7emJuyyMrxvYNPQyqLrBxD8GlIq8tJHkPwaUijSzQeQ/BuCrqcpOcu0hd4tKnHfRYEr5NUJRo9EJzvYKkqsuK7mv9vnKQPgu9gqer6wQdh9kBQJRp9ELy3Ec2kw+YAhLW96LfNz3khIKKvxdp2IvZCwERfS7Vth/dnryGuKEs1G4SASWEp1GxoY0RdURZqYQhO/6bQBCFgrmQKtS4MAZPnWab1YQiYvLYybQhDwOTxlGljGAImb6FMg0DQrpxN8AC14pK/S7TbZVoIAib5u0S73aAEK1+UH6dhEJQr51vpQhCC8uM0DIJy5dzAIOhWzh0Mgm7l3MMg6FbOAwyCbuU8AiGoVs4TEIJm5Xy/XQdA0Kyc73l4kIJxxTHne/IVBAKmTKwwq8AQFCtnOATFyvle+g2CoFc5N3AIc/zbMrUODkGvcu7hEPSGlwYEBLXKeURAwNQGFWUTAoLabI0ZA0HppvBTwgOEoDTm/FO3AYSgNFujQkFQqpyREHQq55/aRigEncfpBgdBp3LucBB0xpx7JASVynlEQlAZc56QEFTGnGckBJXKecFCUKicDRqCwpjzb8k3oluvPuVc4SHou4iq8RD0ZWv8tkVBQNCnnBs8BH3KuSNAUKecewIEdcp5IEBQp5wnAgR1ynmmQNCmnBcKBGXK+a8HBAqC06WcLQmCspgzEYKumPNfM0EcBF3KmQhBl3JuiBBUKeeOCEFVtkZPhKBKOY9ECKqU80SFoMlJzlQILvXIGW2hQsC0d87cHu3j0BD0xJwjIOjZFB7dRdEQ9KRwVXQIepRzHQFBjXJuIyCoiTl3ERDU5Dn3MRC0KOchBoKWmPMUA0FLzHmOgaBFOS9REBQoZ2Prp08CUyCUrZxN1Q7T6/daKBBKjTlf//x+2vtcDekz68UpZ1M1/Tgfdl4nQShIORvbdMPs/J3nSRCKUM7XvW9b/JDG+yQImcectz+/n2b4dwdIELJVzua6+LtxBv380RAyVM6b5wfOfiYIWSlnxOJnhZBLtsbm+qL+/BgI6bM1rq7P5/lPgZBQOd8WP9efHwUhiXKOX/zMEM7dFO6eX+DPj4HgTjtNG3uX/aJfXCJBWE4RS6baFr/Yzx8JYZZeC2KLnw/CInhyMLczP+/eLwFBak/cDr1snl8agkBEhd/zC0Ng9QsCwucMCFxt2IwR9fyiEDg2hG3vk/b8ohDiootbyOMczy8JYaEeGc72/JIQCEoRHfDLHQIuoGQC0f58DAUBHEq5u74F8+xSIEAi7ddT38dVX/aGgRCOMddTAZM/DkJAI5iusAlAgRAIqdkJ/qjMDAHBfwNpymWAgeBXiz38QdkZAoJXKdVF7ohoCF4HaUrdE7EQfFtCA35MjgaH4N0XR/BjcjQ4BG+HoRn8mByNp/da2VsCAkL/heCPsP43ELzn6C+Ey3PafInGBKFk0YyB4D06FK2a2dqTFr0emBTjU31dgcbVo7VoJ4k4QPkDSyVPBbZGtWaAPyk3Q0AIJCYUHF9DQAhdvdihVD/J2q23GsvEgAm5A3ITqrpu27Z5+2//f7WdgPUD1EYSBA31kE/26CaCgqCrezURQualT+dAKKkUUA4COVsnR6NCULU1kiEUURUqDaG8KmkJCIqmAh2CIgcRAUHPl19iIGRVHJsKQo510udD0LItxEFYBxUrIhJC+krpHCCso4JDRDSEdSlfOsZDWF1f+sbAAGGrky0bAwuEdZ2KVo9MEMrGwAbhuij6plBPwQjham4ZutoWt0HwQvghMSNsysEeg+eCULR9IaxfCDcThuBcusJwt0DfLQTh6jGazay11VYmfCYJ5+Z2e3dlru9uujGcTSUCwfXv2sH2Z2Fww7uct12oEEEAwtLtaYZzqiY/8d/e3fhTidghLM2RbDKtNAbXHarXylebwwzBf8IWznCbvAK+Of4JeCGE2lCZRq5OyHUB5W4PJwMrBECgxUqVjM3hDBLTHezOnBBAwSYjUxUwgc6y9f6S4IMA7szXxb+LyOC6P+5SYIPg4P1W+OfCCD7IV2y93PcMcRfBngCMSavbS0TnggCdjzezvPLRoeL/O26aCQKuPaHh3RZwmVQ7C4IJArIBE+uCwGbPtB/zkAcCOounYlwQ2MuwT93KAwHdiYtxQeCTjT8WBAuEGR91N2z6mXD18f4LsECg3M5y1UxREmfeq9Y4IJDSmLjcJKl78tuuwAGBlLNheE5StH7q9etDOCDQKgB4tkZadunbNOS4hqPdwPF4SWLm0Os0ZIBA/MwBj38gXou/TkMGCNSUPo5NgfpZ3+rlKQwQqEUQHAFHagdl+/IUBgjUFv8cYQXqF0ded0YGCNRENg65RM2oZIdATdmp419NnoWvmjEhhCr+1eSZ8OqaCp8JVM+UzUzg6NxHrTswuWyMHLo5G++Q0kVS63DYdQJ1c+IQS1TFyA6BuC5Zzg7UGvZXjcIAgTgleaIqRM3OfopcaXm9PPE1Wk8HE/9daZZfQ1tkiRZjZMrdySXGSJJLXE2OSdHmtz2ZBQJhYfLdOxD8w/t2xHMDhReNfDdQ8NyEX7MiN1D4qcC1I2yGXowfUpXpVho7FThz+bC/QCV0K40N//N2M8X9AjtpAVyZKqj6aeZ8HUD23pPtiDS28h+Ev7bcia2YvXFvEvJlr4EnpUByL3we1qLZa2AKViKPEUqh3pUnjBmtMAoiDKArQjyjFUbBdkLVH5BuBgcMmLPcQ7PSiOV3A7IITXvEn7neYW78w5D8Ikgg17869svclS9uPP5Baul+vp4vn3u76PLXQB0Vv9gzutgelPEHKo8kquHmj4K0i21O6mfsxo8qflP1gVUoVBe5DLW15mZ2+4LkmZ3el7F9vNvWIQJyEDZzy2ZpSmTd78tB//pbK71+IdzsH22o7qHVQKn6AAAARHpUWHRDb21tZW50AAB42nNNySxJTVFIqlQISCzNUQjOSC3KTcxTSMsvUggPcM7JLEgsKtFRCChNyslMVnDJz03MzAMA0cYSC/gtqgsAAAAASUVORK5CYII=");
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Dropdown.js + 7 modules
var Dropdown = __webpack_require__(5391);
;// CONCATENATED MODULE: ./src/components/NavBar.js






function NavBar(_ref) {
  var sendMovies = _ref.sendMovies,
      children = _ref.children;

  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser;

  var _useState = (0,react.useState)(),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      searchRef = _useState2[0],
      setSearch = _useState2[1];

  var GuestPage = /*#__PURE__*/react.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, /*#__PURE__*/react.createElement("img", {
    src: streamlineLogo,
    alt: "streamline logo",
    style: {
      width: "40px",
      height: "40px"
    }
  }), /*#__PURE__*/react.createElement("a", {
    className: "navbar-brand mx-1",
    href: "#"
  }, "Streamline"), /*#__PURE__*/react.createElement("a", {
    className: "nav-link mx-1",
    href: "/"
  }, "Home"), /*#__PURE__*/react.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(Dropdown/* default */.Z, null, /*#__PURE__*/react.createElement(Dropdown/* default.Toggle */.Z.Toggle, {
    id: "dropdown-basic"
  }, /*#__PURE__*/react.createElement("img", {
    src: shopping_cart,
    alt: "shopping cart",
    className: "",
    style: {
      width: "30px",
      height: "30px"
    }
  })), children)))), /*#__PURE__*/react.createElement("a", {
    className: "nav-link",
    href: "/SignUp"
  }, "Sign Up"), /*#__PURE__*/react.createElement("a", {
    className: "nav-link",
    href: "/Login"
  }, "Log In"), /*#__PURE__*/react.createElement("form", {
    className: "d-flex mx-3",
    id: "formSubmit",
    onSubmit: function onSubmit(event) {
      event.preventDefault();

      if (searchRef != "" && searchRef != undefined && searchRef != null) {
        sendMovies(searchRef);
      }
    }
  }, /*#__PURE__*/react.createElement("input", {
    className: "form-control me-2",
    type: "search",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Search",
    "aria-label": "Search"
  }), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline-success",
    type: "submit"
  }, "Search")));
  var LoggedInPage = /*#__PURE__*/react.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, /*#__PURE__*/react.createElement("img", {
    src: streamlineLogo,
    alt: "streamline logo",
    style: {
      width: "40px",
      height: "40px"
    }
  }), /*#__PURE__*/react.createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "Streamline"), /*#__PURE__*/react.createElement("a", {
    className: "nav-link mx-1",
    href: "/"
  }, "Home"), /*#__PURE__*/react.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement(Dropdown/* default */.Z, null, /*#__PURE__*/react.createElement(Dropdown/* default.Toggle */.Z.Toggle, {
    id: "dropdown-basic"
  }, /*#__PURE__*/react.createElement("img", {
    src: shopping_cart,
    alt: "shopping cart",
    className: "",
    style: {
      width: "30px",
      height: "30px"
    }
  })), children)))), /*#__PURE__*/react.createElement("div", {
    className: "mr-3 d-flex"
  }, /*#__PURE__*/react.createElement("a", {
    className: "nav-link",
    href: "/profile"
  }, "Profile"), /*#__PURE__*/react.createElement("form", {
    className: "d-flex mx-3",
    id: "formSubmit",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      sendMovies(searchRef);
    }
  }, /*#__PURE__*/react.createElement("input", {
    className: "form-control me-2",
    type: "search",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Search",
    "aria-label": "Search"
  }), /*#__PURE__*/react.createElement("button", {
    className: "btn btn-outline-success",
    type: "submit"
  }, "Search"))));

  if (currentUser !== null) {
    return LoggedInPage;
  } else {
    return GuestPage;
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js + 2 modules
var possibleConstructorReturn = __webpack_require__(4575);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1120);
;// CONCATENATED MODULE: ./src/components/movie.jsx








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }





var Movie = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(Movie, _React$Component);

  var _super = _createSuper(Movie);

  function Movie(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, Movie);

    _this = _super.call(this, props);
    _this.state = {
      cart: {}
    };
    return _this;
  }

  (0,createClass/* default */.Z)(Movie, [{
    key: "addToCart",
    value: function () {
      var _addToCart = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.props.movie.description === undefined)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return (0,firestore_dist_index_esm/* addDoc */.ET)((0,firestore_dist_index_esm/* collection */.hJ)(db, this.props.user.uid), {
                  image: this.props.movie.image,
                  title: this.props.movie.title,
                  id: this.props.movie.id,
                  crew: this.props.movie.crew,
                  year: this.props.movie.year
                });

              case 3:
                this.props.getItems();
                _context.next = 9;
                break;

              case 6:
                _context.next = 8;
                return (0,firestore_dist_index_esm/* addDoc */.ET)((0,firestore_dist_index_esm/* collection */.hJ)(db, this.props.user.uid), {
                  image: this.props.movie.image,
                  title: this.props.movie.title,
                  id: this.props.movie.id,
                  description: this.props.movie.description
                });

              case 8:
                this.props.getItems();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addToCart() {
        return _addToCart.apply(this, arguments);
      }

      return addToCart;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var movie = this.props.movie;
      return /*#__PURE__*/react.createElement("div", {
        className: "card"
      }, /*#__PURE__*/react.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/react.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react.createElement("div", {
        className: "col-2 mx-2"
      }, /*#__PURE__*/react.createElement("h1", null, movie.rank), /*#__PURE__*/react.createElement("img", {
        style: {
          height: "297px",
          width: "200px"
        },
        src: movie.image
      })), /*#__PURE__*/react.createElement("div", {
        className: "col align-items-center mx-4"
      }, /*#__PURE__*/react.createElement("h2", {
        className: "card-text rating"
      }, movie.imDbRating), /*#__PURE__*/react.createElement("h5", {
        className: "card-title"
      }, movie.title), /*#__PURE__*/react.createElement("p", {
        className: "card-text"
      }, movie.description), /*#__PURE__*/react.createElement("p", {
        className: "card-text"
      }, movie.crew))), /*#__PURE__*/react.createElement("button", {
        href: "#",
        className: "btn btn-primary my-2",
        onClick: function onClick() {
          _this2.addToCart();
        }
      }, "Add to cart")));
    }
  }]);

  return Movie;
}(react.Component);

/* harmony default export */ var components_movie = (Movie);
;// CONCATENATED MODULE: ./src/components/movies.js



function Movies(_ref) {
  var movies = _ref.movies,
      getItems = _ref.getItems;

  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser;

  if (movies !== undefined && movies !== null && movies.length !== 0) {
    return /*#__PURE__*/react.createElement("div", null, movies.map(function (movie, index) {
      return /*#__PURE__*/react.createElement(components_movie, {
        key: index,
        id: movie.id,
        movie: movie,
        user: currentUser,
        getItems: getItems
      });
    }));
  } else {
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, "No Movies Available"));
  }
}
;// CONCATENATED MODULE: ./src/searchMovies.js


function searchMovies(_x) {
  return _searchMovies.apply(this, arguments);
}

function _searchMovies() {
  _searchMovies = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee(search) {
    var movies;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            movies = [];
            _context.next = 3;
            return fetch("https://imdb-api.com/en/API/SearchMovie/k_xa1iox8h/".concat(search), {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (response) {
              return response.json();
            }).then(function (result) {
              movies = result;
              return movies;
            }).catch(function (err) {
              return console.log(err);
            });

          case 3:
            movies = _context.sent;
            return _context.abrupt("return", movies);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _searchMovies.apply(this, arguments);
}

;
;// CONCATENATED MODULE: ./src/getMovies.js


function getMovies() {
  return _getMovies.apply(this, arguments);
}

function _getMovies() {
  _getMovies = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
    var movies;
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            movies = [];
            _context.next = 3;
            return fetch('https://imdb-api.com/en/API/MostPopularMovies/k_xa1iox8h', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (response) {
              return response.json();
            }).then(function (result) {
              movies = result; // console.log('movies', movies);

              // console.log('movies', movies);
              return movies;
            }).catch(function (err) {
              return console.log(err);
            });

          case 3:
            movies = _context.sent;
            return _context.abrupt("return", movies);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getMovies.apply(this, arguments);
}

;
;// CONCATENATED MODULE: ./src/components/cartItem.jsx








function cartItem_createSuper(Derived) { var hasNativeReflectConstruct = cartItem_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,getPrototypeOf/* default */.Z)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,getPrototypeOf/* default */.Z)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,possibleConstructorReturn/* default */.Z)(this, result); }; }

function cartItem_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }






var cartItem = /*#__PURE__*/function (_React$Component) {
  (0,inherits/* default */.Z)(cartItem, _React$Component);

  var _super = cartItem_createSuper(cartItem);

  function cartItem(props) {
    var _this;

    (0,classCallCheck/* default */.Z)(this, cartItem);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  (0,createClass/* default */.Z)(cartItem, [{
    key: "deleteItem",
    value: function () {
      var _deleteItem = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,firestore_dist_index_esm/* deleteDoc */.oe)((0,firestore_dist_index_esm/* doc */.JU)(db, this.props.user.uid, this.props.docId));

              case 2:
                this.props.getItems();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function deleteItem() {
        return _deleteItem.apply(this, arguments);
      }

      return deleteItem;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react.createElement(Dropdown/* default.Item */.Z.Item, {
        id: "dropdown-item",
        href: "javascript:void(0)"
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
        src: this.props.item.image,
        style: {
          width: "20px",
          height: "30px"
        }
      }), this.props.item.title, console.log(this.props), /*#__PURE__*/react.createElement("button", {
        className: "btn btn-danger mx-2",
        onClick: function onClick() {
          return _this2.deleteItem();
        }
      }, "x")));
    }
  }]);

  return cartItem;
}(react.Component);

/* harmony default export */ var components_cartItem = (cartItem);
;// CONCATENATED MODULE: ./src/components/CartItems.js






function CartItems(_ref) {
  var isLoading = _ref.isLoading,
      data = _ref.data,
      itemsRef = _ref.itemsRef,
      docIds = _ref.docIds,
      getItems = _ref.getItems;

  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser;

  if (itemsRef !== undefined && itemsRef !== null && itemsRef.length !== 0 && !isLoading) {
    return /*#__PURE__*/react.createElement(Dropdown/* default.Menu */.Z.Menu, {
      id: "dropdown"
    }, itemsRef.map(function (item, index) {
      var docId = docIds[index]; // console.log('index', index)
      // console.log('docId', docId)

      return /*#__PURE__*/react.createElement(components_cartItem, {
        key: index,
        item: item,
        user: currentUser,
        docId: docId,
        getItems: getItems
      });
    }));
  } else {
    return /*#__PURE__*/react.createElement(Dropdown/* default.Menu */.Z.Menu, {
      id: "dropdown"
    }, /*#__PURE__*/react.createElement(Dropdown/* default.Item */.Z.Item, null, "Loading Cart..."));
  }
}
;// CONCATENATED MODULE: ./src/components/Home.js












function Main() {
  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser;

  var _useState = (0,react.useState)([]),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      moviesRef = _useState2[0],
      setMovies = _useState2[1];

  var _useState3 = (0,react.useState)([]),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      itemsRef = _useState4[0],
      setItemsRef = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      docIds = _useState6[0],
      setDocIds = _useState6[1];

  function fetchMovies() {
    return _fetchMovies.apply(this, arguments);
  }

  function _fetchMovies() {
    _fetchMovies = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      var result;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getMovies();

            case 2:
              result = _context.sent;
              console.log('result', result);
              setMovies(result.items);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _fetchMovies.apply(this, arguments);
  }

  function sendMovies(_x) {
    return _sendMovies.apply(this, arguments);
  }

  function _sendMovies() {
    _sendMovies = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee2(value) {
      var result;
      return regenerator_default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return searchMovies(value);

            case 2:
              result = _context2.sent;
              console.log('result', result);
              setMovies(result.results);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _sendMovies.apply(this, arguments);
  }

  (0,react.useEffect)(function () {
    fetchMovies();
    getItems();
  }, []); // useEffect(() => {
  //     forceUpdate()
  // }, [moviesRef]);

  function getItems() {
    return _getItems.apply(this, arguments);
  }

  function _getItems() {
    _getItems = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee3() {
      var q, querySnapshot, array, docArray;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(currentUser !== null)) {
                _context3.next = 10;
                break;
              }

              q = (0,firestore_dist_index_esm/* query */.IO)((0,firestore_dist_index_esm/* collection */.hJ)(db, currentUser.uid), (0,firestore_dist_index_esm/* orderBy */.Xo)('title')); // console.log('q', q);

              _context3.next = 4;
              return (0,firestore_dist_index_esm/* getDocs */.PL)(q);

            case 4:
              querySnapshot = _context3.sent;
              // console.log("snapshot", querySnapshot);
              array = [];
              docArray = [];
              querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                array.push(doc.data());
                docArray.push(doc.id);
              }); // console.log(array);

              setItemsRef(array);
              setDocIds(docArray); // setItemsRef(itemsRef => [...itemsRef, array]);
              // console.log('items', itemsRef);
              // console.log('docIds', docIds)

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getItems.apply(this, arguments);
  }

  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(NavBar, {
    sendMovies: sendMovies
  }, /*#__PURE__*/react.createElement(CartItems, {
    getItems: getItems,
    itemsRef: itemsRef,
    docIds: docIds
  })), /*#__PURE__*/react.createElement(Movies, {
    getItems: getItems,
    movies: moviesRef
  }));
}
// EXTERNAL MODULE: ./node_modules/react-bootstrap/esm/Container.js
var Container = __webpack_require__(682);
;// CONCATENATED MODULE: ./src/components/Profile.js







function Profile() {
  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser,
      logout = _useAuth.logout;

  var history = (0,react_router/* useHistory */.k6)();

  function handleLogout() {
    return _handleLogout.apply(this, arguments);
  }

  function _handleLogout() {
    _handleLogout = (0,asyncToGenerator/* default */.Z)( /*#__PURE__*/regenerator_default().mark(function _callee() {
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setError('');
              _context.prev = 1;
              _context.next = 4;
              return logout();

            case 4:
              history.push('/');
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](1);
              setError('Falied to log out');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 7]]);
    }));
    return _handleLogout.apply(this, arguments);
  }

  return /*#__PURE__*/react.createElement(Container/* default */.Z, {
    className: "w-50 m-auto mt-5"
  }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("h2", {
    className: "text-center mb-4"
  }, "Profile"), error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    variant: "danger"
  }, error), /*#__PURE__*/react.createElement("strong", null, "Email:"), " ", currentUser.email, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/update-profile",
    className: "btn btn-primary w-100 mt-3"
  }, "Update Profile"))), /*#__PURE__*/react.createElement("div", {
    className: "w-100 text-center mt-2"
  }, /*#__PURE__*/react.createElement(Button/* default */.Z, {
    variant: "link",
    onClick: handleLogout
  }, "Log Out")));
}
;// CONCATENATED MODULE: ./src/components/UpdateProfile.js





function UpdateProfile() {
  var emailRef = (0,react.useRef)();
  var passwordRef = (0,react.useRef)();
  var passwordConfirmRef = (0,react.useRef)();

  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser,
      updatePassword = _useAuth.updatePassword,
      updateEmail = _useAuth.updateEmail;

  var _useState = (0,react.useState)(''),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var history = (0,react_router/* useHistory */.k6)();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    var promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises).then(function () {
      history.push('/');
    }).catch(function () {
      setError('Failed to update account');
    }).finally(function () {
      setLoading(false);
    });

    try {
      setError('');
      setLoading(true); // await signup(emailRef.current.value, passwordRef.current.value)

      history.push("/Login");
    } catch (e) {
      setError("Failed to create account");
    }

    setLoading(false);
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "container w-25 mt-5"
  }, /*#__PURE__*/react.createElement(Card/* default */.Z, null, /*#__PURE__*/react.createElement(Card/* default.Body */.Z.Body, null, /*#__PURE__*/react.createElement("h2", {
    className: "text-center mb-4"
  }, "Update Profile"), error && /*#__PURE__*/react.createElement(Alert/* default */.Z, {
    variant: "danger"
  }, error), /*#__PURE__*/react.createElement(Form/* default */.Z, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "email"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Email"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "email",
    ref: emailRef,
    required: true,
    defaultValue: currentUser.email
  })), /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "password"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Password"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "password",
    ref: passwordRef,
    required: true,
    placeholder: "Leave blank to keep the same"
  })), /*#__PURE__*/react.createElement(Form/* default.Group */.Z.Group, {
    id: "password-confirm",
    className: "mb-3"
  }, /*#__PURE__*/react.createElement(Form/* default.Label */.Z.Label, null, "Confirm Password"), /*#__PURE__*/react.createElement(Form/* default.Control */.Z.Control, {
    type: "password",
    ref: passwordConfirmRef,
    required: true,
    placeholder: "Leave blank to keep the same"
  })), /*#__PURE__*/react.createElement(Button/* default */.Z, {
    disabled: loading,
    className: "w-100",
    type: "submit"
  }, "Update")))), /*#__PURE__*/react.createElement("div", {
    className: "w-100 text-center mt-2"
  }, /*#__PURE__*/react.createElement(react_router_dom/* Link */.rU, {
    to: "/"
  }, "Cancel")));
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(5987);
;// CONCATENATED MODULE: ./src/components/PrivateRoute.js


var _excluded = ["component"];



function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

  var _useAuth = useAuth(),
      currentUser = _useAuth.currentUser;

  return /*#__PURE__*/react.createElement(react_router/* Route */.AW, (0,esm_extends/* default */.Z)({}, rest, {
    render: function render(props) {
      return currentUser ? /*#__PURE__*/react.createElement(Component, props) : /*#__PURE__*/react.createElement(react_router/* Redirect */.l_, {
        to: "/Login"
      });
    }
  }));
}
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(4039);
;// CONCATENATED MODULE: ./src/App.js












function App() {
  var app = /*#__PURE__*/react.createElement(react_router_dom/* BrowserRouter */.VK, null, /*#__PURE__*/react.createElement(react_router/* Switch */.rs, null, /*#__PURE__*/react.createElement(PrivateRoute, {
    path: "update-profile",
    component: UpdateProfile
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    exact: true,
    path: "/SignUp",
    component: SignUp
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    exact: true,
    path: "/Login",
    component: Login
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    exact: true,
    path: "/",
    component: Main
  }), /*#__PURE__*/react.createElement(PrivateRoute, {
    exact: true,
    path: "/profile",
    component: Profile
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    exact: true,
    path: "/update-profile",
    component: UpdateProfile
  }), /*#__PURE__*/react.createElement(react_router/* Route */.AW, {
    exact: true,
    path: "/forgot-password",
    component: ForgotPassword
  })));
  return /*#__PURE__*/react.createElement(AuthProvider, null, /*#__PURE__*/react.createElement("div", {
    className: "App"
  }, app));
}

/* harmony default export */ var src_App = (App);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/* import() */ 324).then(__webpack_require__.bind(__webpack_require__, 9262)).then(function (_ref) {
      var getCLS = _ref.getCLS,
          getFID = _ref.getFID,
          getFCP = _ref.getFCP,
          getLCP = _ref.getLCP,
          getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ var src_reportWebVitals = (reportWebVitals);
;// CONCATENATED MODULE: ./src/index.js





react_dom.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(src_App, null)), document.getElementById('root')); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

src_reportWebVitals();

/***/ }),

/***/ 7192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".rating{background:green;border-radius:12px;color:#fff;width:8%;padding:10px}", "",{"version":3,"sources":["webpack://src/style.scss"],"names":[],"mappings":"AA4CA,QAzCI,gBAAA,CACA,kBAAA,CACA,UAAA,CACA,QAAA,CACA,YAAA","sourcesContent":["$rating: 8;\r\n\r\n@mixin highRating() {\r\n    background: green;\r\n    border-radius: 12px;\r\n    color: white;\r\n    width: 8%;\r\n    padding: 10px;\r\n}\r\n\r\n@mixin midRating() {\r\n    background: yellow;\r\n    border-radius: 12px;\r\n    color: white;\r\n    width: 8%;\r\n    padding: 10px;\r\n}\r\n\r\n@mixin lowRating() {\r\n    background: red;\r\n    border-radius: 12px;\r\n    color: white;\r\n    width: 8%;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n@function rating() {\r\n    @if $rating > 6.9 {\r\n        @return \"high\";\r\n    }\r\n    @if $rating < 7 {\r\n        @if $rating > 3.9 {\r\n            @return \"mid\";\r\n        }\r\n    }\r\n    @if $rating < 4 {\r\n        @return \"low\";\r\n    }\r\n    @if $rating == \"\" {\r\n        @return null;\r\n    }\r\n}\r\n\r\n.rating {\r\n    @if(rating() == \"high\") {\r\n        @include highRating();\r\n    }\r\n    @if(rating() == \"mid\") {\r\n        @include midRating();\r\n    }\r\n    @if(rating() == \"low\") {\r\n        @include lowRating();\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4404:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(3379);
            var content = __webpack_require__(7192);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [165,665,672,578,632,71,852,505,905,532,206,616,698,805,576,200,365,902,794], function() { return __webpack_exec__(2131); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map