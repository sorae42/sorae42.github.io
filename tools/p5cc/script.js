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

function redirectPost(url, data) {
    var form = document.createElement('form');
    document.body.appendChild(form);
    form.method = 'post';
    form.action = url;
    for (var name in data) {
        var input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = data[name];
        form.appendChild(input);
    }
    form.submit();
}

function deleteImage() {
    alert("We are currently having issue on deleting images on server side right now, so this feature is currently disabled.");
}

function TEMPdeleteImage() {
    document.getElementById("deleteimg").innerHTML = "Please wait...";
    var fid = findGetParameter("file_id");
    redirectPost("https://rouxkarlus.pythonanywhere.com/p5cc/delete", { fileId : fid });
}

function copyclipboard() {
  var copyText = document.getElementById("sharelink");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}