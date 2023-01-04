const createObject = (id, lastName, location) => {
  const obj = {};
  obj.id = id;
  obj.lastName = lastName;
  obj.location = location;
  return obj;
};

export default function getListStudents() {
  const objArr = [];
  const obj1 = createObject(1, 'Guillaume', 'San Francisco');
  const obj2 = createObject(2, 'James', 'Columbia');
  const obj3 = createObject(5, 'Serena', 'San Francisco');
  objArr.push(obj1, obj2, obj3);
  return objArr;
}
