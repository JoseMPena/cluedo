/**
 * Created by josempena on 11/02/17.
 */
require('room.js');
require('suspect.js');
require('weapon.js');

var desc1 = "His color is green. He has a lot of connections and is always willing to help people out -- for a price.";
var desc2 = "Her color is white. She is the adopted daugther of Mr. Boddy, a biologist with a PhD in plant toxicology. She was privately educated in Switzerland until her expulsion after an incident involving daffodils resulted in a near-fatal poisoning";
var desc3 = "His color is purple. He is a billionaire video game designer who is embracing his new popularity.";
var desc4 = "Her color is red. She is an A-list movie star whose past haunts her.";
var desc5 = "Her color is blue. She is from a wealthy family and uses her status and money to earn popularity.";
var desc6 = "His color is yellow. He is a former football player who tries to get by on his former glory.";
var JacobGreen = new Suspect('Jacob', 'Green', 'something', 22, desc1);
var DoctorOrchid = new Suspect('Doctor', 'Orchid', 'biologist', 30, desc2);
var VictorPlum = new Suspect('Victor', 'Plum', 'video game designer', 27, desc3);
var KassandraScarlet = new Suspect('Kassandra', 'Scarlet', 'movie star', 50, desc4);
var EleanorPeacock = new Suspect('Eleanor', 'Peacock', 'wealthy', 40, desc5);
var JackMustard = new Suspect('Jack', 'Mustard', 'football player', 38, desc6);

var weapons = ['Rope', 'Knife', 'Candlestick', 'Dumbbell', 'Poison', 'Axe', 'Bat', 'Trophy', 'Pistol'];
for (var i in weapons){
    if(weapons.hasOwnProperty(i)){
        weapons[i] = new Weapon(weapons[i]);
    }
}

var rooms = ['Dining room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard room' Lounge
    Ballroom
    Hall
    A spa
    Living room
    Observatory
    Theater
    Guest house
    A patio];