inteface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const s1: Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const s2: Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const studentsList: Student[] = [s1, s2]

// let myTable = [{s1.firstName, s1.location}, {s2.firstName, s2.location}]
// let myTableRow = {}

// for (const items of studentsList) {
//     myTableRow.push(items)
//     myTable.push(myTableRow)
// }
