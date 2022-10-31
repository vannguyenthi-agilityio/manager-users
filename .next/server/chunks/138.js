"use strict";
exports.id = 138;
exports.ids = [138];
exports.modules = {

/***/ 7300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const Text = ({ value ="" , size ="default" , variant , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
        value: value,
        size: size,
        variant: variant,
        ...props,
        children: value
    });


/***/ }),

/***/ 4138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Users),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/.pnpm/next@12.2.4_twoewwu6sg7cdf3ao6njtbftne/node_modules/next/link.js
var next_link = __webpack_require__(3063);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@tanstack/react-query"
var react_query_ = __webpack_require__(8910);
;// CONCATENATED MODULE: ./src/helpers/config.ts
const ConfigHelper = {
    API: "http://localhost:3001/",
    USERS: "users/"
};
/* harmony default export */ const config = (ConfigHelper);

;// CONCATENATED MODULE: ./src/service/user-service.ts

const getUsers = (offset)=>{
    const api = config.API;
    return fetch(api + `${config.USERS}?_page=${offset || 0}`).then((res)=>res.json());
};


// EXTERNAL MODULE: ./src/components/Text/index.tsx
var Text = __webpack_require__(7300);
;// CONCATENATED MODULE: ./src/components/Table/index.tsx



const BasicTable = ({ data , columns , variant  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.TableContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Table, {
            variant: variant || "simple",
            size: "sm",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Thead, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                        children: columns.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Th, {
                                children: item.header
                            }, item.header))
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Tbody, {
                    children: data.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Tr, {
                            children: columns.map((column)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Td, {
                                    children: item[column.accessor]
                                }, column.header))
                        }, Number(item.id)))
                })
            ]
        })
    });
};
/* harmony default export */ const Table = (BasicTable);

;// CONCATENATED MODULE: ./src/components/Indicator/index.tsx


const Indicator = ()=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Center, {
        h: "100%",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Spinner, {
            thickness: "4px",
            speed: "0.65s",
            emptyColor: "gray.200",
            color: "blue.500",
            size: "xl"
        })
    });

;// CONCATENATED MODULE: ./src/constants/tableColumn.ts
const columnsUsers = [
    {
        header: "User",
        accessor: "userName"
    },
    {
        header: "Email",
        accessor: "email"
    },
    {
        header: "Role",
        accessor: "role"
    },
    {
        header: "Plan",
        accessor: "plan"
    },
    {
        header: "Status",
        accessor: "status"
    },
    {
        header: "Actions",
        accessor: "actions"
    }
];

;// CONCATENATED MODULE: ./src/constants/routes.ts
const ROUTES = {
    HOME: "/",
    HOME_PAGE: "/dashboard",
    LOGIN: "/login",
    NOT_FOUND: "/404",
    USERS: "/users",
    USER_DETAIL: {
        URL: "/user/",
        TITLE: "User detail"
    }
};

;// CONCATENATED MODULE: ./src/pages/Users/index.tsx






// Components





const Users = ()=>{
    const { data =[] , isFetching  } = (0,react_query_.useQuery)([
        "users"
    ], ()=>getUsers(1));
    const dataTable = data.length ? data.map((user)=>({
            userName: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.HStack, {
                spacing: 2,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Avatar, {
                        name: user.fullName,
                        src: "https://bit.ly/broken-link"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `${ROUTES.USER_DETAIL.URL}${user.id}`,
                                children: user.fullName
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Text/* Text */.x, {
                                pt: 2,
                                fontSize: "xs",
                                children: user.userName
                            })
                        ]
                    })
                ]
            }, user.id),
            email: user.email,
            role: user.role,
            plan: user.plan,
            status: user.status
        })) : [];
    return isFetching ? /*#__PURE__*/ jsx_runtime_.jsx(Indicator, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            boxShadow: "xs",
            p: "6",
            rounded: "md",
            bg: "white",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Table, {
                data: dataTable,
                columns: columnsUsers
            })
        })
    });
};
/* harmony default export */ const pages_Users = (Users);
async function getStaticProps() {
    const queryClient = new react_query_.QueryClient();
    await queryClient.prefetchQuery([
        "user"
    ], ()=>getUsers());
    return {
        props: {
            dehydratedState: (0,react_query_.dehydrate)(queryClient)
        }
    };
}


/***/ })

};
;