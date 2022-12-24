export default function uploadPhoto(filename) {
  return new Promise((resolve) => {
    if (filename) {
      resolve(Error(filename));
    }
  }).then((message) => {
    console.log(`${message} cannot be processed`);
  });
}

// export default function uploadPhoto(filename) {
//   return new Promise((resolve, reject) => {
//     if (filename) {
//       reject(Error(filename));
//     } else {
//       resolve({
//         status: 200,
//         body: 'success',
//       });
//     }
//   }).then(() => {
//     console.log('Got a response from the API');
//   });
// }
