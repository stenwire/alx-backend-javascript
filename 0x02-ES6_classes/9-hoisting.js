export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }

  set year(val) {
    if (typeof val === 'number') {
      this._year = val;
    } else {
      throw TypeError('year is not a number');
    }
  }

  get year() {
    return this._year;
  }

  set location(val) {
    if (typeof val === 'string') {
      this._location = val;
    } else {
      throw TypeError('year is not a string');
    }
  }

  get location() {
    return this._location;
  }
}

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  set firstName(val) {
    if (typeof val === 'string') {
      this._firstName = val;
    } else {
      throw TypeError('firstName is not a string');
    }
  }

  set lastName(val) {
    if (typeof val === 'string') {
      this._lastName = val;
    } else {
      throw TypeError('lastName is not a string');
    }
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this._holbertonClass;
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`;
  }
}

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');
const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
