(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_abnf"],{

/***/ "./node_modules/highlight.js/lib/languages/abnf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/abnf.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Augmented Backus-Naur Form\nAuthor: Alex McKibben <alex@nullscope.net>\nWebsite: https://tools.ietf.org/html/rfc5234\n*/\n\n/** @type LanguageFn */\nfunction abnf(hljs) {\n    var regexes = {\n        ruleDeclaration: \"^[a-zA-Z][a-zA-Z0-9-]*\",\n        unexpectedChars: \"[!@#$^&',?+~`|:]\"\n    };\n\n    var keywords = [\n        \"ALPHA\",\n        \"BIT\",\n        \"CHAR\",\n        \"CR\",\n        \"CRLF\",\n        \"CTL\",\n        \"DIGIT\",\n        \"DQUOTE\",\n        \"HEXDIG\",\n        \"HTAB\",\n        \"LF\",\n        \"LWSP\",\n        \"OCTET\",\n        \"SP\",\n        \"VCHAR\",\n        \"WSP\"\n    ];\n\n    var commentMode = hljs.COMMENT(\";\", \"$\");\n\n    var terminalBinaryMode = {\n        className: \"symbol\",\n        begin: /%b[0-1]+(-[0-1]+|(\\.[0-1]+)+){0,1}/\n    };\n\n    var terminalDecimalMode = {\n        className: \"symbol\",\n        begin: /%d[0-9]+(-[0-9]+|(\\.[0-9]+)+){0,1}/\n    };\n\n    var terminalHexadecimalMode = {\n        className: \"symbol\",\n        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\\.[0-9A-F]+)+){0,1}/,\n    };\n\n    var caseSensitivityIndicatorMode = {\n        className: \"symbol\",\n        begin: /%[si]/\n    };\n\n    var ruleDeclarationMode = {\n        className: \"attribute\",\n        begin: regexes.ruleDeclaration + '(?=\\\\s*=)',\n    };\n\n    return {\n      name: 'Augmented Backus-Naur Form',\n      illegal: regexes.unexpectedChars,\n      keywords: keywords.join(\" \"),\n      contains: [\n          ruleDeclarationMode,\n          commentMode,\n          terminalBinaryMode,\n          terminalDecimalMode,\n          terminalHexadecimalMode,\n          caseSensitivityIndicatorMode,\n          hljs.QUOTE_STRING_MODE,\n          hljs.NUMBER_MODE\n      ]\n    };\n}\n\nmodule.exports = abnf;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/abnf.js?");

/***/ })

}]);