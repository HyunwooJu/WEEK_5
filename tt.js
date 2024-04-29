class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    drive() {
        console.log(`${this.brand} ${this.model} is driving.`);
    }
}

const myCar = new Car('Benz', 'G-Wagen');
myCar.drive();