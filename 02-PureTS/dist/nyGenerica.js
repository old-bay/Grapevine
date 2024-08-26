"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
let val = identityThree(3);
// simplified syntax
function identityFour(val) {
    return val;
}
// let value = identityFour({})
// example of array return generic
function getSearchProduct(products) {
    const myIndex = 3;
    return products[myIndex];
}
// example as an arrow function
const getMoreSearchProduct = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function aFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
