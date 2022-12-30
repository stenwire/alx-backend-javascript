import fs from 'fs';

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(filename)) {
      resolve({
        status: 200,
        message: 'file found',
      });
    } else {
      reject(Error(`${filename} cannot be processed`));
    }
  });
}
