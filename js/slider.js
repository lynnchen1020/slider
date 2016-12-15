$(document).ready(function () {

  var imgShowBox = $('.img-show')

  var prev = $('#prev')

  var next = $('#next')

  var imgsLen = $('.slide-content li').length;

  var i = 0;


  // Show first img
  imgShowBox.attr('src', 'images/img0.jpg').show();


  // Next
  next.on('click', function (e) {

    e.preventDefault();

    if( i < imgsLen - 1) {
      i++
      imgShowBox.attr('src', 'images/img' + i + '.jpg')
    }
  })


  // Prev
  prev.on('click', function (e) {

    e.preventDefault();

    if( i > (imgsLen - imgsLen)) {
      i--
      imgShowBox.attr('src', 'images/img' + i + '.jpg')
    }
  })

})
