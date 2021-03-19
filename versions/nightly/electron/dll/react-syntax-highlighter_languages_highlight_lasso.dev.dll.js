(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_lasso"],{

/***/ "./node_modules/highlight.js/lib/languages/lasso.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/lasso.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Lasso\nAuthor: Eric Knibbe <eric@lassosoft.com>\nDescription: Lasso is a language and server platform for database-driven web applications. This definition handles Lasso 9 syntax and LassoScript for Lasso 8.6 and earlier.\nWebsite: http://www.lassosoft.com/What-Is-Lasso\n*/\n\nfunction lasso(hljs) {\n  var LASSO_IDENT_RE = '[a-zA-Z_][\\\\w.]*';\n  var LASSO_ANGLE_RE = '<\\\\?(lasso(script)?|=)';\n  var LASSO_CLOSE_RE = '\\\\]|\\\\?>';\n  var LASSO_KEYWORDS = {\n    $pattern: LASSO_IDENT_RE + '|&[lg]t;',\n    literal:\n      'true false none minimal full all void and or not ' +\n      'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',\n    built_in:\n      'array date decimal duration integer map pair string tag xml null ' +\n      'boolean bytes keyword list locale queue set stack staticarray ' +\n      'local var variable global data self inherited currentcapture givenblock',\n    keyword:\n      'cache database_names database_schemanames database_tablenames ' +\n      'define_tag define_type email_batch encode_set html_comment handle ' +\n      'handle_error header if inline iterate ljax_target link ' +\n      'link_currentaction link_currentgroup link_currentrecord link_detail ' +\n      'link_firstgroup link_firstrecord link_lastgroup link_lastrecord ' +\n      'link_nextgroup link_nextrecord link_prevgroup link_prevrecord log ' +\n      'loop namespace_using output_none portal private protect records ' +\n      'referer referrer repeating resultset rows search_args ' +\n      'search_arguments select sort_args sort_arguments thread_atomic ' +\n      'value_list while abort case else fail_if fail_ifnot fail if_empty ' +\n      'if_false if_null if_true loop_abort loop_continue loop_count params ' +\n      'params_up return return_value run_children soap_definetag ' +\n      'soap_lastrequest soap_lastresponse tag_name ascending average by ' +\n      'define descending do equals frozen group handle_failure import in ' +\n      'into join let match max min on order parent protected provide public ' +\n      'require returnhome skip split_thread sum take thread to trait type ' +\n      'where with yield yieldhome'\n  };\n  var HTML_COMMENT = hljs.COMMENT(\n    '<!--',\n    '-->',\n    {\n      relevance: 0\n    }\n  );\n  var LASSO_NOPROCESS = {\n    className: 'meta',\n    begin: '\\\\[noprocess\\\\]',\n    starts: {\n      end: '\\\\[/noprocess\\\\]',\n      returnEnd: true,\n      contains: [HTML_COMMENT]\n    }\n  };\n  var LASSO_START = {\n    className: 'meta',\n    begin: '\\\\[/noprocess|' + LASSO_ANGLE_RE\n  };\n  var LASSO_DATAMEMBER = {\n    className: 'symbol',\n    begin: '\\'' + LASSO_IDENT_RE + '\\''\n  };\n  var LASSO_CODE = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    hljs.inherit(hljs.C_NUMBER_MODE, {begin: hljs.C_NUMBER_RE + '|(-?infinity|NaN)\\\\b'}),\n    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),\n    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),\n    {\n      className: 'string',\n      begin: '`', end: '`'\n    },\n    { // variables\n      variants: [\n        {\n          begin: '[#$]' + LASSO_IDENT_RE\n        },\n        {\n          begin: '#', end: '\\\\d+',\n          illegal: '\\\\W'\n        }\n      ]\n    },\n    {\n      className: 'type',\n      begin: '::\\\\s*', end: LASSO_IDENT_RE,\n      illegal: '\\\\W'\n    },\n    {\n      className: 'params',\n      variants: [\n        {\n          begin: '-(?!infinity)' + LASSO_IDENT_RE,\n          relevance: 0\n        },\n        {\n          begin: '(\\\\.\\\\.\\\\.)'\n        }\n      ]\n    },\n    {\n      begin: /(->|\\.)\\s*/,\n      relevance: 0,\n      contains: [LASSO_DATAMEMBER]\n    },\n    {\n      className: 'class',\n      beginKeywords: 'define',\n      returnEnd: true, end: '\\\\(|=>',\n      contains: [\n        hljs.inherit(hljs.TITLE_MODE, {begin: LASSO_IDENT_RE + '(=(?!>))?|[-+*/%](?!>)'})\n      ]\n    }\n  ];\n  return {\n    name: 'Lasso',\n    aliases: ['ls', 'lassoscript'],\n    case_insensitive: true,\n    keywords: LASSO_KEYWORDS,\n    contains: [\n      {\n        className: 'meta',\n        begin: LASSO_CLOSE_RE,\n        relevance: 0,\n        starts: { // markup\n          end: '\\\\[|' + LASSO_ANGLE_RE,\n          returnEnd: true,\n          relevance: 0,\n          contains: [HTML_COMMENT]\n        }\n      },\n      LASSO_NOPROCESS,\n      LASSO_START,\n      {\n        className: 'meta',\n        begin: '\\\\[no_square_brackets',\n        starts: {\n          end: '\\\\[/no_square_brackets\\\\]', // not implemented in the language\n          keywords: LASSO_KEYWORDS,\n          contains: [\n            {\n              className: 'meta',\n              begin: LASSO_CLOSE_RE,\n              relevance: 0,\n              starts: {\n                end: '\\\\[noprocess\\\\]|' + LASSO_ANGLE_RE,\n                returnEnd: true,\n                contains: [HTML_COMMENT]\n              }\n            },\n            LASSO_NOPROCESS,\n            LASSO_START\n          ].concat(LASSO_CODE)\n        }\n      },\n      {\n        className: 'meta',\n        begin: '\\\\[',\n        relevance: 0\n      },\n      {\n        className: 'meta',\n        begin: '^#!', end:'lasso9$',\n        relevance: 10\n      }\n    ].concat(LASSO_CODE)\n  };\n}\n\nmodule.exports = lasso;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/lasso.js?");

/***/ })

}]);