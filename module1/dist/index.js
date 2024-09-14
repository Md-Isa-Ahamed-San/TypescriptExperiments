"use strict";
var num;
(function (num) {
    num[num["a"] = 0] = "a";
    num[num["b"] = 1] = "b";
    num[num["c"] = 2] = "c";
    num[num["d"] = 3] = "d";
})(num || (num = {}));
console.log(Object.keys(num).length);
