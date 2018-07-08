(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{241:function(t,s,a){t.exports=a.p+"assets/img/F-Person.3cb0e9fb.png"},376:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"person"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#person","aria-hidden":"true"}},[t._v("#")]),t._v(" Person")]),n("p",[t._v("This adaptation of the person class checks the age of the person to see if the person's life stage is infant, toddler, preschooler, school age, or adult.")]),n("p",[n("strong",[t._v("Problem Statement")])]),n("p",[t._v("Write the code that will represent a person with a first and last name and a date of birth. The solution must meet the following requirements (new requirements are in bold):")]),n("ul",[n("li",[t._v("Should get and set the first and last name")]),n("li",[t._v("Should get the birth date")]),n("li",[t._v("Should get the person’s approximate age (which is the age that the person will turn to in the current year)")]),n("li",[t._v("Should override ToString() to get the person’s full name (as first name then last name)")]),n("li",[n("strong",[t._v("Should get the life stage, based on the following table")])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("Age Range (Years)")]),n("th",[t._v("Life Stage")])])]),n("tbody",[n("tr",[n("td",[t._v("0")]),n("td",[t._v("Infant")])]),n("tr",[n("td",[t._v("< 3")]),n("td",[t._v("Toddler")])]),n("tr",[n("td",[t._v("< 5")]),n("td",[t._v("Preschooler")])]),n("tr",[n("td",[t._v("< 18")]),n("td",[t._v("School age")])]),n("tr",[n("td",[t._v(">= 18")]),n("td",[t._v("Adult")])])])]),n("p",[t._v("Use the following class diagram when creating your solution.")]),n("p",[n("img",{attrs:{src:a(241),alt:""}})]),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("  "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" LifeStage\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" stage"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Age "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          stage "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"infant"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Age "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("3")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          stage "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"toddler"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Age "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          stage "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"preschooler"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Age "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("18")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n          stage "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"school age"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n          stage "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"adult"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" stage"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],e=a(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=r.exports}}]);