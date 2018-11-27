var container = document.getElementById('slider');
var images = ['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg'];
var allImages = images.length;
var current = 0;
container.addEventListener('click',start_stop);
var test = 0;
function slide() {
  container.innerHTML = '<img src="img/'+images[current]+'" />';
  current++;
  if (current == allImages) {
    current = 0;
  }
}
slide();
var loop = setInterval(slide,2000);
function start_stop() {
  if (test === 0) {
    clearInterval(loop);
    test++;
    container.setAttribute('title','start slide');
  }else{
    loop = setInterval(slide,2000);
    test--;
    container.setAttribute('title','stop slide');

  }
}
