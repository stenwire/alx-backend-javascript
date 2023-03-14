import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() { return this._amount; }

  set amount(value) {
    if (typeof value === 'number') {
      this._amount = value;
    } else {
      throw TypeError('amount must be a number');
    }
  }

  get currency() { return this._currency; }

  set currency(obj) {
    if (obj instanceof Currency) {
      this._currency = obj;
    } else {
      throw TypeError('currency must be a Currency object');
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
