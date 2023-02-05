import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, Currency) {
    this._amount = amount;
    this._Currency = Currency;
  }

  get amount() {
    return this._amount;
  }

  get Currency() {
    return this._Currency;
  }

  set amount(amount) {
    this._amount = amount;
  }

  set Currency(Currency) {
    this._Currency = Currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.Currency._name} (${this.Currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}