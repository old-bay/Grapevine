function addTwo(num: number): number {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, ispaid: boolean) {

}

let loginUser = (name: string = "Old Bay", email: string = "crab@oldbay.moe", isPaid: boolean = false) => {}

let myValue = addTwo(5);
getUpper("old bay");
signUpUser("old bay", "old@bay,moe", false);
loginUser("o", "o@h.moe");

//function getValue(myVal: number) {
//    if(myVal > 5) {
//        return true;
//    }
//    return "200 OK";
//}

const getHello = (s: string): string => {
    return "";
}

// const heroes = [1, 2, 3]
const heroes = ["thor", "spiderman", "ironman"]
heroes.map(heroes => {
    return `hero is ${heroes}`;
})


function consoleError(errmsg: sting): void {
    console.log(errmsg);
}

function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {}