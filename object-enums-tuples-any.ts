// const person: {
//    //object type (expliciting) 
//     name: string;
//     age: number;
// } = {
//     name: 'John',
//     age: 34,   
// }


//datatype tuple
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

// person.role.push('Rexxie') // tuple allows pushing
// person.role[1] = 10  // u cant change a value of a tuple with a different datatype that is not assinged in the explicit inference of datatype
// person.role = [0,'father','user'] // u cant reassign a tuple to more than it required of explicit assigned length



//datatype enums
enum Role { ADMIN, READ_ONLY, AUTHOR }
const person = {
    name: 'John',
    age: 34,
    hobbies: ['gaming', 'singing'],
    role: Role.ADMIN,
}


// let favouriteActivities: string[]; // explicit assign of datatype of string array 
// favouriteActivities = ['balling', 'spending']

//datatype any
let favouriteActivities: any; //this workd for any datatype, for array you add [] to the any i.e any[]
favouriteActivities = ['balling', 'spending']

console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {

    console.log('true')
}