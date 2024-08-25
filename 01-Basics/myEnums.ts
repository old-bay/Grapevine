// enumerates from 0 for first enumerator, can manualy assign, and assign out of order
// if strings, then all must get definitions
enum SeatChoice {
    AISLE, // 0 \
    MIDDLE, // 1
    WINDOW, // 2
    EXTRA // 3
}

enum Seats {
    AISLE = "aisle",
    MIDDLE = "middle",
    WINDOW = "window",
    EXTRA = 0
}

const hcSeat = SeatChoice.AISLE;