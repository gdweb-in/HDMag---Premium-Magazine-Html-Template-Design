$(document).ready(function(){
  $('.darkmode-icon').click(function(){
      $('body').toggleClass('is-dark');
  });

  $('.toggle-items .search-icon').click(function(){
      $('body').toggleClass('search-active');
      $('.search-input').focus();
  });
});