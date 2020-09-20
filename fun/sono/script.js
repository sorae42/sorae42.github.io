var interv, interv2, interv3, audio = new Audio("assets/sono_3.mp3"),
    Delay = 0,
    dottySection = 0,
    confirm = !1,
    loop = !1;

function findGetParameter(o) {
    for (var t = null, e = [], c = window.location.search.substring(1).split("&"), a = 0; a < c.length; a++)(e = c[a].split("="))[0] === o && (t = decodeURIComponent(e[1]));
    return t
}

function lyric() {
    $("#hel").css("opacity", "1"), setTimeout(function() {
        $("#ve").css("opacity", "1")
    }, 370), setTimeout(function() {
        $("#ti").css("opacity", "1")
    }, 710), setTimeout(function() {
        $("#ca").css("opacity", "1")
    }, 1e3), setTimeout(function() {
        $(".hs").fadeTo("slow", .1)
    }, 1350), Delay = Delay + 18.473 - Math.sqrt(Delay / 2 * Math.random())
}

function dotty() {
    $("#dotty" + dottySection).fadeTo("fast", 1), 3 == (dottySection += 1) ? setTimeout(function() {
        lyric()
    }, 420) : 4 == dottySection && (dottySection = 0, $(".dottyClass").fadeTo("slow", .1))
}

function bgFade() {
    hexColor = "";
    for (var o = 0; o < 6; o++) {
        switch (collector = Math.floor(15 * Math.random() + 1), collector) {
            case 10:
                collector = "a";
                break;
            case 11:
                collector = "b";
                break;
            case 12:
                collector = "c";
                break;
            case 13:
                collector = "d";
                break;
            case 14:
                collector = "e";
                break;
            case 15:
                collector = "f"
        }
        hexColor += collector
    }
    $("#dynbg").css("background-color", "#" + hexColor), $("#dynbg").fadeTo(5e3, .6), setTimeout(function() {
        $("#dynbg").fadeTo(5e3, 0)
    }, 5e3)
}
clickEvent = null !== document.ontouchstart ? "click" : "touchstart", $(document).ready(function() {
    $("#particles-js").fadeOut("fast"), window.history.pushState("", "Helvetica Standard", ".")
}), particlesJS.load("particles-js", "assets/particles.json", function() {
    console.log("callback - particles.js config loaded")
}), $(document).on(clickEvent, function() {
    1 != confirm || $("#welcome").length || (audio.play(), $("#start").fadeOut())
}), $("#closeDialog").click(function() {
    $("#welcome").remove(), confirm = !0
}), $(audio).on("play", function() {
    1 != confirm || $("#welcome").length || ($("#particles-js").fadeIn("slow"), setTimeout(function() {
        interv2 = setInterval(dotty, 1410 + Delay)
    }, 500), interv3 = setInterval(bgFade, 1e4), $("#start").fadeOut())
}), $(audio).on("pause", function() {
    clearInterval(interv2), clearInterval(interv3)
}), $(audio).on("ended", function() {
    (dottySection = Delay = 0) == loop ? ($("#start").html("Restart"), $("#start").fadeIn(), $(".hs").fadeTo("slow", .1), $(".dottyClass").fadeTo("slow", .1), $("#particles-js").fadeOut("slow")) : audio.play()
}), $("#loop").click(function() {
    loop = 0 == loop ? ($("#loop").css({
        backgroundColor: "rgba(255,255,255,255)",
        color: "black"
    }), !0) : ($("#loop").css({
        backgroundColor: "rgba(0,0,0,0)",
        color: "white"
    }), !1)
});
