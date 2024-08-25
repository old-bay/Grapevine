var score = 33; // score can be number or string
var Crab = { name: "oldbay", id: 123 };
Crab = { username: "oldbay", id: 123 };
function getDBID(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
// possible to have arrays of unions of types like this:
var data = [1, 2, 3, 4, "1234"];
// literal type assignments
var pi = 3.14;
// literal type assignment can be used with unions to restrict to specific labels
var seatAllotment;
