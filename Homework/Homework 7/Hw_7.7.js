//– (Те саме, тільки через клас)
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
// — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car{
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive (){
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} за годину`);
    };
    info (){
        for (const kay in this) {
            console.log(kay, this[kay]);}};
    increaseMaxSpeed (speedToAdd){
        if (speedToAdd > 0)
            this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    changeYear (year){
        if (year > 1815) this.year = year
    };
    addDriver (driver){
        if (driver) this.driver = driver;
    }
}
let car = new Car('370Z','Nissan', '2018', 290, 5);
console.log(car);
car.drive();
car.info();
car.changeYear(2021);
car.addDriver({});
car.increaseMaxSpeed(100);
console.log(car)
