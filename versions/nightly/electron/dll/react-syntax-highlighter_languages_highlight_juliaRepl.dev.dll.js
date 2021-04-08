(window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || []).push([["react-syntax-highlighter_languages_highlight_juliaRepl"],{

/***/ "./node_modules/highlight.js/lib/languages/julia-repl.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/julia-repl.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("/*\nLanguage: Julia REPL\nDescription: Julia REPL sessions\nAuthor: Morten Piibeleht <morten.piibeleht@gmail.com>\nWebsite: https://julialang.org\nRequires: julia.js\n\nThe Julia REPL code blocks look something like the following:\n\n  julia> function foo(x)\n             x + 1\n         end\n  foo (generic function with 1 method)\n\nThey start on a new line with \"julia>\". Usually there should also be a space after this, but\nwe also allow the code to start right after the > character. The code may run over multiple\nlines, but the additional lines must start with six spaces (i.e. be indented to match\n\"julia>\"). The rest of the code is assumed to be output from the executed code and will be\nleft un-highlighted.\n\nUsing simply spaces to identify line continuations may get a false-positive if the output\nalso prints out six spaces, but such cases should be rare.\n*/\n\nfunction juliaRepl(hljs) {\n  return {\n    name: 'Julia REPL',\n    contains: [\n      {\n        className: 'meta',\n        begin: /^julia>/,\n        relevance: 10,\n        starts: {\n          // end the highlighting if we are on a new line and the line does not have at\n          // least six spaces in the beginning\n          end: /^(?![ ]{6})/,\n          subLanguage: 'julia'\n      },\n      // jldoctest Markdown blocks are used in the Julia manual and package docs indicate\n      // code snippets that should be verified when the documentation is built. They can be\n      // either REPL-like or script-like, but are usually REPL-like and therefore we apply\n      // julia-repl highlighting to them. More information can be found in Documenter's\n      // manual: https://juliadocs.github.io/Documenter.jl/latest/man/doctests.html\n      aliases: ['jldoctest']\n      }\n    ]\n  }\n}\n\nmodule.exports = juliaRepl;\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/highlight.js/lib/languages/julia-repl.js?");

/***/ })

}]);