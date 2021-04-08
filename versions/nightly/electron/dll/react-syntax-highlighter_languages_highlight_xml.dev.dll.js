(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_xml"],{

/***/ "./node_modules/highlight.js/lib/languages/xml.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xml.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: HTML, XML\nWebsite: https://www.w3.org/XML/\nCategory: common\n*/\n\nfunction xml(hljs) {\n  var XML_IDENT_RE = '[A-Za-z0-9\\\\._:-]+';\n  var XML_ENTITIES = {\n    className: 'symbol',\n    begin: '&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;'\n  };\n  var XML_META_KEYWORDS = {\n\t  begin: '\\\\s',\n\t  contains:[\n\t    {\n\t      className: 'meta-keyword',\n\t      begin: '#?[a-z_][a-z1-9_-]+',\n\t      illegal: '\\\\n',\n      }\n\t  ]\n  };\n  var XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {begin: '\\\\(', end: '\\\\)'});\n  var APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {className: 'meta-string'});\n  var QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'});\n  var TAG_INTERNALS = {\n    endsWithParent: true,\n    illegal: /</,\n    relevance: 0,\n    contains: [\n      {\n        className: 'attr',\n        begin: XML_IDENT_RE,\n        relevance: 0\n      },\n      {\n        begin: /=\\s*/,\n        relevance: 0,\n        contains: [\n          {\n            className: 'string',\n            endsParent: true,\n            variants: [\n              {begin: /\"/, end: /\"/, contains: [XML_ENTITIES]},\n              {begin: /'/, end: /'/, contains: [XML_ENTITIES]},\n              {begin: /[^\\s\"'=<>`]+/}\n            ]\n          }\n        ]\n      }\n    ]\n  };\n  return {\n    name: 'HTML, XML',\n    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],\n    case_insensitive: true,\n    contains: [\n      {\n        className: 'meta',\n        begin: '<![a-z]', end: '>',\n        relevance: 10,\n        contains: [\n\t\t\t\t  XML_META_KEYWORDS,\n\t\t\t\t  QUOTE_META_STRING_MODE,\n\t\t\t\t  APOS_META_STRING_MODE,\n\t\t\t\t\tXML_META_PAR_KEYWORDS,\n\t\t\t\t\t{\n\t\t\t\t\t  begin: '\\\\[', end: '\\\\]',\n\t\t\t\t\t  contains:[\n\t\t\t\t\t\t  {\n\t\t\t\t\t      className: 'meta',\n\t\t\t\t\t      begin: '<![a-z]', end: '>',\n\t\t\t\t\t      contains: [\n\t\t\t\t\t        XML_META_KEYWORDS,\n\t\t\t\t\t        XML_META_PAR_KEYWORDS,\n\t\t\t\t\t        QUOTE_META_STRING_MODE,\n\t\t\t\t\t        APOS_META_STRING_MODE\n\t\t\t\t\t\t    ]\n\t\t\t        }\n\t\t\t\t\t  ]\n\t\t\t\t  }\n\t\t\t\t]\n      },\n      hljs.COMMENT(\n        '<!--',\n        '-->',\n        {\n          relevance: 10\n        }\n      ),\n      {\n        begin: '<\\\\!\\\\[CDATA\\\\[', end: '\\\\]\\\\]>',\n        relevance: 10\n      },\n      XML_ENTITIES,\n      {\n        className: 'meta',\n        begin: /<\\?xml/, end: /\\?>/, relevance: 10\n      },\n      {\n        className: 'tag',\n        /*\n        The lookahead pattern (?=...) ensures that 'begin' only matches\n        '<style' as a single word, followed by a whitespace or an\n        ending braket. The '$' is needed for the lexeme to be recognized\n        by hljs.subMode() that tests lexemes outside the stream.\n        */\n        begin: '<style(?=\\\\s|>)', end: '>',\n        keywords: {name: 'style'},\n        contains: [TAG_INTERNALS],\n        starts: {\n          end: '</style>', returnEnd: true,\n          subLanguage: ['css', 'xml']\n        }\n      },\n      {\n        className: 'tag',\n        // See the comment in the <style tag about the lookahead pattern\n        begin: '<script(?=\\\\s|>)', end: '>',\n        keywords: {name: 'script'},\n        contains: [TAG_INTERNALS],\n        starts: {\n          end: '\\<\\/script\\>', returnEnd: true,\n          subLanguage: ['javascript', 'handlebars', 'xml']\n        }\n      },\n      {\n        className: 'tag',\n        begin: '</?', end: '/?>',\n        contains: [\n          {\n            className: 'name', begin: /[^\\/><\\s]+/, relevance: 0\n          },\n          TAG_INTERNALS\n        ]\n      }\n    ]\n  };\n}\n\nmodule.exports = xml;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/xml.js?");

/***/ })

}]);