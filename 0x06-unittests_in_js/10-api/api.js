const { request } = require('express');
const express = require('express');

app = express();
app.use(express.json());

app.get('/', function(req, res) {
	res.send('Welcome to the payment system')
});

app.get(/cart\/(\d+)/, function(req, res) {
	res.send(`Payment methods for cart ${req.params['0']}`)
});

app.get('/available_payments', function(req, res) {
	const api = {
		payment_methods: {
		  credit_cards: true,
		  paypal: false
		}
	  }
	res.json(api);
});

app.post('/login', function(req, res) {
	const username = req.body['userName']
	res.send(`Welcome ${username}`)
});

app.listen(7865, () => {
	console.log('API available on localhost port 7865');
})
