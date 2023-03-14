export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const employee of Object.keys(report.allEmployees)) {
    for (const eachEmployee of report.allEmployees[employee]) {
      allEmployees.push(eachEmployee);
    }
  }
  return allEmployees;
}
