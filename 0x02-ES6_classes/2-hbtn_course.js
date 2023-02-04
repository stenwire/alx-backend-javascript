export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() { return this._name; }

  get length() { return this._length; }

  get students() { return this._students; }

  set name(value) {
    try {
      if (typeof (value) === 'string') {
        this._name = value;
      }
    } catch (err) {
      console.log(err);
    }
  }

  set length(value) {
    if (typeof (value) === typeof ('number')) {
      this._length = value;
    }
  }

  set students(value) {
    if (typeof (value) === 'string') {
      this._students = value;
    }
  }
}
