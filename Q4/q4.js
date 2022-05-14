// please create An object with Animal name. this object should have some property such as getAge ,
// getHeight , getWeight, Then create Another Object with this properties age,height,weight,
// now with set proto try to call getAge , getHeight , getWeight with new object for example I created this object:
// rabbite = {
// weight:"5Kg",
// height:"30cm",
// age:2
// }
// We wants call rabbite.getAge How we can do that.

const animal = {
  getAge() {
    return this.age;
  },
  getWeight() {
    return this.weight;
  },
  getHeight() {
    return this.height;
  },
};

const rabbit = {
  weight: "5Kg",
  height: "30cm",
  age: 2,
  proto: animal,
};

console.log(rabbit.getWeight());
console.log(rabbit.getHeight());
