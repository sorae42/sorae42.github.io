const TROUBLESHOOT = `If you are having difficulty fixing your music sheet, try to check your sheet if any of the following errors happens:
1. Your sheet contains alphabet ASCII characters. (a → z, A → Z)
2. Character that doesn't belong to the ASCII standard.
3. One of the number that is below 1 or above 15.
4. Wrong placement of bracket "(" and ")". For example, this will not accepted:
4 6( 4 5) → "6(" 
will wrongly place the wrong chord. (will not generate error)
4 6 (4 5 ) → ")" 
will generate an error.
They should be fixed like this:
4 6 (4 5) → Correct!
`;

function showTroubleshoot() {
    document.getElementById("Result").innerText = TROUBLESHOOT;
    document.getElementById("announce").innerText = "Troubleshoot your sheet";
}

function showExample() {
    document.getElementById("Result").innerHTML = `<img src="resources/horrible.jpeg" width="100%">`;
    document.getElementById("announce").innerText = "Example";
}

function feednote() {
    inp = document.getElementById("feed").value
    feedinput = inp.split("\n");
    if (inp === "") {
        document.getElementById("announce").innerText = "No input provided.";
        setTimeout(function() {
            document.getElementById("announce").innerText = "Result"
        }, 4000);
        return false;
    }
    var chord = false;
    var result = "";
    var i, j, num;
    mainloop:
        for (i = 0; i < feedinput.length; i++) {
            feeder = feedinput[i].split(" ");
            for (j = 0; j < feeder.length; j++) {
                var r = feeder[j];

                function rmChr(str, chr) {
                    return str.split(chr).join("");
                }
                // find the bracket to determine chord
                if (r === "") {
                    console.warn("Ended with whitespace at line " + i);
                    break;
                }
                if (r.includes("(")) {
                    num = rmChr(r, "(");
                    ws = "";
                    chord = true;
                } else if (r.includes(")")) {
                    num = rmChr(r, ")");
                    ws = " ";
                    chord = false;
                } else {
                    switch (chord) {
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
                    console.error(`Stopped. Reading: ${r} | [${i},${j}] -> ${num} (${typeof num})`);
                    var error1 = "";
                    if (isNaN(num)) {
                        error1 = "an alphabet character";
                    } else {
                        error1 = "a value below 1 or above 15";
                    }
                    result = `Reading: ${r} (position [${i},${j}]).\nLine ${(i + 1).toString()} contains ${error1}.\nPlease fix the error and try again.`;
                    break mainloop;
                }
                result = result.concat(agn, ws);
            }
            result = result + "\n";
        }

    document.getElementById("Result").innerText = result;
    document.getElementById("announce").innerText = `Done, tap the box to copy.`;
    setTimeout(function() {
        document.getElementById("announce").innerText = "Result"
    }, 4000);
}

function copy2clipboard() {
    navigator.clipboard.writeText(document.getElementById("Result").innerText).then(function() {
        document.getElementById("announce").innerText = "Copied to clipboard!"
    }, function(err) {
        document.getElementById("announce").innerText = `Unable to copy (${err})`;
    });

    setTimeout(function() {
        document.getElementById("announce").innerText = "Result";
    }, 1500);

}