// class User {
//     private email: string;
//     private name: string;
//     public city?: string; // public keyword makes variable accessible, it's automatc as opposed to private
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }

class User {

    protected sub: boolean = false;
    private _cCount: number = 0;
    public city?: string = ""; // public keyword makes variable accessible, it's automatc as opposed to private
    constructor(private email: string, private name: string) {}


    // methods can be private, then they can only be called by the class itself or the methods within
    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get cCount(): number {
        return this._cCount;
    }

    set cCount(count) {
        this._cCount = count;
    }

}

// private properties cannot be inherited by class extentions, they must be protected for inheritance
class SubUser extends User {
    protected sub: boolean = true;
}

const crab = new User("crab@oldbay.moe", "crab");
crab.city = "oldbay";

export {}