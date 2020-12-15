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
    pets:[
        {
            name: "Doggo",
            age: 4,
            gender: "Male",
            breed: "Big Dog",
            service: "Wash",
            owner: "Guy",
            contactPh: "555-444-5432"
        },
        {
            name: "Meow meow",
            age: 9,
            gender: "Female",
            breed: "Cat",
            service: "Groom",
            owner: "Single Gal",
            contactPh: "654-455-1111"
        },
        {
            name: "Tweety",
            age: 7,
            gender: "Female",
            breed: "Bird",
            service: "Full",
            owner: "Bunny",
            contactPh: "111-867-5309"
        }
    ]
};


// #   O F   P E T S   R E G I S T E R E D
totalNumPets = salon.pets.length;
document.getElementById("number-pets").innerHTML=`
    <p>
        Total Pets Registered: <b>${totalNumPets}</b>
    </p>`;


// P E T   N A M E S
for (var i = 0; i < salon.pets.length; i ++) {
    var petName = document.createElement("li");
    petName.innerText = salon.pets[i].name;
    document.getElementById("pets").appendChild(petName);
};


// F O O T E R   I N F O
var {name, address: {street, city, state, zip}, hours: {open, close}} = salon;

document.getElementById('footer-info').innerHTML=`
    <p>
        Hours: <br>
        ${open} - ${close}, Monday to Friday <br>
        <br>
        Address: <br>
        ${street} <br>
        ${city} ${state}, ${zip}
    </p>`;

    document.getElementById('footer-infoo').innerHTML=`
    <p>
        Hours: <br>
        ${open} - ${close}, Monday to Friday <br>
        <br>
        Address: <br>
        ${street} <br>
        ${city} ${state}, ${zip}
    </p>`;