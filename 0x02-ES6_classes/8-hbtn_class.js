export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return this.location;
    }
    if (hint === 'number') {
      return this.size;
    }
    return undefined;
  }

  get size() { return this._size; }

  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    } else {
      throw TypeError('Code must be number');
    }
  }

  get location() { return this._location; }

  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    } else {
      throw TypeError('Name must be string');
    }
  }
}
