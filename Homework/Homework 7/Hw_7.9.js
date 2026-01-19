class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const cinderellas =[
    new Cinderella('Kristina', 19, 34),
    new Cinderella('Katya', 18, 35),
    new Cinderella('Angelina', 20, 36),
    new Cinderella('Natasha', 19, 37),
    new Cinderella('Anastasia', 21, 38),
    new Cinderella('Karina', 23, 39),
    new Cinderella('Olya', 19, 37.5),
    new Cinderella('Ira', 18, 34.5),
    new Cinderella('Alina', 18, 36.5),
    new Cinderella('Kristina', 21, 38.5)
]
const prince = new Prince('Artem', 20, 36);

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
cinderellas.myForEach(cinderella => {
    if (cinderella.footSize === prince.slipper) {
        prince.wife = cinderella;
    }
});
console.log(prince);
Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
const res = cinderellas.myFilter(
    cinderella => cinderella.footSize === prince.slipper
);

prince.wife = res[0];
console.log(prince);
