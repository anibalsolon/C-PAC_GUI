(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_dart"],{

/***/ "./node_modules/highlight.js/lib/languages/dart.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dart.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Dart\nRequires: markdown.js\nAuthor: Maxim Dikun <dikmax@gmail.com>\nDescription: Dart a modern, object-oriented language developed by Google. For more information see https://www.dartlang.org/\nWebsite: https://dart.dev\nCategory: scripting\n*/\n\nfunction dart(hljs) {\n  const SUBST = {\n    className: 'subst',\n    variants: [{\n      begin: '\\\\$[A-Za-z0-9_]+'\n    }],\n  };\n\n  const BRACED_SUBST = {\n    className: 'subst',\n    variants: [{\n      begin: '\\\\${',\n      end: '}'\n    }],\n    keywords: 'true false null this is new super',\n  };\n\n  const STRING = {\n    className: 'string',\n    variants: [{\n        begin: 'r\\'\\'\\'',\n        end: '\\'\\'\\''\n      },\n      {\n        begin: 'r\"\"\"',\n        end: '\"\"\"'\n      },\n      {\n        begin: 'r\\'',\n        end: '\\'',\n        illegal: '\\\\n'\n      },\n      {\n        begin: 'r\"',\n        end: '\"',\n        illegal: '\\\\n'\n      },\n      {\n        begin: '\\'\\'\\'',\n        end: '\\'\\'\\'',\n        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]\n      },\n      {\n        begin: '\"\"\"',\n        end: '\"\"\"',\n        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]\n      },\n      {\n        begin: '\\'',\n        end: '\\'',\n        illegal: '\\\\n',\n        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]\n      },\n      {\n        begin: '\"',\n        end: '\"',\n        illegal: '\\\\n',\n        contains: [hljs.BACKSLASH_ESCAPE, SUBST, BRACED_SUBST]\n      }\n    ]\n  };\n  BRACED_SUBST.contains = [\n    hljs.C_NUMBER_MODE, STRING\n  ];\n\n  const BUILT_IN_TYPES = [\n    // dart:core\n    'Comparable',\n    'DateTime',\n    'Duration',\n    'Function',\n    'Iterable',\n    'Iterator',\n    'List',\n    'Map',\n    'Match',\n    'Object',\n    'Pattern',\n    'RegExp',\n    'Set',\n    'Stopwatch',\n    'String',\n    'StringBuffer',\n    'StringSink',\n    'Symbol',\n    'Type',\n    'Uri',\n    'bool',\n    'double',\n    'int',\n    'num',\n    // dart:html\n    'Element',\n    'ElementList',\n  ];\n  const NULLABLE_BUILT_IN_TYPES = BUILT_IN_TYPES.map((e) => `${e}?`);\n\n  const KEYWORDS = {\n    keyword: 'abstract as assert async await break case catch class const continue covariant default deferred do ' +\n      'dynamic else enum export extends extension external factory false final finally for Function get hide if ' +\n      'implements import in inferface is late library mixin new null on operator part required rethrow return set ' +\n      'show static super switch sync this throw true try typedef var void while with yield',\n    built_in:\n      BUILT_IN_TYPES\n        .concat(NULLABLE_BUILT_IN_TYPES)\n        .concat([\n          // dart:core\n          'Never',\n          'Null',\n          'dynamic',\n          'print',\n          // dart:html\n          'document',\n          'querySelector',\n          'querySelectorAll',\n          'window',\n      ]).join(' '),\n    $pattern: /[A-Za-z][A-Za-z0-9_]*\\??/\n  };\n\n  return {\n    name: 'Dart',\n    keywords: KEYWORDS,\n    contains: [\n      STRING,\n      hljs.COMMENT(\n        '/\\\\*\\\\*',\n        '\\\\*/', {\n          subLanguage: 'markdown',\n          relevance:0\n        }\n      ),\n      hljs.COMMENT(\n        '///+\\\\s*',\n        '$', {\n          contains: [{\n            subLanguage: 'markdown',\n            begin: '.',\n            end: '$',\n            relevance:0\n          }]\n        }\n      ),\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.C_BLOCK_COMMENT_MODE,\n      {\n        className: 'class',\n        beginKeywords: 'class interface',\n        end: '{',\n        excludeEnd: true,\n        contains: [{\n            beginKeywords: 'extends implements'\n          },\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      },\n      hljs.C_NUMBER_MODE,\n      {\n        className: 'meta',\n        begin: '@[A-Za-z]+'\n      },\n      {\n        begin: '=>' // No markup, just a relevance booster\n      }\n    ]\n  };\n}\n\nmodule.exports = dart;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/dart.js?");

/***/ })

}]);