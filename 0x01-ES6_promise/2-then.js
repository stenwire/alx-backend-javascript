export default function handleResponseFromAPI(promise) {
  return new Promise((resolve) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    }
  }).then(() => {
    console.log('Got a response from the API');
  });
}
