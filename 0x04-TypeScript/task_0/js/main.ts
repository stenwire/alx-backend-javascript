interface Student {
	firstName: string
  lastName: string
  age: number
  location: string
}

const s1: Student = {
  firstName: 'John',
  lastName: 'Lawal',
  age: 40,
  location: 'Abuja'
}

const s2: Student = {
  firstName: 'Brad',
  lastName: 'Stone',
  age: 39,
  location: 'San Francisco',
}

const studentList: Student[] = [s1, s2]
//type Table = Document.
function generateTableHead(table: any, data: Student): void {
  
  let thead = table.createTHead();
  let row = thead.insertRow();
  let th1 = document.createElement('th');
  let text1 = document.createTextNode('firstName');
  let th2 = document.createElement('th');
  let text2 = document.createTextNode('location');
  th1.appendChild(text1);
  row.appendChild(th1);
  th2.appendChild(text2);
  row.appendChild(th2);
}

function generateTable(table: any, data: Student[]): void {
  for (let element of data) {
    let row = table.insertRow();
    for (let key in element) {
      if (key === 'firstName' || key === 'location') {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
      }
    }
  }
}

let body = document.querySelector('body');
let tab = document.createElement('table');
body.appendChild(tab);
let table = document.querySelector("table");
console.log(table)
let data: Student = studentList[0];
generateTableHead(table, data);
generateTable(table, studentList);