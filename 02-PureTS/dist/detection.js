"use strict";
function detectType(val) {
    if (typeof val === "string") {
        val.toLocaleLowerCase();
    }
    else {
        return val + 3;
    }
}
function provideID(id) {
    if (!id) {
        console.log("Please provide ID.");
        return;
    }
    else {
        id.toLocaleLowerCase();
    }
}
// function to loop if array of strings to console
function printAll(strs) {
    if (strs) {
        if (typeof strs == "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
        else {
            console.log("Provide that which is not null.");
        }
    }
}
// if x property exists in y object
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    else {
        return false;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// return whether or not fish method is undefined to test if fish
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.side ** 2;
    }
    else if (shape.kind === "rectangle") {
        return shape.length * shape.width;
    }
    else {
        const _defaultforshape = shape;
        return _defaultforshape;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
