export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    const proto = Object.getPrototypeOf(this);
    const superProto = MyInterface.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find((name) => typeof superProto[name] === 'function' && !proto.hasOwnProperty(name));
    if (missing) throw new TypeError(`${this.constructor.name} needs to implement ${missing}`);
  }

  get sqft() { return this._sqft; }

  set sqft(value) { this._sqft = value; }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
