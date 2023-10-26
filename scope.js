/* variable with a car model Lexus is a global scope
    while the variable with a car model is a Range Rover Sport */

let car = "Lexus;
function buy() {
  let car = "Range Rover Sport";
  console.log("I own the " + car + " now");
}
buy();
console.log("I still own the " + car " now");
