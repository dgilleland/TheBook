(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{219:function(t,s,a){t.exports=a.p+"assets/img/G-Person.54e3eb96.png"},333:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"person"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#person","aria-hidden":"true"}},[t._v("#")]),t._v(" Person")]),n("p",[t._v("First and last names cannot be empty and the birth date cannot be in the future. This illustrates putting the validation on the setters and calling the setters from the constructor (to reduce the duplication of code).")]),n("p",[t._v("This adaptation of the person class includes a check of the age of the person to see if the person's life stage is infant, toddler, preschooler, school age, or adult.")]),n("p",[n("strong",[t._v("Problem Statement")])]),n("p",[t._v("Write the code that will represent a person with a first and last name and a date of birth. The solution must meet the following requirements (new requirements are in "),n("strong",[t._v("bold")]),t._v("):")]),n("ul",[n("li",[t._v("Should get and set the first and last name")]),n("li",[t._v("Should get the birth date")]),n("li",[t._v("Should get the person's approximate age (which is the age that the person will turn to in the current year)")]),n("li",[t._v("Should override toString() to get the person's full name (as first name then last name)")]),n("li",[t._v("Should get the life stage, based on the following table")])]),n("table",[n("thead",[n("tr",[n("th",[t._v("Age Range (Years)")]),n("th",[t._v("Life Stage")])])]),n("tbody",[n("tr",[n("td",[t._v("0")]),n("td",[t._v("Infant")])]),n("tr",[n("td",[t._v("< 3")]),n("td",[t._v("Toddler")])]),n("tr",[n("td",[t._v("< 5")]),n("td",[t._v("Preschooler")])]),n("tr",[n("td",[t._v("< 18")]),n("td",[t._v("School age")])]),n("tr",[n("td",[t._v(">= 18")]),n("td",[t._v("Adult")])])])]),n("ul",[n("li",[n("strong",[t._v("Should ensure the first and last names are not empty (or null)")])]),n("li",[n("strong",[t._v("Should trim leading and trailing spaces from the first and last names")])]),n("li",[n("strong",[t._v("Should reject birthdates that are in the future")])])]),n("p",[t._v("Use the following class diagram when creating your solution.")]),n("p",[n("img",{attrs:{src:a(219),alt:""}})]),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" _FirstName"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" FirstName\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _FirstName"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("value")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("value")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Trim")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"FirstName cannot be empty"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _FirstName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("value")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Trim")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" _LastName"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" LastName\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("get")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _LastName"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("set")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("value")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("IsNullOrEmpty")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("value")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Trim")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"LastName cannot be empty"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            _LastName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("value")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Trim")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Person")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" firstName"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" lastName"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" birthDate"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("birthDate"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("CompareTo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DateTime"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Today"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("System"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Exception")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"Birthdates in the future are not allowed"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        FirstName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" firstName"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        LastName "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lastName"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        BirthDate "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" birthDate"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],e=a(0),o=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);s.default=o.exports}}]);