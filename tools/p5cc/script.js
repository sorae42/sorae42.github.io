// https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript/
function findGetParameter(parameterName) {
    var result = null, tmp = [];
    var items = window.location.search.substring(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

window.onload = function () {
document.getElementById("sharelink").value = window.location;
document.getElementById("result").src = "https://ik.imagekit.io/p5cc/p5cc/" + findGetParameter("view");

}

function deleteImage() {
    document.getElementById("deleteimg").innerHTML = "Please wait...";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://rouxkarlus.pythonanywhere.com/p5cc/delete", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
            fileId: findGetParameter("file_id")
    }));
    window.setTimeout(function() {window.location.href = "index.html";}, 3500)
}

function copyclipboard() {
  var copyText = document.getElementById("sharelink");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}