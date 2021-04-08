(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_gherkin"],{

/***/ "./node_modules/highlight.js/lib/languages/gherkin.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/gherkin.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\n Language: Gherkin\n Author: Sam Pikesley (@pikesley) <sam.pikesley@theodi.org>\n Description: Gherkin is the format for cucumber specifications. It is a domain specific language which helps you to describe business behavior without the need to go into detail of implementation.\n Website: https://cucumber.io/docs/gherkin/\n */\n\nfunction gherkin (hljs) {\n  return {\n    name: 'Gherkin',\n    aliases: ['feature'],\n    keywords: 'Feature Background Ability Business\\ Need Scenario Scenarios Scenario\\ Outline Scenario\\ Template Examples Given And Then But When',\n    contains: [\n      {\n        className: 'symbol',\n        begin: '\\\\*',\n        relevance: 0\n      },\n      {\n        className: 'meta',\n        begin: '@[^@\\\\s]+'\n      },\n      {\n        begin: '\\\\|', end: '\\\\|\\\\w*$',\n        contains: [\n          {\n            className: 'string',\n            begin: '[^|]+'\n          }\n        ]\n      },\n      {\n        className: 'variable',\n        begin: '<', end: '>'\n      },\n      hljs.HASH_COMMENT_MODE,\n      {\n        className: 'string',\n        begin: '\"\"\"', end: '\"\"\"'\n      },\n      hljs.QUOTE_STRING_MODE\n    ]\n  };\n}\n\nmodule.exports = gherkin;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/gherkin.js?");

/***/ })

}]);