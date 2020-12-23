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
    pets: [],
    prices: {
        wash: 25,
        groom: 30,
        fullService: 50
    }
}

// D E S T R U C T U R E
var { name, address: { street, city, state, zip }, hours: { open, close }, pets, prices: { wash, groom, fullService } } = salon;


// C R E A T E   P E T S
function createPets() {
    var scooby = new Pet("Scooby", 50, "Male", "Dog", "Dane", "Full Service", "Shaggy", "555-555-1212", "email@email.com", 50);
    pets.push(scooby);

    var honey = new Pet("Honey", 3, "Female", "Dog", "Boxer", "Wash", "Mom", "777-333-5432", "email@email.com", 25);
    pets.push(honey);

    var yogi = new Pet("Yogi", 10, "Male", "Dog", "Mutt", "Groom", "Eddie", "999-867-5309", "email@email.com", 30);
    pets.push(yogi);

    var zoe = new Pet("Zoe", 7, "Female", "Cat", "Meow", "Groom", "Carrie", "999-867-5309", "email@email.com", 30);
    pets.push(zoe);

    var yogi = new Pet("Yogi", 10, "Male", "Dog", "Mutt", "Groom", "Eddie", "999-867-5309", "email@email.com", 30);
    pets.push(yogi);

    var yogi = new Pet("Yogi", 10, "Male", "Dog", "Mutt", "Groom", "Eddie", "999-867-5309", "email@email.com", 30);
    pets.push(yogi);

    var yogi = new Pet("Yogi", 10, "Male", "Dog", "Mutt", "Groom", "Eddie", "999-867-5309", "email@email.com", 30);
    pets.push(yogi);

    var yogi = new Pet("Yogi", 10, "Male", "Dog", "Mutt", "Groom", "Eddie", "999-867-5309", "email@email.com", 30);
    pets.push(yogi);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// R E G I S T E R   A   P E T
function register() {
    var inputName = document.getElementById("petName").value;
    var inputAge = document.getElementById("petAge").value;
    var inputGender = document.getElementById("petGender").value;
    var inputBreed = document.getElementById("petBreed").value;
    var inputType = document.getElementById("petType").value;
    var inputService = document.getElementById("petService").value;
    var inputOwner = document.getElementById("petOwner").value;
    var inputPhone = document.getElementById("petPhone").value;
    var inputEmail = document.getElementById("petEmail").value;

    var price;
    if (inputService === "Wash") {
        price = prices.wash;
    } else if (inputService === "Groom") {
        price = prices.groom;
    } else if (inputService === "Full") {
        price = prices.fullService;
    }

    var newPet = new Pet(inputName, inputAge, inputGender, inputBreed, inputType, inputService, inputOwner, inputPhone, inputEmail, price);

    pets.push(newPet);

    totalNumPets();
    oldestPet();
    youngestPet();
    displayPets();
    totalPrice();
}


// #   O F   P E T S   R E G I S T E R E D
function totalNumPets() {
    var totalNumPets = pets.length;
    document.getElementById("number-pets").innerHTML = `
    <p>
        Total Pets Registered: <b>${totalNumPets}</b>
    </p>`;
}
totalNumPets();


// O L D E S T
function oldestPet() {
    var oldestPet = Math.max(...pets.map(age => age.age));
    document.getElementById("oldest-pet").innerHTML = `
    <p>
    Oldest Pet: <b>${oldestPet}</b>
    </p>`;
}
oldestPet();


// Y O U N G E S T
function youngestPet() {
    var youngestPet = Math.min(...pets.map(age => age.age));
    document.getElementById("youngest-pet").innerHTML = `
    <p>
    Youngest Pet: <b>${youngestPet}</b>
    </p>`;
}
youngestPet();


// T O T A L   P R I C E
function totalPrice() {
    var totalPrice = 0;
    for (var i = 0; i < pets.length; i++) {
        totalPrice += pets[i].price;
    }

    document.getElementById("total-price").innerHTML = `
    <p>
    Total Cost: <b>$${totalPrice}.00
    </p>`;
}


// D I S P L A Y   P E T S
function displayPets() {
    var reset = document.getElementById("pets");
    reset.innerHTML = "";

    
    for (var i = 0; i < pets.length; i++) {
        
        var icon = '';
        if (pets[i].anType === "Dog") {
            icon = '<i class="fas fa-dog"></i>';
        }
        if (pets[i].anType === "Cat") {
            icon = '<i class="fas fa-cat"></i>';
        }

        var card = `
            <div class="card shadow m-3" style="width: 17rem;">
                <div class-"card-body">
                    <h5 class="card-title text-center py-3">
                        ${pets[i].name}
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>Service:</b> ${pets[i].service}</li>
                        <li class="list-group-item"><b>Price:</b> $${pets[i].price}.00</li>
                        <li class="list-group-item"><b>Owner:</b> ${pets[i].owner}</li>
                        <li class="list-group-item"><b>Phone:</b> ${pets[i].phone}</li>
                        <li class="list-group-item">${icon}</li>
                    </ul>
                    </div>
            </div>
        `

        var newCard = document.createElement("div");
        newCard.innerHTML = card;
        document.getElementById("pets").appendChild(newCard);
    };
}


// F O O T E R   I N F O
function displayOfficeInfo() {
    document.getElementById('footer-info').innerHTML = `
        <p>
            Hours: <br>
            ${open} - ${close}, Monday to Friday <br>
            <br>
            Address: <br>
            ${street} <br>
            ${city} ${state}, ${zip}
        </p>`;

}


// 105   N O T E S
// 
function init() {
    console.log("Document Ready");

    createPets();
    displayPets();
    totalPrice();
    displayOfficeInfo();
}

window.onload = init;