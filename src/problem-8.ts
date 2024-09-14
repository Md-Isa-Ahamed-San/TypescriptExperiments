class Car {
  name: string;
  model: string;
  year: number;
  constructor(name: string, model: string, year: number) {
    this.name = name;
    this.model = model;
    this.year = year;
}
displayInfo(){

    return `{Your car model is: ${this.year} ${this.name} ${this.model}}`
}
}

const car = new Car("lamborghini","aventador",2013)
car.displayInfo()