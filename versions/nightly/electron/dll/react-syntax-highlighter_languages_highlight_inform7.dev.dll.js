(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_inform7"],{

/***/ "./node_modules/highlight.js/lib/languages/inform7.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/inform7.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Inform 7\nAuthor: Bruno Dias <bruno.r.dias@gmail.com>\nDescription: Language definition for Inform 7, a DSL for writing parser interactive fiction.\nWebsite: http://inform7.com\n*/\n\nfunction inform7(hljs) {\n  var START_BRACKET = '\\\\[';\n  var END_BRACKET = '\\\\]';\n  return {\n    name: 'Inform 7',\n    aliases: ['i7'],\n    case_insensitive: true,\n    keywords: {\n      // Some keywords more or less unique to I7, for relevance.\n      keyword:\n        // kind:\n        'thing room person man woman animal container ' +\n        'supporter backdrop door ' +\n        // characteristic:\n        'scenery open closed locked inside gender ' +\n        // verb:\n        'is are say understand ' +\n        // misc keyword:\n        'kind of rule'\n    },\n    contains: [\n      {\n        className: 'string',\n        begin: '\"', end: '\"',\n        relevance: 0,\n        contains: [\n          {\n            className: 'subst',\n            begin: START_BRACKET, end: END_BRACKET\n          }\n        ]\n      },\n      {\n        className: 'section',\n        begin: /^(Volume|Book|Part|Chapter|Section|Table)\\b/,\n        end: '$'\n      },\n      {\n        // Rule definition\n        // This is here for relevance.\n        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\\b/,\n        end: ':',\n        contains: [\n          {\n            //Rule name\n            begin: '\\\\(This', end: '\\\\)'\n          }\n        ]\n      },\n      {\n        className: 'comment',\n        begin: START_BRACKET, end: END_BRACKET,\n        contains: ['self']\n      }\n    ]\n  };\n}\n\nmodule.exports = inform7;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/inform7.js?");

/***/ })

}]);