let dt = new Date();
function feednote() {
  var t1 = dt.getTime();
  inp = document.getElementById("feed").value
  feedinput = inp.split("\n");
  if (inp === "") {
      document.getElementById("announce").innerText = "No input provided.";
      setTimeout(function () {document.getElementById("announce").innerText = "Result"}, 4000);
      return false;
  }
  // ...
  var chord = false;
  var result = "";
  var i, j, num;
mainloop:
  for (i = 0; i < feedinput.length; i++) {
    feeder = feedinput[i].split(" ");
    for (j = 0; j < feeder.length; j++) {
      var r = feeder[j];
      function rmChr(str, chr) {return str.split(chr).join("");}
      // find the bracket to determine chord
      if (r.includes("(")) {
        num = rmChr(r, "(");
        ws = "";
        chord = true;
      }
      else if (r.includes(")")) {
        num = rmChr(r, ")");
        ws = " ";
        chord = false;
      }
      else {
        switch(chord) {
          case true:
            ws = "";
            break;
          case false:
            ws = " ";
            break;
        }
        num = r;
      }
      var agn = "";
      num = parseInt(num, 10);
        // assign the number to abc123
      if (num > 0 && num <= 5) agn = "A" + num.toString();
      else if (num > 5 && num <= 10) agn = "B" + (num - 5).toString();
      else if (num > 10 && num <= 15) agn = "C" + (num - 10).toString();
      else {
            console.log(`Stopped. Reading: ${r} | [${i},${j}] -> ${num} (${typeof num})`);
            var error1 = "";
            if (isNaN(num)) {
                  error1 = "an alphabet or a whitespace character";
            }
            else {
                  error1 = "a value below 1 or above 15";
            }
            result = `Reading: ${r} (position [${i},${j}]).\nLine ${(parseInt(i, 10) + 1).toString()} contains ${error1}.\nPlease fix the error and try again.\nIf the error still present, kindly tweet at me @soraboken on Twitter so I can get into it.`;
            break mainloop;
        }
      result = result.concat(agn, ws);
      }
    result = result + "\n";
  }

document.getElementById("Result").innerText = result;
      var t2 = dt.getTime();
      document.getElementById("announce").innerText = `Tap the box to copy. (took ${t2-t1}ms)`;
setTimeout(function () {document.getElementById("announce").innerText = "Result"}, 4000);
}

function clipboard() {
      navigator.clipboard.writeText(document.getElementById("Result").innerText).then(function() {
  document.getElementById("announce").innerText = "Copied to clipboard!"
}, function(err) {
  document.getElementById("announce").innerText = `Unable to copy (${err})`;
});

setTimeout(function () {document.getElementById("announce").innerText = "Result";}, 1500);
      
}