var a = new XMLHttpRequest();

a.addEventListener('readystatechange', function(r) {
	if (r.target.status === 200) {
		console.log(r.target.response)
	}
})

a.open('GET', 'https://api.github.com/users/shriya', true)

a.send();
