$(document).ready(function(){
  $('.header').height($(window).height());
})


window.addEventListener( "load", function () {
  function postData() {
    var request = new XMLHttpRequest();


    var data = new FormData( form );

    request.open( "POST", "https://cors-anywhere.herokuapp.com/http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php" );


    request.send( data );
  }


  var form = document.getElementById( "my_form" );


  form.addEventListener( "submit", function (event) {
    event.preventDefault();
    postData();
  });
});