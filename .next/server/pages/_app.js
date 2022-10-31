"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layouts/header.tsx



const Header = ({ title  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        mt: 5,
        minWidth: "max-content",
        justifyContent: "center",
        height: "100%",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
            size: "md",
            children: title
        })
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/layouts/layout.tsx





const Layout = ({ children  })=>{
    const { query  } = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Grid, {
        templateAreas: `"header header" "main main"`,
        gridTemplateRows: "64px 1fr 56px",
        gridTemplateColumns: "260px 1fr",
        h: "100vh",
        gap: "1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                px: "2",
                area: "header",
                children: /*#__PURE__*/ jsx_runtime_.jsx(header, {
                    title: query.id ? "User Detail" : "User List"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                px: "5",
                area: "main",
                children: children
            })
        ]
    });
};

// EXTERNAL MODULE: external "@tanstack/react-query"
var react_query_ = __webpack_require__(8910);
;// CONCATENATED MODULE: ./src/themes/commons/fontSizes.ts
const fontSizes = {
    large: "27px",
    medium: "24px",
    small: "12px",
    tiny: "10px",
    xSmall: "8px",
    default: "14px",
    extraSmall: "6px"
};

;// CONCATENATED MODULE: ./src/themes/commons/colors.ts
const colors = {
    default: {
        light: "#fff",
        dark: "#000",
        gray: "#232323",
        yellow: "#e7b51d",
        red: "#a74545",
        placeholder: "rgba(255, 255, 255, 0.25)",
        inputLabel: "rgba(255, 255, 255, 0.5)",
        grey: {
            100: "rgb(255, 255, 255, 0.05)",
            200: "#141414",
            300: "#171717",
            400: "rgb(255, 255, 255, 0.8)"
        }
    },
    primary: {
        100: "#2ae56f",
        200: "#e5e5e5",
        300: "#828282",
        400: "#c4c4c4",
        500: "#8c73f6",
        600: "#fbfbfb",
        700: "#828282",
        800: "#959595",
        900: "#f7f7f7"
    },
    error: {
        100: "#e53e3e"
    },
    divider: {
        100: "#e0e0e0",
        200: "#141414"
    }
};

;// CONCATENATED MODULE: ./src/themes/commons/lineHeights.ts
const lineHeights = {
    large: "27px",
    medium: "24px",
    small: "12px",
    tiny: "10px",
    xxSmall: "8px",
    default: "14px",
    extraSmall: "6px"
};

;// CONCATENATED MODULE: ./src/themes/components/text.ts
const Text = {
    sizes: {
        large: {
            fontSize: "large",
            lineHeight: "large"
        },
        medium: {
            fontSize: "medium",
            lineHeight: "medium"
        },
        small: {
            fontSize: "small",
            lineHeight: "small"
        },
        extraSmall: {
            fontSize: "small",
            lineHeight: "extraSmall"
        },
        xxSmall: {
            fontSize: "xSmall",
            lineHeight: "xxSmall"
        }
    },
    baseStyle: {
        fontSize: "default",
        lineHeight: "default",
        color: "default.light",
        fontWeight: "400"
    },
    variants: {
        primary: {
            color: "default.light",
            fontWeight: "500",
            textTransform: "uppercase"
        },
        secondary: {
            color: "default.light",
            fontWeight: "700"
        },
        thirdly: {
            color: "default.light",
            fontWeight: "600"
        },
        normal: {
            color: "default.dark",
            fontWeight: "600"
        },
        danger: {
            color: "error.100"
        },
        label: {
            color: "default.inputLabel"
        }
    }
};

;// CONCATENATED MODULE: ./src/themes/chakra.ts

//Common



//cComponents

const overrides = {
    components: {
        Text: Text
    },
    fontSizes: fontSizes,
    colors: colors,
    lineHeights: lineHeights
};
const CHAKRA_THEME = (0,react_.extendTheme)(overrides);

;// CONCATENATED MODULE: ./src/pages/_app.tsx





const App = ({ Component , pageProps  })=>{
    const clientQuery = new react_query_.QueryClient();
    return /*#__PURE__*/ jsx_runtime_.jsx(react_query_.QueryClientProvider, {
        client: clientQuery,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_query_.Hydrate, {
            state: pageProps.dehydratedState,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                theme: CHAKRA_THEME,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        })
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 8910:
/***/ ((module) => {

module.exports = require("@tanstack/react-query");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(235));
module.exports = __webpack_exports__;

})();