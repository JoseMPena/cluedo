/**
 * Created by josempena on 11/02/17.
 */

function Suspect (fullName, occupation, age, description) {
    this.fullName = fullName;
    this.occupation = occupation;
    this.age = age;
    this.description = description;
    return this;
}
module.exports.Suspect =  Suspect;