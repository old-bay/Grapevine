const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

let val: number = identityThree(3);

// simplified syntax
function identityFour<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

// let value = identityFour({})

// example of array return generic
function getSearchProduct<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

// example as an arrow function
const getMoreSearchProduct = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function aFunction<T, U extends Database>(val1: T, val2: U): obj {
    return {
        val1,
        val2
    }
}

// const values = aFunction(3, "4");
interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T> {
    public cart: T[] = [];
    addToCart(product: T) {
        this.cart.push(product);
    }
}

export {}