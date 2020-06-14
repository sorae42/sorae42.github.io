var audio = new Audio('assets/sono_3.mp3');

function lyric() {
      $('#hel').css('opacity', '1');
      setTimeout(function(){ $('#ve').css('opacity', '1') }, 350);
      setTimeout(function(){ $('#ti').css('opacity', '1') }, 700);
      setTimeout(function(){ $('#ca').css('opacity', '1') }, 950);
      setTimeout(function(){
            $('.hs').fadeTo("slow", 0.1);
      }, 1350);
}

window.scrollBy(0, 100);
window.addEventListener('touchstart', function() {
      audio.play();
});

setInterval(lyric, 5000);

