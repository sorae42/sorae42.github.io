function feednote() {
  let fdt = new FormData();
  fdt.append("feed", document.getElementById("feed").value);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://rouxkarlus.pythonanywhere.com/ncvtapi");
  xhr.onreadystatechange = function() {
    if (this.status == 200) {
      console.log(xhr.responseText);
  document.getElementById("noteresult").innerHTML = this.responseText;
    }
};
  xhr.send(fdt);
  return false;
}

function clipboard() {

}