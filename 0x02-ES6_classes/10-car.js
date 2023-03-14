export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() { return this._brand; }

  set brand(value) {
    if (typeof value === 'string' || value === undefined) {
      this._brand = value;
    } else {
      throw TypeError('motor must be string');
    }
  }

  get motor() { return this._motor; }

  set motor(value) {
    if (typeof value === 'string' || value === undefined) {
      this._motor = value;
    } else {
      throw TypeError('motor must be string');
    }
  }

  get color() { return this._color; }

  set color(value) {
    if (typeof value === 'string' || value === undefined) {
      this._color = value;
    } else {
      throw TypeError('color must be string');
    }
  }

  cloneCar(...args) {
    const Species = new this.constructor(...args);
    return Species;
  }
}
