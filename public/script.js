//header----------------------------------------------------------------
var header = document.querySelector('.header1');
onScroll = () => {
  var scrolledPage = Math.round(window.pageYOffset);
  if(scrolledPage > 60) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
document.addEventListener('scroll', onScroll);