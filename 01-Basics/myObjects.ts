const User = {
    name: "Old Bay",
    email: "crab@oldbay.moe",
    isActive: true;
}

function createUser({name: string, isPaid: boolean}) {}
createUser({name: "Old Bay", isPaid: false});

function createCourse(): {name: string, price: number} {
    return {name: "Old Bay", price: 3}
}

export {}