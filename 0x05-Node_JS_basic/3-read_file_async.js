const fs = require('fs');
const readline = require('readline');

function countStudents(dbName) {
  return new Promise((res, rej) => {
    if (fs.existsSync(dbName)) {
      const stream = fs.createReadStream(dbName);
      const reader = readline.createInterface({ input: stream });

      const data = new Map();
      let numOfStudent = -1;

      reader.on('line', (row) => {
        numOfStudent += 1;
        if (numOfStudent > 0) {
          const rowData = row.split(',');
          if (!data.get(rowData[3])) {
            data.set(rowData[3], [rowData[0]]);
          } else {
            const curNames = data.get(rowData[3]);
            curNames.push(rowData[0]);
          }
        }
      });

      reader.on('close', () => {
        let result = `Number of students: ${numOfStudent}`;
        for (const corseAndNames of data.entries()) {
          const msg = `\nNumber of students in ${corseAndNames[0]}: ${corseAndNames[1].length}. List: ${corseAndNames[1].join(', ')}`;
          result += msg;
        }
        console.log(result);
        res(result);
      });
    } else {
      rej(Error('Cannot load the database'));
    }
  });
}

module.exports = countStudents;
