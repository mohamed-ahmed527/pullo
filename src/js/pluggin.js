import $ from"jquery";
$(document).ready(function(){
  $(".menu").click(function(){
    $("ul").slideToggle();
  });
});