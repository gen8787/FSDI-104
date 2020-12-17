// S A L O N   I N F O
var salon = {
    name: "The Fashion Pet",
    address: {
        street: "845 Las Vegas Blvd",
        city: "Las Vegas",
        state: "NV",
        zip: "89119"
    },
    hours: {
        open: "9:00 AM",
        close: "5:00 PM"
    },
    pets: []
};

// D E S T R U C T U R E
var {name, address: {street, city, state, zip}, hours: {open, close}, pets} = salon;


// P E T   C L A S S 
class Pet {
    constructor(name, age, gender, breed, service, owner, phone, email) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.owner = owner;
        this.phone = phone;
        this.email = email;
    }
}


// P E T S
var scooby = new Pet("Scooby", 50, "Male", "Dane", "Full Service", "Shaggy", "555-555-1212");
pets.push(scooby);

var honey = new Pet("Honey", 3, "Female", "Boxer", "Wash", "Mom", "777-333-5432");
pets.push(honey);

var yogi = new Pet("Yogi", 10, "Male", "Mutt", "Groom", "Eddie", "999-867-5309");
pets.push(yogi);


// R E G I S T E R   A   P E T
function register() {
    var inputName = document.getElementById("petName").value;
    var inputAge = document.getElementById("petAge").value;
    var inputGender = document.getElementById("petGender").value;
    var inputBreed = document.getElementById("petBreed").value;
    var inputService = document.getElementById("petService").value;
    var inputOwner = document.getElementById("petOwner").value;
    var inputPhone = document.getElementById("petPhone").value;
    var inputEmail = document.getElementById("petEmail").value;

    var newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputService, inputOwner, inputPhone, inputEmail);

    pets.push(newPet);
    console.log(newPet);
    console.log(pets);

    totalNumPets();
    oldestPet();
    youngestPet();
    petNames();
};


// #   O F   P E T S   R E G I S T E R E D
function totalNumPets() {
    var totalNumPets = pets.length;
    document.getElementById("number-pets").innerHTML=`
    <p>
        Total Pets Registered: <b>${totalNumPets}</b>
    </p>`;
}
totalNumPets();


// P E T   N A M E S
function petNames() {
    var reset = document.getElementById("pets");
    reset.innerHTML="";

    for (var i = 0; i < pets.length; i ++) {
        var petName = document.createElement("li");
        petName.innerText = pets[i].name;
        document.getElementById("pets").appendChild(petName);
    };
}
petNames();


// O L D E S T   &   Y O U N G E S T
function oldestPet() {
    var oldestPet = Math.max(...pets.map(age => age.age));
    document.getElementById("oldest-pet").innerHTML=`
    <p>
        Oldest Pet: <b>${oldestPet}</b>
    </p>`;
};
oldestPet();

function youngestPet() {
    var youngestPet = Math.min(...pets.map(age => age.age));
    document.getElementById("youngest-pet").innerHTML=`
    <p>
        Youngest Pet: <b>${youngestPet}</b>
    </p>`;
};
youngestPet();


// F O O T E R   I N F O
document.getElementById('footer-info').innerHTML=`
    <p>
        Hours: <br>
        ${open} - ${close}, Monday to Friday <br>
        <br>
        Address: <br>
        ${street} <br>
        ${city} ${state}, ${zip}
    </p>`;
