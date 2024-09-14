"use strict";
class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        return `Your car model is: ${this.year} ${this.name} ${this.model}`;
    }
}
const car = new Car("lamborghini", "aventador", 2013);
console.log(car.displayInfo());
