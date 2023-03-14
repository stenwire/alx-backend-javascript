export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.evacuationWarningMessage() === -1 && this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() { return this._sqft; }

  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    } else {
      throw TypeError('sqft must be a number');
    }
  }

  evacuationWarningMessage() {
    if (this._sqft < 0) return -1;
    return -1;
  }
}
