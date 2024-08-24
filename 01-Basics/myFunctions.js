"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, ispaid) {
}
var loginUser = function (name, email, isPaid) {
    if (name === void 0) { name = "Old Bay"; }
    if (email === void 0) { email = "crab@oldbay.moe"; }
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("old bay");
signUpUser("old bay", "old@bay,moe", false);
loginUser("o", "o@h.moe");
