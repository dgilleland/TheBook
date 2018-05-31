(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{180:function(t,a,s){t.exports=s.p+"assets/img/J-Fraction.47a0538a.png"},334:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"fraction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fraction","aria-hidden":"true"}},[t._v("#")]),t._v(" Fraction")]),n("p",[t._v("The fraction example is now enhanced to simplify the fractional value by finding the greatest common denominator of the fraction’s numerator and denominator.")]),n("p",[t._v("The Fraction class represents a fraction as two integers: one for the numerator and one for the denominator. When a Fraction object is created, the class must now simplify the fractional values by calculating the greatest common denominator.")]),n("ul",[n("li",[t._v("GreatestCommonDenominator() – This private method is used by the Simplify() method to get the greatest common denominator for the numerator and denominator. Remember to allow for dealing with negative fractions (in which case, the negative sign will be on the numerator). This example uses a while statement (though it is possible to re-work the logic to use a do-while statement).")])]),n("p",[n("img",{attrs:{src:s(180),alt:""}})]),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("GreatestCommonDenominator")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" commonDenominator "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" count "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" halfWay"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" absoluteNumerator "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Math"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Abs")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Numerator"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("absoluteNumerator "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Denominator"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            halfWay "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" absoluteNumerator "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            halfWay "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Denominator "),n("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("2")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count "),n("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" halfWay"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("absoluteNumerator "),n("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" count "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" \n                Denominator "),n("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" count "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                commonDenominator "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" count"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            count"),n("span",{attrs:{class:"token operator"}},[t._v("++")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" commonDenominator"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],o=s(0),e=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);a.default=e.exports}}]);