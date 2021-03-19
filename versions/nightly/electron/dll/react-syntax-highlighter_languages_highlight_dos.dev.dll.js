(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_dos"],{

/***/ "./node_modules/highlight.js/lib/languages/dos.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dos.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Batch file (DOS)\nAuthor: Alexander Makarov <sam@rmcreative.ru>\nContributors: Anton Kochkov <anton.kochkov@gmail.com>\nWebsite: https://en.wikipedia.org/wiki/Batch_file\n*/\n\nfunction dos(hljs) {\n  var COMMENT = hljs.COMMENT(\n    /^\\s*@?rem\\b/, /$/,\n    {\n      relevance: 10\n    }\n  );\n  var LABEL = {\n    className: 'symbol',\n    begin: '^\\\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\\\s+label)',\n    relevance: 0\n  };\n  return {\n    name: 'Batch file (DOS)',\n    aliases: ['bat', 'cmd'],\n    case_insensitive: true,\n    illegal: /\\/\\*/,\n    keywords: {\n      keyword:\n        'if else goto for in do call exit not exist errorlevel defined ' +\n        'equ neq lss leq gtr geq',\n      built_in:\n        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +\n        'shift cd dir echo setlocal endlocal set pause copy ' +\n        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +\n        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +\n        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +\n        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift ' +\n        'sort start subst time title tree type ver verify vol ' +\n        // winutils\n        'ping net ipconfig taskkill xcopy ren del'\n    },\n    contains: [\n      {\n        className: 'variable', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/\n      },\n      {\n        className: 'function',\n        begin: LABEL.begin, end: 'goto:eof',\n        contains: [\n          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\\\w*\\\\.)*([_a-zA-Z]\\\\w*:)?[_a-zA-Z]\\\\w*'}),\n          COMMENT\n        ]\n      },\n      {\n        className: 'number', begin: '\\\\b\\\\d+',\n        relevance: 0\n      },\n      COMMENT\n    ]\n  };\n}\n\nmodule.exports = dos;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/dos.js?");

/***/ })

}]);