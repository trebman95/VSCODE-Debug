/*

Fix the `feedPet` function. `feedPet` should take in a pet name and return a
function that, when invoked with a food, will return the pet's name and a list
of foods that you have fed that pet.


*/

// function feedPet(name) {
//   const foods = [];
//   return (food) => {
//     return "Fed " + name + " " + foods.push(food) + ".";
//   }
// }

// const feedHydra = feedPet('Hydra');
// debugger
// console.log(feedHydra('bones')); // Fed Hyrda bones.
// console.log(feedHydra('Hercules')); // Fed Hyrda bones, Hercules.

// const feedHippogriff = feedPet('Hippogriff');


// console.log(feedHippogriff('worms')); // Fed Hippogriff worms.
// console.log(feedHippogriff('crickets')); // Fed Hippogriff worms, crickets.
// console.log(feedHippogriff('chicken')); // Fed Hippogriff worms, crickets, chicken.


function feedPet(name) {
  const foods = [];
  return function feedHippogriff(food) {
    foods.push(food); // added
    return "Fed " + name + " " + foods.join(' ') + "."; // changed food.push to food.join
  }
}

const feedHydra = feedPet('Hydra');
debugger
console.log(feedHydra('bones')); // Fed Hyrda bones.
console.log(feedHydra('Hercules')); // Fed Hyrda bones, Hercules.

const feedHippogriff = feedPet('Hippogriff');


console.log(feedHippogriff('worms')); // Fed Hippogriff worms.
console.log(feedHippogriff('crickets')); // Fed Hippogriff worms, crickets.
console.log(feedHippogriff('chicken')); // Fed Hippogriff worms, crickets, chicken.
