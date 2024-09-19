const fs = require('fs');
const readline = require('readline');

function readDatabase(dbName) {
  return new Promise((res, rej) => {
    if (fs.existsSync(dbName)) {
      const stream = fs.createReadStream(dbName);
      const reader = readline.createInterface({ input: stream });

      const data = {};
      let numOfStudent = -1;

      reader.on('line', (row) => {
        numOfStudent += 1;
        if (numOfStudent > 0) {
          const rowData = row.split(',');
          if (!(data[rowData[3]])) {
            data[rowData[3]] = [rowData[0]];
          } else {
            const curNames = data[rowData[3]];
            curNames.push(rowData[0]);
          }
        }
      });

      reader.on('close', () => {
        res(data);
      });
    } else {
      rej(Error('Cannot load the database'));
    }
  });
}

module.exports = readDatabase;
