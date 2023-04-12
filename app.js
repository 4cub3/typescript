// const person: {
//    //object type (expliciting)
//     name: string;
//     age: number;
// } = {
//     name: 'John',
//     age: 34,   
// }
// const person:{
//     name: string;
//     age: number;
//     hobbies: string[]; //string array
//     role: [number,string]; // tuple only having two values
// } = {
//     name: 'John',
//     age: 34,
//     hobbies : ['gaming','singing'],
//     role : [1,'author'],
// }
//enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'John',
    age: 34,
    hobbies: ['gaming', 'singing'],
    role: Role.ADMIN,
};
// person.role.push('Rexxie') // tuple allows pushing
// person.role[1] = 10  // u cant change a value of a tuple with a different datatype that is not assinged in the explicit inference of datatype
// person.role = [0,'father','user'] // u cant reassign a tuple to more than it required of explicit assigned length
var favouriteActivities; // explicit assign of datatype of string array 
favouriteActivities = ['balling', 'spending'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('true');
}
