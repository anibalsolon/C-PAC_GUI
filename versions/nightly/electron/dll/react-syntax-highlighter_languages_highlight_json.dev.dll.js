(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_json"],{

/***/ "./node_modules/highlight.js/lib/languages/json.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/json.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: JSON\nDescription: JSON (JavaScript Object Notation) is a lightweight data-interchange format.\nAuthor: Ivan Sagalaev <maniac@softwaremaniacs.org>\nWebsite: http://www.json.org\nCategory: common, protocols\n*/\n\nfunction json(hljs) {\n  var LITERALS = {literal: 'true false null'};\n  var ALLOWED_COMMENTS = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE\n  ];\n  var TYPES = [\n    hljs.QUOTE_STRING_MODE,\n    hljs.C_NUMBER_MODE\n  ];\n  var VALUE_CONTAINER = {\n    end: ',', endsWithParent: true, excludeEnd: true,\n    contains: TYPES,\n    keywords: LITERALS\n  };\n  var OBJECT = {\n    begin: '{', end: '}',\n    contains: [\n      {\n        className: 'attr',\n        begin: /\"/, end: /\"/,\n        contains: [hljs.BACKSLASH_ESCAPE],\n        illegal: '\\\\n',\n      },\n      hljs.inherit(VALUE_CONTAINER, {begin: /:/})\n    ].concat(ALLOWED_COMMENTS),\n    illegal: '\\\\S'\n  };\n  var ARRAY = {\n    begin: '\\\\[', end: '\\\\]',\n    contains: [hljs.inherit(VALUE_CONTAINER)], // inherit is a workaround for a bug that makes shared modes with endsWithParent compile only the ending of one of the parents\n    illegal: '\\\\S'\n  };\n  TYPES.push(OBJECT, ARRAY);\n  ALLOWED_COMMENTS.forEach(function(rule) {\n    TYPES.push(rule);\n  });\n  return {\n    name: 'JSON',\n    contains: TYPES,\n    keywords: LITERALS,\n    illegal: '\\\\S'\n  };\n}\n\nmodule.exports = json;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/json.js?");

/***/ })

}]);