"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = ["ob", 0];
// touples force us to enter data in ordered pairs (or more)
var users = ["ob", 3, true];
// rgb example
var rgb = [255, 255, 255];
var newUser = [111, "crab@oldbay.moe", false];
// possible to make unholy pushes
newUser[1] = "ob.com";
newUser.push(true);
