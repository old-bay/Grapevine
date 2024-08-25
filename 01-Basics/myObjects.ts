
/*
const User = {
    name: "Old Bay",
    email: "crab@oldbay.moe",
    isActive: true;
}

//function createUser({name: string, isPaid: boolean}) {}
createUser({name: "Old Bay", isPaid: false});

function createCourse(): {name: string, price: number} {
    return {name: "Old Bay", price: 3}
}


type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return {name: "", email: "", isActive: false}
}

createUser({name: "", email: "", isActive: false});
*/

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}

myUser.email = "crab@oldbay.moe";

export {}