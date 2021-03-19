(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["vendors~react-syntax-highlighter_languages_highlight_javascript"],{

/***/ "./node_modules/highlight.js/lib/languages/javascript.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/javascript.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("const IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';\nconst KEYWORDS = [\n  \"as\", // for exports\n  \"in\",\n  \"of\",\n  \"if\",\n  \"for\",\n  \"while\",\n  \"finally\",\n  \"var\",\n  \"new\",\n  \"function\",\n  \"do\",\n  \"return\",\n  \"void\",\n  \"else\",\n  \"break\",\n  \"catch\",\n  \"instanceof\",\n  \"with\",\n  \"throw\",\n  \"case\",\n  \"default\",\n  \"try\",\n  \"switch\",\n  \"continue\",\n  \"typeof\",\n  \"delete\",\n  \"let\",\n  \"yield\",\n  \"const\",\n  \"class\",\n  // JS handles these with a special rule\n  // \"get\",\n  // \"set\",\n  \"debugger\",\n  \"async\",\n  \"await\",\n  \"static\",\n  \"import\",\n  \"from\",\n  \"export\",\n  \"extends\"\n];\nconst LITERALS = [\n  \"true\",\n  \"false\",\n  \"null\",\n  \"undefined\",\n  \"NaN\",\n  \"Infinity\"\n];\n\nconst TYPES = [\n  \"Intl\",\n  \"DataView\",\n  \"Number\",\n  \"Math\",\n  \"Date\",\n  \"String\",\n  \"RegExp\",\n  \"Object\",\n  \"Function\",\n  \"Boolean\",\n  \"Error\",\n  \"Symbol\",\n  \"Set\",\n  \"Map\",\n  \"WeakSet\",\n  \"WeakMap\",\n  \"Proxy\",\n  \"Reflect\",\n  \"JSON\",\n  \"Promise\",\n  \"Float64Array\",\n  \"Int16Array\",\n  \"Int32Array\",\n  \"Int8Array\",\n  \"Uint16Array\",\n  \"Uint32Array\",\n  \"Float32Array\",\n  \"Array\",\n  \"Uint8Array\",\n  \"Uint8ClampedArray\",\n  \"ArrayBuffer\"\n];\n\nconst ERROR_TYPES = [\n  \"EvalError\",\n  \"InternalError\",\n  \"RangeError\",\n  \"ReferenceError\",\n  \"SyntaxError\",\n  \"TypeError\",\n  \"URIError\"\n];\n\nconst BUILT_IN_GLOBALS = [\n  \"setInterval\",\n  \"setTimeout\",\n  \"clearInterval\",\n  \"clearTimeout\",\n\n  \"require\",\n  \"exports\",\n\n  \"eval\",\n  \"isFinite\",\n  \"isNaN\",\n  \"parseFloat\",\n  \"parseInt\",\n  \"decodeURI\",\n  \"decodeURIComponent\",\n  \"encodeURI\",\n  \"encodeURIComponent\",\n  \"escape\",\n  \"unescape\"\n];\n\nconst BUILT_IN_VARIABLES = [\n  \"arguments\",\n  \"this\",\n  \"super\",\n  \"console\",\n  \"window\",\n  \"document\",\n  \"localStorage\",\n  \"module\",\n  \"global\" // Node.js\n];\n\nconst BUILT_INS = [].concat(\n  BUILT_IN_GLOBALS,\n  BUILT_IN_VARIABLES,\n  TYPES,\n  ERROR_TYPES\n);\n\n/**\n * @param {string} value\n * @returns {RegExp}\n * */\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction source(re) {\n  if (!re) return null;\n  if (typeof re === \"string\") return re;\n\n  return re.source;\n}\n\n/**\n * @param {RegExp | string } re\n * @returns {string}\n */\nfunction lookahead(re) {\n  return concat('(?=', re, ')');\n}\n\n/**\n * @param {...(RegExp | string) } args\n * @returns {string}\n */\nfunction concat(...args) {\n  const joined = args.map((x) => source(x)).join(\"\");\n  return joined;\n}\n\n/*\nLanguage: JavaScript\nDescription: JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.\nCategory: common, scripting\nWebsite: https://developer.mozilla.org/en-US/docs/Web/JavaScript\n*/\n\nfunction javascript(hljs) {\n  var IDENT_RE$1 = IDENT_RE;\n  var FRAGMENT = {\n    begin: '<>',\n    end: '</>'\n  };\n  var XML_TAG = {\n    begin: /<[A-Za-z0-9\\\\._:-]+/,\n    end: /\\/[A-Za-z0-9\\\\._:-]+>|\\/>/\n  };\n  var KEYWORDS$1 = {\n    $pattern: IDENT_RE,\n    keyword: KEYWORDS.join(\" \"),\n    literal: LITERALS.join(\" \"),\n    built_in: BUILT_INS.join(\" \")\n  };\n  var NUMBER = {\n    className: 'number',\n    variants: [\n      { begin: '\\\\b(0[bB][01]+)n?' },\n      { begin: '\\\\b(0[oO][0-7]+)n?' },\n      { begin: hljs.C_NUMBER_RE + 'n?' }\n    ],\n    relevance: 0\n  };\n  var SUBST = {\n    className: 'subst',\n    begin: '\\\\$\\\\{', end: '\\\\}',\n    keywords: KEYWORDS$1,\n    contains: []  // defined later\n  };\n  var HTML_TEMPLATE = {\n    begin: 'html`', end: '',\n    starts: {\n      end: '`', returnEnd: false,\n      contains: [\n        hljs.BACKSLASH_ESCAPE,\n        SUBST\n      ],\n      subLanguage: 'xml',\n    }\n  };\n  var CSS_TEMPLATE = {\n    begin: 'css`', end: '',\n    starts: {\n      end: '`', returnEnd: false,\n      contains: [\n        hljs.BACKSLASH_ESCAPE,\n        SUBST\n      ],\n      subLanguage: 'css',\n    }\n  };\n  var TEMPLATE_STRING = {\n    className: 'string',\n    begin: '`', end: '`',\n    contains: [\n      hljs.BACKSLASH_ESCAPE,\n      SUBST\n    ]\n  };\n  SUBST.contains = [\n    hljs.APOS_STRING_MODE,\n    hljs.QUOTE_STRING_MODE,\n    HTML_TEMPLATE,\n    CSS_TEMPLATE,\n    TEMPLATE_STRING,\n    NUMBER,\n    hljs.REGEXP_MODE\n  ];\n  var PARAMS_CONTAINS = SUBST.contains.concat([\n    // eat recursive parens in sub expressions\n    { begin: /\\(/, end: /\\)/,\n      contains: [\"self\"].concat(SUBST.contains, [hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE])\n    },\n    hljs.C_BLOCK_COMMENT_MODE,\n    hljs.C_LINE_COMMENT_MODE\n  ]);\n  var PARAMS = {\n    className: 'params',\n    begin: /\\(/, end: /\\)/,\n    excludeBegin: true,\n    excludeEnd: true,\n    contains: PARAMS_CONTAINS\n  };\n\n  return {\n    name: 'JavaScript',\n    aliases: ['js', 'jsx', 'mjs', 'cjs'],\n    keywords: KEYWORDS$1,\n    contains: [\n      hljs.SHEBANG({\n        binary: \"node\",\n        relevance: 5\n      }),\n      {\n        className: 'meta',\n        relevance: 10,\n        begin: /^\\s*['\"]use (strict|asm)['\"]/\n      },\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      HTML_TEMPLATE,\n      CSS_TEMPLATE,\n      TEMPLATE_STRING,\n      hljs.C_LINE_COMMENT_MODE,\n      hljs.COMMENT(\n        '/\\\\*\\\\*',\n        '\\\\*/',\n        {\n          relevance : 0,\n          contains : [\n            {\n              className : 'doctag',\n              begin : '@[A-Za-z]+',\n              contains : [\n                {\n                  className: 'type',\n                  begin: '\\\\{',\n                  end: '\\\\}',\n                  relevance: 0\n                },\n                {\n                  className: 'variable',\n                  begin: IDENT_RE$1 + '(?=\\\\s*(-)|$)',\n                  endsParent: true,\n                  relevance: 0\n                },\n                // eat spaces (not newlines) so we can find\n                // types or variables\n                {\n                  begin: /(?=[^\\n])\\s/,\n                  relevance: 0\n                },\n              ]\n            }\n          ]\n        }\n      ),\n      hljs.C_BLOCK_COMMENT_MODE,\n      NUMBER,\n      { // object attr container\n        begin: concat(/[{,\\n]\\s*/,\n          // we need to look ahead to make sure that we actually have an\n          // attribute coming up so we don't steal a comma from a potential\n          // \"value\" container\n          //\n          // NOTE: this might not work how you think.  We don't actually always\n          // enter this mode and stay.  Instead it might merely match `,\n          // <comments up next>` and then immediately end after the , because it\n          // fails to find any actual attrs. But this still does the job because\n          // it prevents the value contain rule from grabbing this instead and\n          // prevening this rule from firing when we actually DO have keys.\n          lookahead(concat(\n            // we also need to allow for multiple possible comments inbetween\n            // the first key:value pairing\n            /(((\\/\\/.*$)|(\\/\\*(.|\\n)*\\*\\/))\\s*)*/,\n            IDENT_RE$1 + '\\\\s*:'))),\n        relevance: 0,\n        contains: [\n          {\n            className: 'attr',\n            begin: IDENT_RE$1 + lookahead('\\\\s*:'),\n            relevance: 0,\n          },\n        ]\n      },\n      { // \"value\" container\n        begin: '(' + hljs.RE_STARTERS_RE + '|\\\\b(case|return|throw)\\\\b)\\\\s*',\n        keywords: 'return throw case',\n        contains: [\n          hljs.C_LINE_COMMENT_MODE,\n          hljs.C_BLOCK_COMMENT_MODE,\n          hljs.REGEXP_MODE,\n          {\n            className: 'function',\n            // we have to count the parens to make sure we actually have the\n            // correct bounding ( ) before the =>.  There could be any number of\n            // sub-expressions inside also surrounded by parens.\n            begin: '(\\\\([^(]*' +\n              '(\\\\([^(]*' +\n                '(\\\\([^(]*' +\n                '\\\\))?' +\n              '\\\\))?' +\n            '\\\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\\\s*=>', returnBegin: true,\n            end: '\\\\s*=>',\n            contains: [\n              {\n                className: 'params',\n                variants: [\n                  {\n                    begin: hljs.UNDERSCORE_IDENT_RE\n                  },\n                  {\n                    className: null,\n                    begin: /\\(\\s*\\)/,\n                    skip: true\n                  },\n                  {\n                    begin: /\\(/, end: /\\)/,\n                    excludeBegin: true, excludeEnd: true,\n                    keywords: KEYWORDS$1,\n                    contains: PARAMS_CONTAINS\n                  }\n                ]\n              }\n            ]\n          },\n          { // could be a comma delimited list of params to a function call\n            begin: /,/, relevance: 0,\n          },\n          {\n            className: '',\n            begin: /\\s/,\n            end: /\\s*/,\n            skip: true,\n          },\n          { // JSX\n            variants: [\n              { begin: FRAGMENT.begin, end: FRAGMENT.end },\n              { begin: XML_TAG.begin, end: XML_TAG.end }\n            ],\n            subLanguage: 'xml',\n            contains: [\n              {\n                begin: XML_TAG.begin, end: XML_TAG.end, skip: true,\n                contains: ['self']\n              }\n            ]\n          },\n        ],\n        relevance: 0\n      },\n      {\n        className: 'function',\n        beginKeywords: 'function', end: /\\{/, excludeEnd: true,\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE$1}),\n          PARAMS\n        ],\n        illegal: /\\[|%/\n      },\n      {\n        begin: /\\$[(.]/ // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`\n      },\n\n      hljs.METHOD_GUARD,\n      { // ES6 class\n        className: 'class',\n        beginKeywords: 'class', end: /[{;=]/, excludeEnd: true,\n        illegal: /[:\"\\[\\]]/,\n        contains: [\n          {beginKeywords: 'extends'},\n          hljs.UNDERSCORE_TITLE_MODE\n        ]\n      },\n      {\n        beginKeywords: 'constructor', end: /\\{/, excludeEnd: true\n      },\n      {\n        begin: '(get|set)\\\\s+(?=' + IDENT_RE$1 + '\\\\()',\n        end: /{/,\n        keywords: \"get set\",\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE$1}),\n          { begin: /\\(\\)/ }, // eat to avoid empty params\n          PARAMS\n        ]\n\n      }\n    ],\n    illegal: /#(?!!)/\n  };\n}\n\nmodule.exports = javascript;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/javascript.js?");

/***/ })

}]);