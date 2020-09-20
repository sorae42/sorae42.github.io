var imgNo = 0;

function checkServerStatus(e, n) {
    var t = document.body.appendChild(document.createElement("img"));
    t.hidden = !0, t.id = imgNo, t.onload = function() {
        document.getElementById(e).innerHTML = "online", document.getElementById(e).style.color = "chartreuse"
    }, t.onerror = function() {
        document.getElementById(e).innerHTML = "offline", document.getElementById(e).style.color = "red"
    }, t.src = n, imgNo = +1
}
checkServerStatus("sv1", "https://rouxkarlus.pythonanywhere.com/p5cc/online.png");
checkServerStatus("sv2", "https://p5cc.pythonanywhere.com/p5cc/online.png");
