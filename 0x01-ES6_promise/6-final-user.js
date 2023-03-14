import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const result = await Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);

  const newResult = [];
  for (const promise of result) {
    if (promise.status === 'fulfilled') {
      newResult.push(promise);
    } else {
      promise.value = `Error: ${promise.reason.message}`;
      delete promise.reason;
      newResult.push(promise);
    }
  }
  return newResult;
}
