function findParam(n){for(var o=null,t=[],i=window.location.search.substring(1).split("&"),r=0;r<i.length;r++)(t=i[r].split("="))[0]===n&&(o=decodeURIComponent(t[1]));return o}
function noimg() {
    $("#imgNoExist").html("Couldn't find the calling card. Perhaps the URL was wrong, or the calling card is deleted from the server."),
    $("#arrivedMsg").html("Invaild URL"),
    $("#elemHide").css('display', 'none');
}
window.onload = function () {
    $("#sharelink").val(window.location),
    $("#result").attr('src', "https://ik.imagekit.io/p5cc/p5cc/" + findParam("view"));
};