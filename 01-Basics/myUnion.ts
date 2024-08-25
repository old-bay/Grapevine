let score: number | string = 33 // score can be number or string

// union type can include user defined types as well
type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let Crab: User | Admin = {name: "oldbay", id: 123}
Crab = {username: "oldbay", id: 123}

function getDBID(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase();
    } else {
        id + 2;
    }
}

// possible to have arrays of unions of types like this:
const data: (number | string)[] = [1, 2, 3, 4, "1234"];

// literal type assignments
let pi: 3.14 = 3.14;

// literal type assignment can be used with unions to restrict to specific labels
let seatAllotment: "aisle" | "middle" | "window"