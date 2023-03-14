export default class Currency {
  constructor(code, name) {
      this._code = code;
      this._name = name;
  }

  get code() {
      return this._code;
  }

  get name() {
      return this._name;
  }

  set code(value: string) {
      this._code = value;
  }

  set name(value: string) {
      this._name = value;
  }

  let displayFullCurrency = (name: string, code: string) => {
      return `${name} (${code})`
  }
}
