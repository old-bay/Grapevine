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
var myValue = addTwo(5);
getUpper("old bay");
signUpUser("old bay", "old@bay,moe", false);
loginUser("o", "o@h.moe");
//function getValue(myVal: number) {
//    if(myVal > 5) {
//        return true;
//    }
//    return "200 OK";
//}
var getHello = function (s) {
    return "";
};
// const heroes = [1, 2, 3]
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (heroes) {
    return "hero is ".concat(heroes);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
