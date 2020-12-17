var pet = {
    name: "Honey",
    hunger: 20,
    happiness: 0,

    feed: function(food) {
        this.hunger -= food;
        this.happiness += 5;
    }
};

var meat = 10;
var carrot = 5;
var grass = 2;

var ball = 5;
var run = 10;

pet.feed(grass);


class PetC {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
        this.hunger = 10;
        this.happiness = 5;

        this.feedMe = function(food) {
            this.hunger -= food;
            this.happiness += 5;
        }
    }
    play(activity) {
        this.happiness += activity;
    }
}

var newPet;
function createPet() {
    var inputName = document.getElementById("petName").value;
    var inputGender = document.getElementById("petGender").value;

    newPet = new PetC(inputName, inputGender);
    console.log(newPet);
};