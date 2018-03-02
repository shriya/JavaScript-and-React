fetch('https://api.github.com/users/shriya')
	.then(function(r) {
		console.log(r.status)
		return r.json()
	})
	.then(function(j) {
		console.log(j)
	})
