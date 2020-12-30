const capital = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};
var quote;

function loadFile(e) {
    var t = null,
        n = new XMLHttpRequest;
    return n.open("GET", e, !1), n.send(), 200 == n.status && (t = n.responseText), t
}

function swtloreCheck() {
    var e = document.getElementById("swtrole").checked;
    return document.getElementById("swtlore").innerHTML = 1 == e ? "They can randomly switch role!" : "They can't switch role...", e
}

function nameAnalyze() {
    var e = swtloreCheck(),
        t = document.getElementById("p1").value,
        n = document.getElementById("p2").value;
    if (!(t.length <= 0 || n.length <= 0)) return 1 == e && 2 == Math.floor(2 * Math.random()) + 1 && (n = [t, t = n][0]), [capital(t), capital(n)];
    alert("Please provide a name!")
}

function premiseAnalyze() {
    var e = nameAnalyze(),
        t = Math.floor(Math.random() * quote.length);
    return premise = quote[t].replace(/%a/g, e[0]), premise = premise.replace(/%b/g, e[1]), premise
}

function makeAdorable() {
    document.getElementById("premise").innerHTML = premiseAnalyze()
}

window.onload = function() {
    for (quote = loadFile("quote.txt").split("|"), i = 0; i < quote.length; i++) quote[i] = quote[i].replace(/\n/g, "")
};