alert("It works!");

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}

function makeadorable() {
    if (document.getElementById("swtrole").checked == true) {
			document.getElementById("swtlore").innerHTML = "They can switch their role!";
        var swt = Math.floor(Math.random() * 2);
		}
	else {
		var swt = 1;	document.getElementById("swtlore").innerHTML = "They can't switch their role...";
	}
	if (swt == 1) {
	var c1 = document.getElementById("p1").value;
	var c2 = document.getElementById("p2").value;
	}
	else {
	var c1 = document.getElementById("p2").value;
   var c2 = document.getElementById("p1").value;
	}

    A = c1[0].toUpperCase() + c1.slice(1);
    B = c2[0].toUpperCase() + c2.slice(1);
    var R1 = Math.floor(Math.random() * 24);
    }
document.write(loadFile("premise.txt"));
document.getElementById("premise").innerHTML = res;
}