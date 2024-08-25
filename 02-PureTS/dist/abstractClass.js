"use strict";
// abstract classes are classes meant to be extended, and can't have object instantiations
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 5;
    }
}
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getFilter() {
        return this.filter;
    }
}
// const hc = new TakePhoto("test", "Test");
const hc = new Insta("test", "Test", 8);
