import Car from './10-car.js';

const _range = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  get range() {
    return this[_range];
  }

  cloneCar() {
    // Create a new Car instance with the current attributes
    // Set the attributes explicitly to undefined for the Car instance
    const clonedCar = new Car();
    clonedCar._brand = undefined;
    clonedCar._motor = undefined;
    clonedCar._color = undefined;
    return clonedCar;
  }
}

