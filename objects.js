// BAD BEHAVIOUR OF THE OBJECTS
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name:"hitesh",isPaid:true , email:"a@gmail.com"}) //this gives error
var newUser = { name: "hitesh", isPaid: true, email: "a@gmail.com" };
createUser(newUser); //this does not give error
function createCourse() {
    return {
        name: "react",
        price: 100
    };
}
var myUser = {
    _id: "123",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "a@gmail.com";
// myUser._id='12' //this will give error 
