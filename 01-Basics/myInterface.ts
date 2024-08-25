interface User {
    readonly dbID: number,
    email: string,
    userID: number,
    googleID?: string,
    startTrial(): string;
    getCoupon(couponName: string, value: number): number;
}

//interfaces can have new additions
interface User {
    githubToken: string;
}

interface Admin extends User {
    role: "admin" | "ta" | "learner";
}

const crab: Admin = {dbID: 0, email: "crab@oldbay.moe", userID: 0, githubToken: "github", role: "admin",
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name: "crab", off: 10) => {
        return 10;
    }
}

export {}