const user: (string | number | boolean)[] = ["ob", 0];

// touples force us to enter data in ordered pairs (or more)
const users: [string, number, boolean] = ["ob", 3, true];

// rgb example
let rgb: [number, number, number] = [255, 255, 255];

// can define type as touple
type tUser = [number, string, boolean]

const newUser: tUser = [111, "crab@oldbay.moe", false];

// possible to make unholy pushes
newUser[1] = "ob.com";
newUser.push(true);

export {}