const express = require('express');

app = express();

app.get('/', function(req, res) {
	res.send('Welcome to the payment system')
});

app.get(/cart\/(\d+)/, function(req, res) {
	res.send(`Payment methods for cart ${req.params['0']}`)
});

app.listen(7865, () => {
	console.log('API available on localhost port 7865');
})
