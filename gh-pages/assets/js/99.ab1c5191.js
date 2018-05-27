(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{157:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"lettergrade-quebeclettergrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lettergrade-quebeclettergrade","aria-hidden":"true"}},[t._v("#")]),t._v(" LetterGrade + QuebecLetterGrade")]),a("p",[t._v("The QuebecLetterGrade uses the simple LetterGrade enumeration and assigns specific ranges of percentage marks for the possible LetterGrade values.")]),a("p",[a("strong",[t._v("Problem Statement")])]),a("p",[t._v("Write the code for the LetterGrade class that represents a letter grade as assigned in Quebec universities (Source: http://en.wikipedia.org/wiki/Letter_grade). The solution must meet the following requirements (new requirements are in "),a("strong",[t._v("bold")]),t._v("):")]),a("ul",[a("li",[a("strong",[t._v("Should get and set the grade as a type-safe value")])]),a("li",[t._v("Should get the appropriate descriptions for the grade, based on the following table:")])]),a("p",[t._v("Grade | Description\nA     | A - 80-100% - Greatly Above Standards\nB     | B - 70-79% - Above Standards\nC     | C - 60-69% - At Government Standards\nD     | D - 50-60% - Lower Standards\nF     | F - 0-49% - Failure")]),a("p",[t._v("Use the following class diagram when creating your solution.")]),a("p",[a("img",{attrs:{src:"I-QuebecLetterGrade.png",alt:""}})]),a("p",[a("img",{attrs:{src:"I-LetterGrade.png",alt:""}})]),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" LetterGrade\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    A"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" B"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" C"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" D"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" F\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("QuebecLetterGrade")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LetterGrade")]),t._v(" Grade "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("QuebecLetterGrade")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("LetterGrade")]),t._v(" grade"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Grade "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" grade"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ToString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" description"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Grade"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" LetterGrade"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("A"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                description "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"A - 80-100% - Greatly Above Standards"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" LetterGrade"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("B"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                description "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"B - 70-79% - Above Standards"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" LetterGrade"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("C"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                description "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"C - 60-69% - At Government Standards"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" LetterGrade"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("D"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                description "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"D - 50-60% - Lower Standards"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("case")]),t._v(" LetterGrade"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("F"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                description "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"F - 0-49% - Failure"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                description "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Invalid Letter Grade"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("break")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" description"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);