// abstract classes are classes meant to be extended, and can't have object instantiations
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    // abstract methods are methods whose definitions will only come about in extended classes
    abstract getFilter(): void;
    getReelTime(): number {
        return 5;
    }
}

class Insta extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter);
    }

    getFilter(): string {
        return this.filter;
    }
}
// const hc = new TakePhoto("test", "Test");
const hc = new Insta("test", "Test", 8);