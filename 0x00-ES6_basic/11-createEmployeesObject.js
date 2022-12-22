export default function createEmployeesObject(departmentName, employees) {
  const res = {};
  res[departmentName] = employees;

  return res;
}
