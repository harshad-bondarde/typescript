// BAD BEHAVIOUR OF THE OBJECTS


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




// type User={
//     name:string;
//     email:string;
//     isActive:boolean
// }

// function createUser2(user : User):User{
//     return {
//         name:"",
//         email:"",
//         isActive:true
//     }
// }

// createUser2({name:"",email:"",isActive:true})

//---------------------------------------------------------------------------------------------

// type User={
//     readonly _id:string , //mongodb generated id users can only read
//     name:string,
//     email:string
//     isActive:boolean
//     creditCardNumber?:number //means this data type is optional
// }

// let myUser:User={
//     _id:"123",
//     name:"h",
//     email:"h@h.com",
//     isActive:false
// }

// myUser.email="a@gmail.com"
// // myUser._id='12' //this will give error 

// type cardNumber={
//     cardNumber:string
// }

// type cardDate={
//     cardDate:string
// }

// type cardDetails= cardNumber & cardDate & {
//     cvv:number
// }



