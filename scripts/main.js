/*This method creates the sticky header.*/

$(document).ready(function () {

  var $header = $('header');
  var $sticky = $header.before($header.clone().addClass("sticky"));
  /*This create a scroll function for the page*/
  $(window).on("scroll", function () {
    var scrollFromTop = $(window).scrollTop();
    $("body").toggleClass("scroll", (scrollFromTop > 350));
  });

});
