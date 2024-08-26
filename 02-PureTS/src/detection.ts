function detectType(val: number | string) {
    if (typeof val === "string") {
        val.toLocaleLowerCase();
    } else {
        return val + 3;
    }
}

function provideID(id: string | null) {
    if(!id) {
        console.log("Please provide ID.");
        return;
    } else {
        id.toLocaleLowerCase();
    }
}

// function to loop if array of strings to console
function printAll(strs: string | string[] | null): void {

    if(strs) {
        if(typeof strs == "object") {
            for(const s of strs) {
                console.log(s);
            }
        } else if(typeof strs === "string") {
            console.log(strs);
        } else {
            console.log("Provide that which is not null.")
        }
    }
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

// if x property exists in y object
function isAdmin(account: User | Admin): boolean {
    if("isAdmin" in account) {
        return account.isAdmin;
    } else {
        return false;
    }
}


function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}


type Fish = {swim: () => void};
type Bird = {fly: () => void};

// return whether or not fish method is undefined to test if fish
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        return "fish food";
    } else {
        pet
        return "bird food";
    } 
}

// roundabout to testing for types and interfaces without knowing their intrinsic properties
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape): number | never {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else if(shape.kind === "square") {
        return shape.side ** 2;
    } else if(shape.kind === "rectangle") {
        return shape.length * shape.width;
    } else {
        const _defaultforshape: never = shape;
        return _defaultforshape;
    }
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape;
        
    }
}