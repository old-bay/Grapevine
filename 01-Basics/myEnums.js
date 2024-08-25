// enumerates from 0 for first enumerator, can manualy assign, and assign out of order
// if strings, then all must get definitions
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
    SeatChoice[SeatChoice["EXTRA"] = 3] = "EXTRA"; // 3
})(SeatChoice || (SeatChoice = {}));
var Seats;
(function (Seats) {
    Seats["AISLE"] = "aisle";
    Seats["MIDDLE"] = "middle";
    Seats["WINDOW"] = "window";
    Seats[Seats["EXTRA"] = 0] = "EXTRA";
})(Seats || (Seats = {}));
var hcSeat = SeatChoice.AISLE;
