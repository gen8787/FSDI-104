var names = ["Doggo", "Meow Meow", "Hampster"];

// obj literal
var student = {
    name : "Gary",
    age : 30,
    job : true,
    music: ["electronic", "indie", "chillstep"],
    address: {
        street : "Del Rey Ave",
        number : "1234",
        geoLocation : {
            country : "USA",
            state : "NV"
        }
    }
};

// console.log(`\n Name: ${student.name} \n Age: ${student.age} \n Job: ${student.job}`);
// console.log(student.music[2]);

// console.log(student.address.geoLocation.country);

//obj destructuring
var studentCountry = student.address.geoLocation.country; //old
var {name, age, job, music, address:{street, number, geoLocation:{country, state}}} = student;
console.log(country);
