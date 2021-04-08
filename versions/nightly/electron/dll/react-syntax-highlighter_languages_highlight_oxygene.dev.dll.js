(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_oxygene"],{

/***/ "./node_modules/highlight.js/lib/languages/oxygene.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/oxygene.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Oxygene\nAuthor: Carlo Kok <ck@remobjects.com>\nDescription: Oxygene is built on the foundation of Object Pascal, revamped and extended to be a modern language for the twenty-first century.\nWebsite: https://www.elementscompiler.com/elements/default.aspx\n*/\n\nfunction oxygene(hljs) {\n  var OXYGENE_KEYWORDS = {\n    $pattern: /\\.?\\w+/,\n    keyword: 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue '+\n    'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false '+\n    'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited '+\n    'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of '+\n    'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly '+\n    'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple '+\n    'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal '+\n    'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained'\n  };\n  var CURLY_COMMENT = hljs.COMMENT(\n    '{',\n    '}',\n    {\n      relevance: 0\n    }\n  );\n  var PAREN_COMMENT = hljs.COMMENT(\n    '\\\\(\\\\*',\n    '\\\\*\\\\)',\n    {\n      relevance: 10\n    }\n  );\n  var STRING = {\n    className: 'string',\n    begin: '\\'', end: '\\'',\n    contains: [{begin: '\\'\\''}]\n  };\n  var CHAR_STRING = {\n    className: 'string', begin: '(#\\\\d+)+'\n  };\n  var FUNCTION = {\n    className: 'function',\n    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',\n    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',\n    contains: [\n      hljs.TITLE_MODE,\n      {\n        className: 'params',\n        begin: '\\\\(', end: '\\\\)',\n        keywords: OXYGENE_KEYWORDS,\n        contains: [STRING, CHAR_STRING]\n      },\n      CURLY_COMMENT, PAREN_COMMENT\n    ]\n  };\n  return {\n    name: 'Oxygene',\n    case_insensitive: true,\n    keywords: OXYGENE_KEYWORDS,\n    illegal: '(\"|\\\\$[G-Zg-z]|\\\\/\\\\*|</|=>|->)',\n    contains: [\n      CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,\n      STRING, CHAR_STRING,\n      hljs.NUMBER_MODE,\n      FUNCTION,\n      {\n        className: 'class',\n        begin: '=\\\\bclass\\\\b', end: 'end;',\n        keywords: OXYGENE_KEYWORDS,\n        contains: [\n          STRING, CHAR_STRING,\n          CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,\n          FUNCTION\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = oxygene;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/oxygene.js?");

/***/ })

}]);