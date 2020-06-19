var serverList = ['https://rouxkarlus.pythonanywhere.com/p5cc', 'https://p5cc.pythonanywhere.com/p5cc']
function sendServer() {
    var s = $("#server").val();
    $("#requestcard").attr('action', serverList[s]);
}

