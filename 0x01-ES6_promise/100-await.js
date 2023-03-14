import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const errMessage = {
    photo: null,
    user: null,
  };

  return Promise.all([uploadPhoto(), createUser()]).then((result) => ({
    photo: result[0],
    user: result[1],
  })).catch(() => (errMessage));
}
