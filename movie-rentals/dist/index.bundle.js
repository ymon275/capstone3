!function(){var e,t,r,n={5426:function(e,t,r){"use strict";r.r(t);var n=r(8081),a=r.n(n),l=r(3645),c=r.n(l)()(a());c.push([e.id,".lightThemeButton {\r\n  position: fixed;\r\n  bottom: 10px;\r\n  right: 10px;\r\n}\r\n\r\nbody {\r\n  background-color: #212529;\r\n}",""]),t.default=c},472:function(e,t,r){var n=r(5426);"string"==typeof n&&(n=[[e.id,n,""]]);r(6723)(n,{hmr:!0,transform:void 0,insertInto:void 0}),n.locals&&(e.exports=n.locals)},911:function(e,t,r){"use strict";var n=r(7294),a=r(3935),l=r(8152),c=r(5861),o=r(7757),s=r.n(o),i=r(5692),m=r(7953),u=r(7648),d=r(5005),p=r(1902),f=(r(7073),r(1591)),h=p.Z.initializeApp({apiKey:"AIzaSyC27OWGcUbY1Al40FqE-s-061hqPEoln8g",authDomain:"movie-rentals-d6bf0.firebaseapp.com",projectId:"movie-rentals-d6bf0",storageBucket:"movie-rentals-d6bf0.appspot.com",messagingSenderId:"670663763627",appId:"1:670663763627:web:70a2c67f0071598b4d39ee"}),v=(0,f.ad)(h),g=h.auth(),E=n.createContext();function w(){return(0,n.useContext)(E)}function x(e){var t=e.children,r=(0,n.useState)(),a=(0,l.Z)(r,2),c=a[0],o=a[1],s=(0,n.useState)(!0),i=(0,l.Z)(s,2),m=i[0],u=i[1];(0,n.useEffect)((function(){return g.onAuthStateChanged((function(e){o(e),u(!1)}))}),[]);var d={currentUser:c,login:function(e,t){return g.signInWithEmailAndPassword(e,t)},signup:function(e,t){return g.createUserWithEmailAndPassword(e,t)},logout:function(){return g.signOut()},resetPassword:function(e){return g.sendPasswordResetEmail(e)},updateEmail:function(e){c.updateEmail(e)},updatePassword:function(e){c.updatePassword(e)}};return n.createElement(E.Provider,{value:d},!m&&t)}var b=r(3727),Z=r(5977),k=n.createContext("light");function y(){return(0,n.useContext)(k)}var N=k,C=function(){var e=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-brightness-alt-high-fill",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z"})),t=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-brightness-alt-high",viewBox:"0 0 16 16"},n.createElement("path",{d:"M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z"})),r=(0,n.useContext)(N),a=(0,n.useContext)(N),c=a.themeColor,o=a.setThemeColor,s=(0,n.useState)(e),i=(0,l.Z)(s,2),m=i[0],u=i[1];return(0,n.useEffect)((function(){u("dark"===r.themeColor?t:e)}),[r.themeColor]),n.createElement("div",{className:"lightThemeButton"},n.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){o("light"===c?"dark":"light")}},m,"Dark Theme"))};function S(){var e=(0,n.useRef)(),t=(0,n.useRef)(),r=(0,n.useRef)(),a=w().signup,o=(0,n.useState)(""),p=(0,l.Z)(o,2),f=p[0],h=p[1],v=(0,n.useState)(!1),g=(0,l.Z)(v,2),E=g[0],x=g[1],k=(0,Z.k6)(),y=(0,n.useContext)(N);function S(e){return L.apply(this,arguments)}function L(){return(L=(0,c.Z)(s().mark((function n(l){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(l.preventDefault(),t.current.value===r.current.value){n.next=3;break}return n.abrupt("return",h("Passwords do not match"));case 3:return n.prev=3,h(""),x(!0),n.next=8,a(e.current.value,t.current.value);case 8:k.push("/Login"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),h("Failed to create account");case 14:x(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return"light"===y.themeColor?n.createElement("div",{className:"container w-100 mt-5"},n.createElement(i.Z,null,n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Sign Up"),f&&n.createElement(m.Z,{variant:"danger"},f),n.createElement(u.Z,{onSubmit:S},n.createElement(u.Z.Group,{id:"email"},n.createElement(u.Z.Label,null,"Email"),n.createElement(u.Z.Control,{type:"email",ref:e,required:!0})),n.createElement(u.Z.Group,{id:"password"},n.createElement(u.Z.Label,null,"Password"),n.createElement(u.Z.Control,{type:"password",ref:t,required:!0})),n.createElement(u.Z.Group,{id:"password-confirm",className:"mb-3"},n.createElement(u.Z.Label,null,"Confirm Password"),n.createElement(u.Z.Control,{type:"password",ref:r,required:!0})),n.createElement(d.Z,{disabled:E,className:"w-100",type:"submit"},"Sign Up")))),n.createElement("div",{className:"w-100 text-center mt-2 text-light"},"Already have an account? ",n.createElement(b.rU,{to:"/Login"},"Log in")),n.createElement(C,null)):"dark"===y.themeColor?n.createElement("div",{className:"container text-light bg-dark w-100 mt-5"},n.createElement(i.Z,{className:"bg-dark text-light"},n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Sign Up"),f&&n.createElement(m.Z,{variant:"danger"},f),n.createElement(u.Z,{onSubmit:S},n.createElement(u.Z.Group,{id:"email"},n.createElement(u.Z.Label,null,"Email"),n.createElement(u.Z.Control,{type:"email",ref:e,required:!0})),n.createElement(u.Z.Group,{id:"password"},n.createElement(u.Z.Label,null,"Password"),n.createElement(u.Z.Control,{type:"password",ref:t,required:!0})),n.createElement(u.Z.Group,{id:"password-confirm",className:"mb-3"},n.createElement(u.Z.Label,null,"Confirm Password"),n.createElement(u.Z.Control,{type:"password",ref:r,required:!0})),n.createElement(d.Z,{disabled:E,className:"w-100",type:"submit"},"Sign Up")))),n.createElement("div",{className:"w-100 text-center mt-2 text-light"},"Already have an account? ",n.createElement(b.rU,{to:"/Login"},"Log in")),n.createElement(C,null)):void 0}function L(){var e=(0,n.useRef)(),t=(0,n.useRef)(),r=w().login,a=(0,n.useState)(""),o=(0,l.Z)(a,2),p=o[0],f=o[1],h=(0,n.useState)(!1),v=(0,l.Z)(h,2),g=v[0],E=v[1],x=(0,Z.k6)(),k=(0,n.useContext)(N);function y(e){return S.apply(this,arguments)}function S(){return(S=(0,c.Z)(s().mark((function n(a){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,f(""),E(!0),n.next=6,r(e.current.value,t.current.value);case 6:x.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),f("Failed to log in");case 12:E(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return"light"===k.themeColor?n.createElement("div",{className:"container mt-5 w-100"},n.createElement(i.Z,null,n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Login"),p&&n.createElement(m.Z,{variant:"danger"},p),n.createElement(u.Z,{onSubmit:y},n.createElement(u.Z.Group,{id:"email"},n.createElement(u.Z.Label,null,"Email"),n.createElement(u.Z.Control,{type:"email",ref:e,required:!0})),n.createElement(u.Z.Group,{id:"password",className:"mb-3"},n.createElement(u.Z.Label,null,"Password"),n.createElement(u.Z.Control,{type:"password",ref:t,required:!0})),n.createElement(d.Z,{disabled:g,className:"w-100",type:"submit"},"Login")),n.createElement("div",{className:"w-100 text-center mt-3"},n.createElement(b.rU,{to:"/forgot-password"},"Forgot Password?")))),n.createElement("div",{className:"w-100 text-center text-light mt-2"},"Need an account? ",n.createElement(b.rU,{to:"/SignUp"},"Sign Up")),n.createElement(C,null)):"dark"===k.themeColor?n.createElement("div",{className:"container bg-dark text-light mt-5 w-100"},n.createElement(i.Z,{className:"bg-dark text-light"},n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Login"),p&&n.createElement(m.Z,{variant:"danger"},p),n.createElement(u.Z,{onSubmit:y},n.createElement(u.Z.Group,{id:"email"},n.createElement(u.Z.Label,null,"Email"),n.createElement(u.Z.Control,{type:"email",ref:e,required:!0})),n.createElement(u.Z.Group,{id:"password",className:"mb-3"},n.createElement(u.Z.Label,null,"Password"),n.createElement(u.Z.Control,{type:"password",ref:t,required:!0})),n.createElement(d.Z,{disabled:g,className:"w-100",type:"submit"},"Login")),n.createElement("div",{className:"w-100 text-center mt-3"},n.createElement(b.rU,{to:"/forgot-password"},"Forgot Password?")))),n.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",n.createElement(b.rU,{to:"/SignUp"},"Sign Up")),n.createElement(C,null)):void 0}function P(){var e="bg-light text-dark",t=(0,n.useRef)(),r=w().resetPassword,a=(0,n.useState)(""),o=(0,l.Z)(a,2),p=o[0],f=o[1],h=(0,n.useState)(""),v=(0,l.Z)(h,2),g=(v[0],v[1]),E=(0,n.useState)(!1),x=(0,l.Z)(E,2),k=x[0],y=x[1],S=(0,n.useState)(e),L=(0,l.Z)(S,2),P=L[0],U=L[1],M=(0,n.useContext)(N);function B(){return(B=(0,c.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,g(""),f(""),y(!0),e.next=7,r(t.current.value);case 7:g("Check your inbox for futher instructions"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),f("Failed to reset password");case 13:y(!1);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return(0,Z.k6)(),(0,n.useEffect)((function(){U("dark"===M.themeColor?"text-light bg-dark":e)}),[M.themeColor]),n.createElement(n.Fragment,null,n.createElement("div",{className:"container mt-5 w-100"},n.createElement(i.Z,{className:P},n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Reset Password"),p&&n.createElement(m.Z,{variant:"danger"},p),n.createElement(u.Z,{onSubmit:function(e){return B.apply(this,arguments)}},n.createElement(u.Z.Group,{id:"email",className:"mb-3"},n.createElement(u.Z.Label,null,"Email"),n.createElement(u.Z.Control,{type:"email",ref:t,required:!0})),n.createElement(d.Z,{disabled:k,className:"w-100",type:"submit"},"Reset Password")),n.createElement("div",{className:"w-100 text-center mt-3"},n.createElement(b.rU,{to:"/Login"},"Login")))),n.createElement("div",{className:"w-100 text-center text-light mt-2"},"Need an account? ",n.createElement(b.rU,{to:"/SignUp"},"Sign Up"))),n.createElement(C,null))}var U=r(3270),M=r(8087);function B(e){var t=e.sendMovies,r=e.children,a=w().currentUser,c="navbar-light bg-light",o="btn btn-outline-success",s=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cart",viewBox:"0 0 16 16"},n.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})),i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-cart-fill",viewBox:"0 0 16 16"},n.createElement("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})),m=(0,n.useState)(c),u=(0,l.Z)(m,2),d=u[0],p=u[1],f=(0,n.useState)(s),h=(0,l.Z)(f,2),v=h[0],g=h[1],E=(0,n.useState)(o),x=(0,l.Z)(E,2),b=x[0],Z=x[1],k=(0,n.useState)(),y=(0,l.Z)(k,2),C=y[0],S=y[1],L=(0,n.useContext)(N);(0,n.useEffect)((function(){p("dark"===L.themeColor?"navbar-dark bg-dark":c),g("dark"===L.themeColor?i:s),Z("dark"===L.themeColor?"btn btn-success":o)}),[L.themeColor]);var P=n.createElement("nav",{className:"navbar navbar-expand-lg ".concat(d)},n.createElement("img",{src:U,alt:"streamline logo",style:{width:"60px",height:"40px"}}),n.createElement("a",{className:"navbar-brand mx-1",href:"#"},"Streamline"),n.createElement("a",{className:"nav-link mx-1",href:"/"},"Home"),n.createElement("div",{className:"navbar-collapse",id:"navbarSupportedContent"},n.createElement("ul",{className:"navbar-nav mr-auto"},n.createElement("li",null,n.createElement(M.Z,{"data-toggle":"tooltip","data-placement":"right",title:"Cart"},n.createElement(M.Z.Toggle,{id:"dropdown-basic"},v),r)))),n.createElement("a",{className:"nav-link",href:"/SignUp"},"Sign Up"),n.createElement("a",{className:"nav-link",href:"/Login"},"Log In"),n.createElement("form",{className:"d-flex mx-3",id:"formSubmit",onSubmit:function(e){e.preventDefault(),""!=C&&null!=C&&null!=C&&t(C)}},n.createElement("input",{className:"form-control me-2",type:"search",onChange:function(e){return S(e.target.value)},placeholder:"Search","aria-label":"Search"}),n.createElement("button",{className:b,type:"submit"},"Search"))),B=n.createElement("nav",{className:"navbar navbar-expand-lg ".concat(d)},n.createElement("img",{src:U,alt:"streamline logo",style:{width:"40px",height:"40px"}}),n.createElement("a",{className:"navbar-brand",href:"#"},"Streamline"),n.createElement("a",{className:"nav-link mx-1",href:"/"},"Home"),n.createElement("div",{className:"navbar-collapse",id:"navbarSupportedContent"},n.createElement("ul",{className:"navbar-nav mr-auto"},n.createElement("li",null,n.createElement(M.Z,{"data-toggle":"tooltip","data-placement":"right",title:"Cart"},n.createElement(M.Z.Toggle,{id:"dropdown-basic"},v),r)))),n.createElement("div",{className:"mr-3 d-flex"},n.createElement("a",{className:"nav-link",href:"/profile"},"Profile"),n.createElement("form",{className:"d-flex mx-3",id:"formSubmit",onSubmit:function(e){e.preventDefault(),t(C)}},n.createElement("input",{className:"form-control me-2",type:"search",onChange:function(e){return S(e.target.value)},placeholder:"Search","aria-label":"Search"}),n.createElement("button",{className:b,type:"submit"},"Search"))));return null!==a?B:P}function z(e,t){return A.apply(this,arguments)}function A(){return A=(0,c.Z)(s().mark((function e(t,r){var n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.length>2&&void 0!==a[2]?a[2]:function(){return"no items"},void 0!==t.description){e.next=7;break}return e.next=4,(0,f.ET)((0,f.hJ)(v,r.uid),{image:t.image,title:t.title,id:t.id,crew:t.crew,year:t.year});case 4:n(),e.next=11;break;case 7:if(void 0===t){e.next=11;break}return e.next=10,(0,f.ET)((0,f.hJ)(v,r.uid),{image:t.image,title:t.title,id:t.id,description:t.description});case 10:n();case 11:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function I(e){var t=e.movie,r=e.getItems,a=e.user,l=y();return"light"===l.themeColor?n.createElement("div",{className:"card"},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-4 mx-1"},n.createElement("h1",null,t.rank),n.createElement("img",{className:"w-100 h-75",src:t.image,alt:t.title})),n.createElement("div",{className:"col align-items-center"},n.createElement("h2",{className:"card-text rating"},t.imDbRating),n.createElement("h5",{className:"card-title"},t.title),n.createElement("p",{className:"card-text"},t.description),n.createElement("p",{className:"card-text"},t.crew))),n.createElement("button",{href:"#",className:"btn btn-outline-primary my-2",onClick:function(){z(t,a,r)}},"Add to cart"))):"dark"===l.themeColor?n.createElement("div",{className:"card bg-dark"},n.createElement("div",{className:"card-body"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-4 mx-1"},n.createElement("h1",{className:"text-light"},t.rank),n.createElement("img",{className:"w-100 h-75",src:t.image,alt:t.title})),n.createElement("div",{className:"col align-items-center"},n.createElement("h2",{className:"card-text text-light rating"},t.imDbRating),n.createElement("h5",{className:"card-title text-light"},t.title),n.createElement("p",{className:"card-text text-light"},t.description),n.createElement("p",{className:"card-text text-light"},t.crew))),n.createElement("button",{href:"#",className:"btn btn-primary my-2",onClick:function(){z(t,a,r)}},"Add to cart"))):n.createElement("div",null,n.createElement("h1",null,"Movie Unavailable"))}function R(e){var t=e.movies,r=e.getItems,a=w().currentUser;return null!=t&&0!==t.length?n.createElement("div",null,t.map((function(e,t){return n.createElement(I,{key:t,id:e.id,movie:e,user:a,getItems:r})}))):n.createElement("div",null,n.createElement("h1",null,"No Movies Available"))}var T=r(3300);function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:T;if(e)return t("https://imdb-api.com/en/API/SearchMovie/k_xa1iox8h/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}var O=r(3377),q=r.n(O),G=r(5671),F=r(3144),H=r(136),D=r(4575),W=r(1120);function _(){return _=(0,c.Z)(s().mark((function e(t,r){var n,a=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:function(){return"no items"},e.next=3,(0,f.oe)((0,f.JU)(v,t.uid,r));case 3:n();case 4:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}var J=function(e){(0,H.Z)(l,e);var t,r,a=(t=l,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,W.Z)(t);if(r){var a=(0,W.Z)(this).constructor;e=Reflect.construct(n,arguments,a)}else e=n.apply(this,arguments);return(0,D.Z)(this,e)});function l(e){var t;return(0,G.Z)(this,l),(t=a.call(this,e)).state={},t}return(0,F.Z)(l,[{key:"render",value:function(){var e=this;return n.createElement(M.Z.Item,{id:"dropdown-item",href:"javascript:void(0)"},n.createElement("div",null,n.createElement("img",{src:this.props.item.image,style:{width:"20px",height:"30px"},alt:this.props.item.title}),this.props.item.title,n.createElement("button",{className:"btn btn-danger mx-2",onClick:function(){return function(e,t){return _.apply(this,arguments)}(e.props.user,e.props.docId,e.props.getItems)}},"x")))}}]),l}(n.Component),K=J,V=r(6486),X=r.n(V);function Y(e){var t=e.isLoading,r=(e.data,e.itemsRef),a=e.docIds,l=e.getItems,c=w().currentUser;return null==r||0===r.length||t?n.createElement(M.Z.Menu,{id:"dropdown"},n.createElement(M.Z.Item,null,"Loading Cart...")):n.createElement(M.Z.Menu,{id:"dropdown"},X().map(r,(function(e,t){var r=a[t];return n.createElement(K,{key:t,item:e,user:c,docId:r,getItems:l})})))}var Q=r(2874);function $(e){var t=e.movies,r=y(),a=(0,n.useState)("bg-light"),c=(0,l.Z)(a,2),o=c[0],s=c[1];return(0,n.useEffect)((function(){s("dark"===r.themeColor?"bg-dark":"bg-light")}),[r.themeColor]),null!=t&&0!==t.length?n.createElement(Q.Z,{className:o,style:{height:"500px",width:"337px",margin:"20px auto"}},X().map(X().take(t,5),(function(e,t){return n.createElement(Q.Z.Item,null,n.createElement("img",{className:"d-block w-100",src:e.image,alt:"slide ".concat(t+1)}))}))):n.createElement("div",null,n.createElement("h1",null,"Loading..."))}function ee(e,t){return te.apply(this,arguments)}function te(){return(te=(0,c.Z)(s().mark((function e(t,r){var n,a,l,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=[],a=[],!r){e.next=5;break}return X().forEach(r,(function(e){n.push(e.data()),a.push(e.id)})),e.abrupt("return",{data:n,ids:a});case 5:if(null==t){e.next=12;break}return l=(0,f.IO)((0,f.hJ)(v,t.uid),(0,f.Xo)("title")),e.next=9,(0,f.PL)(l);case 9:return c=e.sent,X().forEach(c.docs,(function(e){n.push(e.data()),a.push(e.id)})),e.abrupt("return",{data:n,ids:a});case 12:return e.abrupt("return",{data:[],ids:[]});case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(){var e=w().currentUser,t=(0,n.useState)([]),r=(0,l.Z)(t,2),a=r[0],o=r[1],i=(0,n.useState)([]),m=(0,l.Z)(i,2),u=m[0],d=m[1],p=(0,n.useState)([]),f=(0,l.Z)(p,2),h=f[0],v=f[1];function g(){return(g=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q()();case 2:t=e.sent,o(t.items);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=(0,c.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:r=e.sent,console.log("result",r),o(r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return b.apply(this,arguments)}function b(){return(b=(0,c.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee(e);case 2:r=t.sent,console.log(r),d(r.data),v(r.ids);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,n.useEffect)((function(){!function(){g.apply(this,arguments)}(),x()}),[]),n.createElement("div",null,n.createElement(B,{sendMovies:function(e){return E.apply(this,arguments)}},n.createElement(Y,{getItems:x,itemsRef:u,docIds:h})),n.createElement($,{movies:a}),n.createElement(R,{getItems:x,movies:a}),n.createElement(C,null))}var ne=r(682);function ae(){var e=(0,n.useState)(""),t=(0,l.Z)(e,2),r=t[0],a=t[1],o=w(),u=o.currentUser,p=o.logout,f=(0,Z.k6)();function h(){return v.apply(this,arguments)}function v(){return(v=(0,c.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(""),e.prev=1,e.next=4,p();case 4:f.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),a("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return"light"===(0,n.useContext)(N).themeColor?n.createElement(ne.Z,{className:"w-100 m-auto mt-5 bg-dark"},n.createElement(i.Z,null,n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Profile"),r&&n.createElement(m.Z,{variant:"danger"},r),n.createElement("strong",null,"Email:")," ",u.email,n.createElement(b.rU,{to:"/update-profile",className:"btn btn-primary w-100 mt-3"},"Update Profile"))),n.createElement("div",{className:"w-100 text-center mt-2"},n.createElement(d.Z,{variant:"link",onClick:h},"Log Out")),n.createElement(C,null)):n.createElement(ne.Z,{className:"w-100 m-auto mt-5 bg-dark"},n.createElement(i.Z,{className:"bg-dark text-light"},n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Profile"),r&&n.createElement(m.Z,{variant:"danger"},r),n.createElement("strong",null,"Email:")," ",u.email,n.createElement(b.rU,{to:"/update-profile",className:"btn btn-primary w-100 mt-3"},"Update Profile"))),n.createElement("div",{className:"w-100 text-center mt-2"},n.createElement(d.Z,{variant:"link",onClick:h},"Log Out")),n.createElement(C,null))}function le(){var e="bg-light text-dark",t=(0,n.useRef)(),r=(0,n.useRef)(),a=(0,n.useRef)(),c=w(),o=c.currentUser,s=c.updatePassword,p=c.updateEmail,f=(0,n.useState)(""),h=(0,l.Z)(f,2),v=h[0],g=h[1],E=(0,n.useState)(!1),x=(0,l.Z)(E,2),k=x[0],y=x[1],S=(0,n.useState)(e),L=(0,l.Z)(S,2),P=L[0],U=L[1],M=(0,Z.k6)(),B=(0,n.useContext)(N);return(0,n.useEffect)((function(){U("dark"===B.themeColor?"bg-dark text-light":e)}),[B.themeColor]),n.createElement(n.Fragment,null,n.createElement("div",{className:"container w-100 mt-5"},n.createElement(i.Z,{className:P},n.createElement(i.Z.Body,null,n.createElement("h2",{className:"text-center mb-4"},"Update Profile"),v&&n.createElement(m.Z,{variant:"danger"},v),n.createElement(u.Z,{onSubmit:function(e){if(e.preventDefault(),r.current.value!==a.current.value)return g("Passwords do not match");var n=[];y(!0),g(""),t.current.value!==o.email&&n.push(p(t.current.value)),r.current.value&&n.push(s(r.current.value)),Promise.all(n).then((function(){M.push("/")})).catch((function(){g("Failed to update account")})).finally((function(){y(!1)}));try{g(""),y(!0),M.push("/Login")}catch(e){g("Failed to create account")}y(!1)}},n.createElement(u.Z.Group,{id:"email"},n.createElement(u.Z.Label,null,"Email"),n.createElement(u.Z.Control,{type:"email",ref:t,required:!0,defaultValue:o.email})),n.createElement(u.Z.Group,{id:"password"},n.createElement(u.Z.Label,null,"Password"),n.createElement(u.Z.Control,{type:"password",ref:r,required:!0,placeholder:"Leave blank to keep the same"})),n.createElement(u.Z.Group,{id:"password-confirm",className:"mb-3"},n.createElement(u.Z.Label,null,"Confirm Password"),n.createElement(u.Z.Control,{type:"password",ref:a,required:!0,placeholder:"Leave blank to keep the same"})),n.createElement(d.Z,{disabled:k,className:"w-100",type:"submit"},"Update")))),n.createElement("div",{className:"w-100 text-center mt-2"},n.createElement(b.rU,{to:"/"},"Cancel"))),n.createElement(C,null))}var ce=r(7462),oe=r(5987),se=["component"];function ie(e){var t=e.component,r=(0,oe.Z)(e,se),a=w().currentUser;return n.createElement(Z.AW,(0,ce.Z)({},r,{render:function(e){return a?n.createElement(t,e):n.createElement(Z.l_,{to:"/Login"})}}))}r(7214);var me,ue=function(){var e=(0,n.useState)("light"),t=(0,l.Z)(e,2),r=t[0],a=t[1],c=(y(),(0,n.useMemo)((function(){return{themeColor:r,setThemeColor:a}}),[r])),o=n.createElement(b.VK,null,n.createElement(Z.rs,null,n.createElement(ie,{path:"update-profile",component:le}),n.createElement(Z.AW,{exact:!0,path:"/SignUp",component:S}),n.createElement(Z.AW,{exact:!0,path:"/Login",component:L}),n.createElement(Z.AW,{exact:!0,path:"/",component:re}),n.createElement(ie,{exact:!0,path:"/profile",component:ae}),n.createElement(Z.AW,{exact:!0,path:"/update-profile",component:le}),n.createElement(Z.AW,{exact:!0,path:"/forgot-password",component:P})));return"light"===c?n.createElement(N.Provider,{value:c},n.createElement(x,null,n.createElement("div",{className:"App bg-light"},o))):"dark"===c?n.createElement(N.Provider,{value:c},n.createElement(x,null,n.createElement("div",{className:"App bg-dark"},o))):n.createElement(N.Provider,{value:c},n.createElement(x,null,n.createElement("div",{className:"App"},o)))};r(472),a.render(n.createElement(n.StrictMode,null,n.createElement(ue,null)),document.getElementById("root")),me&&me instanceof Function&&r.e(131).then(r.bind(r,2131)).then((function(e){var t=e.getCLS,r=e.getFID,n=e.getFCP,a=e.getLCP,l=e.getTTFB;t(me),r(me),n(me),a(me),l(me)}))},3377:function(e,t,r){var n=r(3300);e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return e("https://imdb-api.com/en/API/MostPopularMovies/k_xa1iox8h",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},2204:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%272%27 fill=%27%23fff%27/%3e%3c/svg%3e"},9609:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%2386b7fe%27/%3e%3c/svg%3e"},2469:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27%23fff%27/%3e%3c/svg%3e"},7486:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%27-4 -4 8 8%27%3e%3ccircle r=%273%27 fill=%27rgba%280, 0, 0, 0.25%29%27/%3e%3c/svg%3e"},4144:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e"},175:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23000%27%3e%3cpath d=%27M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z%27/%3e%3c/svg%3e"},2740:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%230c63e4%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},3460:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23212529%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},5647:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z%27/%3e%3c/svg%3e"},1692:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath d=%27M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e"},8214:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e"},8931:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10h8%27/%3e%3c/svg%3e"},8349:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 20 20%27%3e%3cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%273%27 d=%27M6 10l3 3l6-6%27/%3e%3c/svg%3e"},1217:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%280, 0, 0, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},2956:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e"},9819:function(e){"use strict";e.exports="data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 8 8%27%3e%3cpath fill=%27%23198754%27 d=%27M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z%27/%3e%3c/svg%3e"},3270:function(e,t,r){"use strict";e.exports=r.p+"e1d9e0d8c9072ed991d2.png"}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,l),r.loaded=!0,r.exports}l.m=n,e=[],l.O=function(t,r,n,a){if(!r){var c=1/0;for(m=0;m<e.length;m++){r=e[m][0],n=e[m][1],a=e[m][2];for(var o=!0,s=0;s<r.length;s++)(!1&a||c>=a)&&Object.keys(l.O).every((function(e){return l.O[e](r[s])}))?r.splice(s--,1):(o=!1,a<c&&(c=a));if(o){e.splice(m--,1);var i=n();void 0!==i&&(t=i)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[r,n,a]},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,{a:t}),t},l.d=function(e,t){for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=function(e){return Promise.all(Object.keys(l.f).reduce((function(t,r){return l.f[r](e,t),t}),[]))},l.u=function(e){return e+".bundle.js"},l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},r="movie-rentals:",l.l=function(e,n,a,c){if(t[e])t[e].push(n);else{var o,s;if(void 0!==a)for(var i=document.getElementsByTagName("script"),m=0;m<i.length;m++){var u=i[m];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){o=u;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",r+a),o.src=e),t[e]=[n];var d=function(r,n){o.onerror=o.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((function(e){return e(n)})),r)return r(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),s&&document.head.appendChild(o)}},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},l.p="",function(){l.b=document.baseURI||self.location.href;var e={826:0};l.f.j=function(t,r){var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise((function(r,a){n=e[t]=[r,a]}));r.push(n[2]=a);var c=l.p+l.u(t),o=new Error;l.l(c,(function(r){if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",o.name="ChunkLoadError",o.type=a,o.request=c,n[1](o)}}),"chunk-"+t,t)}},l.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,c=r[0],o=r[1],s=r[2],i=0;if(c.some((function(t){return 0!==e[t]}))){for(n in o)l.o(o,n)&&(l.m[n]=o[n]);if(s)var m=s(l)}for(t&&t(r);i<c.length;i++)a=c[i],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(m)},r=self.webpackChunkmovie_rentals=self.webpackChunkmovie_rentals||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var c=l.O(void 0,[122],(function(){return l(911)}));c=l.O(c)}();