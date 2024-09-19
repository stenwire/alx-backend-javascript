function getPaymentTokenFromAPI(success) {
	return new Promise(function (resolve, reject) {
		if (success)
			resolve({data: 'Successful response from the API' })
	})
}

module.exports = getPaymentTokenFromAPI;
