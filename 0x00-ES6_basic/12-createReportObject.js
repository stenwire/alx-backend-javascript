// import createEmployeesObject from './11-createEmployeesObject';

export default function createReportObject(employeesList) {
    allEmployees() {
      const res = {};
      res.allEmployees = [...employeesList];
      return res;
    }
    getNumberOfDepartments() {
      return employeesList.length;
    }

  return rep;
}

// const getNumberOfDepartments = () => {
//   console.log();
// };
// const rep = {
//   allEmployees() {
//     const res = {};
//     return res.allEmployees = createEmployeesObject(employeesList);
//   },
//   getNumberOfDepartments() {
//     console.log(2);
//   }
// }
