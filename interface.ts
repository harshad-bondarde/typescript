interface User3 {
    readonly dbId:number
    email:string
    userId:number
    googleId?:string
    // startTrail():string
    startTrail:()=>string
    // getCoupon( coupounname : string, value : number):number{
        
    // }
    getCoupon:(coupouname:string,value:number)=>number
}

// const h:User3={
//     dbId:2,
//     email:"HI@gmai.com",
//     userId:3,
//     startTrail(){
//         return "start"
//     },
//     getCoupon(n:string,v:number){
//         return 9
//     }
// }

//Interfaces vs Types -------------------------------------------

interface User3{
    githubToken:string
}
const h:User3={
    dbId:2,
    email:"HI@gmai.com",
    userId:3,
    githubToken:"a",
    startTrail(){
        return "start"
    },
    getCoupon(n:string,v:number){
        return 9
    }
}

interface Admin extends User3{
    role:"admin" | "ta" | "learner" 
}

