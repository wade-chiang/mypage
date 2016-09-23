/*
for my first resume page
 */

 // Offset for Main Navigation（離開頁首後，navbar的動作）
 $('.nav-main').affix({
     offset: {
         top: 300
     }
 });


// Basic JQuery Slide
jQuery(document).ready(function($) {

  $('#banner-fade').bjqs({
    height      : 480,
    width       : 640,
    responsive  : true
  });

});


// Scroll to Top
$("#top").on("click", function(e){
  $('html, body').animate({
    scrollTop: 0
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


// Scroll to about
$("#toAbout").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#about").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


// Scroll to Experience
$("#toExp").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#ExpTitle").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


// Scroll to Skill
$("#toSkill").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#skill").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


// Scroll to about
$("#toDoH").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#DoH").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


// Scroll Down to about (for header button)
$("#D2About").on("click", function(e){
  $('html, body').animate({
    scrollTop: $("#about").offset().top  // 只需修改此處
  }, 750);  // 750是滑動的時間，單位為毫秒
  e.preventDefault();
});


//讓collapse的navbar button在點擊後自動收回
$('.nav a').click(function(){
    $('.navbar-collapse').collapse('hide');
});
