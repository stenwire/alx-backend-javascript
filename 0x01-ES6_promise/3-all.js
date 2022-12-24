import { createUser, uploadPhoto } from './utils';

const upload = uploadPhoto();
const create = createUser();

export default function handleresSignup() {
  const res = {};
  upload.then((response) => {
    res.photo = response.body;
  }).catch(() => {
    console.log('Signup system offline');
  });
  create.then((response) => {
    res.firstName = response.firstName;
    res.lastName = response.lastName;
    console.log(`${res.photo} ${res.firstName} ${res.lastName}`);
  }).catch(() => {
    console.log('Signup system offline');
  });
}
