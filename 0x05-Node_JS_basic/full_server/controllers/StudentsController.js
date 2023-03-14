const process = require('process');
const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    let resData = 'This is the list of our students';
    readDatabase(process.argv[2]).then(
      (data) => {
        const keys = Object.keys(data).sort();
        for (const key of keys) {
          resData += `\nNumber of students in ${key}: 6. List: ${data[key].join(', ')}`;
        }
        response.status(200).send(resData);
      },
    ).catch((err) => {
      response.status(500).send(err.message);
    });
    return response;
  }

  static getAllStudentsByMajor(request, response) {
    const majorTypes = ['CS', 'SWE'];
    const { major } = request.params;
    if (majorTypes.includes(major)) {
      readDatabase(process.argv[2]).then(
        (data) => {
          const names = data[major].join(', ');
          response.status(200).send(`List: ${names}`);
        },
      ).catch((err) => {
        response.status(500).send(err.message);
      });
    } else {
      response.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
