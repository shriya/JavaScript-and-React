fetch('https://api.github.com/users/shriya')
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
    document.getElementById('username').innerText = j.login;
    document.getElementById('avatar').src = j.avatar_url;
    document.getElementById('realName').innerText = j.name;
    document.getElementById('location').innerText = j.location;
    document.getElementById('bio').innerText = j.bio;
    document.getElementById('numberOfFollowers').innerText = j.followers;
    return j.followers_url;
  }).then(function(k) {
  	fetch(k).then(function(l) {
  		for (var i = 0; i < l.length; i++) {
  			console.log("SHOULD BE IDs")
  			console.log(l[i].login)
  		}
  	})
  })
