// BAD BEHAVIOUR OF THE OBJECTS

const User={
    name:"hitesh",
    email:"hitesh@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){
    
}
// createUser({name:"hitesh",isPaid:true , email:"a@gmail.com"}) //this gives error
let newUser={name:"hitesh",isPaid:true , email:"a@gmail.com"};
createUser(newUser) //this does not give error

function createCourse():{name:string,price:number}{ //return type is object 
    
    return {
        name:"react",
        price:100
    }
}
