var xmlhttp = null;
if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
}else if (window.ActiveXObject) {
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

if (xmlhttp !== null) {
	xmlhttp.onreadystatechange = stateChange;
	xmlhttp.open("GET", "test.html", true);
	xmlhttp.send(null);
}else{
	alert("Your browser does not support XMLHTTP.")
}


function stateChange() {
	if (xmlhttp.readyState === 4) {
		if (xmlhttp.status === 200) {
			alert(xmlhttp.responseText);
		}
	}
	else{
		alert('There was a problem with the request.')
	}
}