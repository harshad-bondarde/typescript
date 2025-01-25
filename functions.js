// function addTwo(num){
//     num.toUpperCase() //no error while compiling
//     return num+2
// }
// addTwo(2)
function addTwo(num) {
    // num.toUpperCase() //error while compiling
    return num + 2;
}
addTwo(2);
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    //in tbis function all 3 values shoud be passed
}
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    //here isPaid is false by default
    // no need to pass it while calling the function if we want
}
//BETTER WAY TO WRITE FUNCTION
console.log("part2");
function addThree(num) {
    return num + 3;
}
var getHello = function (s) {
    return "HELLO" + s;
};
var heros = ["thor", "ironman", "captain america"];
// const heros=[1,2,3]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return 1 this will give error
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
