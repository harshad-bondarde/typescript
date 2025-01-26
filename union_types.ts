let score:number | string =33

score="hard"

type Admin={
    username:string,
    id:number
}

type User={
    name:string,
    id:number
}

let hitesh :User | Admin={name:"hitesh",id:2}


function getDBId(id:number | string){
    // id.toLowerCase() // this gives error bcz data type is number | string
    if(typeof id === "string"){
        console.log(id.toLowerCase()) //now this is 100 % string so it wont give any error
    }
}

const data3:(string | number)[]=[1,"2"]


let pi:3.14=3.14 //this should only have this type of value 
// pi=2 error