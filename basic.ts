console.log("hi")

let userId:number=33.33 //no need to put colon here userId=33.33


// let hero; this is inferred as any datatype 
// function getHero(){
//     return true;
// }
// hero=getHero(); this totolly depends on the return type of the function so not a good practice

let hero:string ;

function getHero(){
    return ""
}
hero=getHero() //now no error is there


// any just removes the type checking for that variable