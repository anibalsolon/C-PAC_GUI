(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_pf"],{

/***/ "./node_modules/highlight.js/lib/languages/pf.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/pf.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Packet Filter config\nDescription: pf.conf — packet filter configuration file (OpenBSD)\nAuthor: Peter Piwowarski <oldlaptop654@aol.com>\nWebsite: http://man.openbsd.org/pf.conf\nCategory: config\n*/\n\nfunction pf(hljs) {\n  var MACRO = {\n    className: 'variable',\n    begin: /\\$[\\w\\d#@][\\w\\d_]*/\n  };\n  var TABLE = {\n    className: 'variable',\n    begin: /<(?!\\/)/, end: />/\n  };\n\n  return {\n    name: 'Packet Filter config',\n    aliases: ['pf.conf'],\n    keywords: {\n      $pattern: /[a-z0-9_<>-]+/,\n      built_in: /* block match pass are \"actions\" in pf.conf(5), the rest are\n                 * lexically similar top-level commands.\n                 */\n        'block match pass load anchor|5 antispoof|10 set table',\n      keyword:\n        'in out log quick on rdomain inet inet6 proto from port os to route ' +\n        'allow-opts divert-packet divert-reply divert-to flags group icmp-type ' +\n        'icmp6-type label once probability recieved-on rtable prio queue ' +\n        'tos tag tagged user keep fragment for os drop ' +\n        'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin ' +\n        'source-hash static-port ' +\n        'dup-to reply-to route-to ' +\n        'parent bandwidth default min max qlimit ' +\n        'block-policy debug fingerprints hostid limit loginterface optimization ' +\n        'reassemble ruleset-optimization basic none profile skip state-defaults ' +\n        'state-policy timeout ' +\n        'const counters persist ' +\n        'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy ' +\n        'source-track global rule max-src-nodes max-src-states max-src-conn ' +\n        'max-src-conn-rate overload flush ' +\n        'scrub|5 max-mss min-ttl no-df|10 random-id',\n      literal:\n        'all any no-route self urpf-failed egress|5 unknown'\n    },\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.NUMBER_MODE,\n      hljs.QUOTE_STRING_MODE,\n      MACRO,\n      TABLE\n    ]\n  };\n}\n\nmodule.exports = pf;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/pf.js?");

/***/ })

}]);