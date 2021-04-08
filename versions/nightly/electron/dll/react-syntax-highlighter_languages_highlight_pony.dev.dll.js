(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_pony"],{

/***/ "./node_modules/highlight.js/lib/languages/pony.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/pony.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Pony\nAuthor: Joe Eli McIlvain <joe.eli.mac@gmail.com>\nDescription: Pony is an open-source, object-oriented, actor-model,\n             capabilities-secure, high performance programming language.\nWebsite: https://www.ponylang.io\n*/\n\nfunction pony(hljs) {\n  var KEYWORDS = {\n    keyword:\n      'actor addressof and as be break class compile_error compile_intrinsic ' +\n      'consume continue delegate digestof do else elseif embed end error ' +\n      'for fun if ifdef in interface is isnt lambda let match new not object ' +\n      'or primitive recover repeat return struct then trait try type until ' +\n      'use var where while with xor',\n    meta:\n      'iso val tag trn box ref',\n    literal:\n      'this false true'\n  };\n\n  var TRIPLE_QUOTE_STRING_MODE = {\n    className: 'string',\n    begin: '\"\"\"', end: '\"\"\"',\n    relevance: 10\n  };\n\n  var QUOTE_STRING_MODE = {\n    className: 'string',\n    begin: '\"', end: '\"',\n    contains: [hljs.BACKSLASH_ESCAPE]\n  };\n\n  var SINGLE_QUOTE_CHAR_MODE = {\n    className: 'string',\n    begin: '\\'', end: '\\'',\n    contains: [hljs.BACKSLASH_ESCAPE],\n    relevance: 0\n  };\n\n  var TYPE_NAME = {\n    className: 'type',\n    begin: '\\\\b_?[A-Z][\\\\w]*',\n    relevance: 0\n  };\n\n  var PRIMED_NAME = {\n    begin: hljs.IDENT_RE + '\\'', relevance: 0\n  };\n\n  var NUMBER_MODE = {\n    className: 'number',\n    begin: '(-?)(\\\\b0[xX][a-fA-F0-9]+|\\\\b0[bB][01]+|(\\\\b\\\\d+(_\\\\d+)?(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)',\n    relevance: 0\n  };\n\n  /**\n   * The `FUNCTION` and `CLASS` modes were intentionally removed to simplify\n   * highlighting and fix cases like\n   * ```\n   * interface Iterator[A: A]\n   *   fun has_next(): Bool\n   *   fun next(): A?\n   * ```\n   * where it is valid to have a function head without a body\n   */\n\n  return {\n    name: 'Pony',\n    keywords: KEYWORDS,\n    contains: [\n      TYPE_NAME,\n      TRIPLE_QUOTE_STRING_MODE,\n      QUOTE_STRING_MODE,\n      SINGLE_QUOTE_CHAR_MODE,\n      PRIMED_NAME,\n      NUMBER_MODE,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE\n    ]\n  };\n}\n\nmodule.exports = pony;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/pony.js?");

/***/ })

}]);