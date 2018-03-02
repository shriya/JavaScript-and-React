// with querySelector

function getElementsByAttribute_fake(attName, attValue) {
	return document.querySelectorAll(`[${attName}=${attValue}]`)
}

// var elem1 = getElementsByAttribute_fake("class", "weird")[0];
// var elem2 = getElementsByAttribute_fake("class", "weird")[1];
// var elem3 = getElementsByAttribute_fake("class", "weird")[2];
// elem1.style.color = "#B22222";
// elem2.style.color = "#FFFF00";
// elem3.style.color = "#008000";

// without querySelector

function getElementsByAttribute(attName, attValue) {
	var all = document.getElementsByTagName('*');
	var found = [];

	for (var i = 0; i < all.length; i++) {
		element = all[i];
		if (all[i].getAttribute(attName) === attValue) {
			found.push(all[i]);
		}
	}

	return found;
}

var elem1 = getElementsByAttribute("class", "weird")[0];
elem1.style.color = "#B22222";
