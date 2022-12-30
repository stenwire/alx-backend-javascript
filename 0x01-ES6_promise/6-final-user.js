import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const resDict = {};
  const resList = [];
  // signUpUser.then((response) => {
  //   resDict.status = response.status;
  //   resDict.value = response.value;
  // });
  // signUpUser.then((response) => {
  //   resDict.status = response.status;
  //   resDict.value = response.value;
  // });
  // if (signUpUser(firstName, lastName)) {
  //   console.log(resList.push(resDict));
  // }
  console.log(uploadPhoto(fileName));
  console.log(signUpUser(firstName, lastName));
}
