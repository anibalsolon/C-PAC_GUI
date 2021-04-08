(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_jbossCli"],{

/***/ "./node_modules/highlight.js/lib/languages/jboss-cli.js":
/*!**************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/jboss-cli.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\n Language: JBoss CLI\n Author: Raphaël Parrëe <rparree@edc4it.com>\n Description: language definition jboss cli\n Website: https://docs.jboss.org/author/display/WFLY/Command+Line+Interface\n Category: config\n */\n\nfunction jbossCli (hljs) {\n  var PARAM = {\n    begin: /[\\w-]+ *=/, returnBegin: true,\n    relevance: 0,\n    contains: [{className: 'attr', begin: /[\\w-]+/}]\n  };\n  var PARAMSBLOCK = {\n    className: 'params',\n    begin: /\\(/,\n    end: /\\)/,\n    contains: [PARAM],\n    relevance : 0\n  };\n  var OPERATION = {\n    className: 'function',\n    begin: /:[\\w\\-.]+/,\n    relevance: 0\n  };\n  var PATH = {\n    className: 'string',\n    begin: /\\B(([\\/.])[\\w\\-.\\/=]+)+/,\n  };\n  var COMMAND_PARAMS = {\n    className: 'params',\n    begin: /--[\\w\\-=\\/]+/,\n  };\n  return {\n    name: 'JBoss CLI',\n    aliases: ['wildfly-cli'],\n    keywords: {\n      $pattern: '[a-z\\-]+',\n      keyword: 'alias batch cd clear command connect connection-factory connection-info data-source deploy ' +\n      'deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls ' +\n      'patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias ' +\n      'undeploy unset version xa-data-source', // module\n      literal: 'true false'\n    },\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.QUOTE_STRING_MODE,\n      COMMAND_PARAMS,\n      OPERATION,\n      PATH,\n      PARAMSBLOCK\n    ]\n  }\n}\n\nmodule.exports = jbossCli;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/jboss-cli.js?");

/***/ })

}]);