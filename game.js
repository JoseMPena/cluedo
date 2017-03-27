/**
 * Created by josempena on 11/02/17.
 */
const Room = require('./room.js');
const Suspect = require('./suspect.js');
const Weapon = require('./weapon.js');

let cardStacks = [];
let characters = [];
let desc1 = "His color is green. He has a lot of connections and is always willing to help people out -- for a price.";
let desc2 = "Her color is white. She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning";
let desc3 = "His color is purple. He is a billionaire video game designer who is embracing his new popularity.";
let desc4 = "Her color is red. She is an A-list movie star whose past haunts her.";
let desc5 = "Her color is blue. She is from a wealthy family and uses her status and money to earn popularity.";
let desc6 = "His color is yellow. He is a former football player who tries to get by on his former glory.";
characters.push(Suspect('Jacob Green', 'something', 22, desc1));
characters.push(Suspect('Doctor Orchid', 'biologist', 30, desc2));
characters.push(Suspect('Victor Plum', 'video game designer', 27, desc3));
characters.push(Suspect('Kassandra Scarlet', 'movie star', 50, desc4));
characters.push(Suspect('Eleanor Peacock', 'wealthy', 40, desc5));
characters.push(Suspect('Jack Mustard', 'football player', 38, desc6));
let rooms = [
    'Dining room',
    'Conservatory',
    'Kitchen',
    'Study',
    'Library',
    'Billiard room',
    'Lounge',
    'Ballroom',
    'Hall',
    'Spa',
    'Living room',
    'Observatory',
    'Theater',
    'Guest house',
    'Patio'
];
let weapons = ['Rope', 'Knife', 'Candlestick', 'Dumbbell', 'Poison', 'Axe', 'Bat', 'Trophy', 'Pistol'];

for (let i in weapons){
    if(weapons.hasOwnProperty(i)){
        weapons[i] = new Weapon(weapons[i]);
    }
}
rooms.forEach(function(i, room){
    rooms[i] = new Room(room);
});

cardStacks = [weapons, characters, rooms];

function pickARandom(cardStack){
    let random = Math.floor(Math.random() * (cardStack.length - 1));
    return cardStack[random - 1];
}
let caseFileConfidential = [pickARandom(characters), pickARandom(rooms), pickARandom(weapons)];
let hand = [pickARandom(characters), pickARandom(rooms), pickARandom(weapons)];

if (caseFileConfidential === hand){
    console.log("You have won!\n");
} else {
    console.log("Sorry, you had no luck this time...");
}
console.log("The murder was conducted by " + hand[0].fullName + " on the " + hand[1].name+" with a " + hand[2].name)

