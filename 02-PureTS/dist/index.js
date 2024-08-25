"use strict";
// class User {
//     private email: string;
//     private name: string;
//     public city?: string; // public keyword makes variable accessible, it's automatc as opposed to private
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.sub = false;
        this._cCount = 0;
        this.city = ""; // public keyword makes variable accessible, it's automatc as opposed to private
    }
    // methods can be private, then they can only be called by the class itself or the methods within
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get cCount() {
        return this._cCount;
    }
    set cCount(count) {
        this._cCount = count;
    }
}
// private properties cannot be inherited by class extentions, they must be protected for inheritance
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.sub = true;
    }
}
const crab = new User("crab@oldbay.moe", "crab");
crab.city = "oldbay";
