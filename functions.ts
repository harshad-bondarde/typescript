// function addTwo(num){
//     num.toUpperCase() //no error while compiling
//     return num+2
// }
// addTwo(2)

function addTwo(num: number){
    // num.toUpperCase() //error while compiling
    return num+2
}
addTwo(2)

function getUpper(val :string){
    return val.toUpperCase()
}

function signUpUser(name:string , email:string , isPaid:boolean){
    //in tbis function all 3 values shoud be passed
}
function loginUser(name:string , email:string , isPaid:boolean=false){
    //here isPaid is false by default
    // no need to pass it while calling the function if we want
}


//BETTER WAY TO WRITE FUNCTION
console.log("part2")
function addThree(num:number):number{
    return num+3
}

const getHello=(s:string):string=>{
    return "HELLO"+s
}

const heros=["thor","ironman","captain america"]
// const heros=[1,2,3]

heros.map(( hero : string ) : string =>{
    return `hero is ${hero}`
})

function consoleError(errMsg:string):void{
    console.log(errMsg)
    // return 1 this will give error
}

function handleError(errMsg:string):never{
    throw new Error(errMsg)
}