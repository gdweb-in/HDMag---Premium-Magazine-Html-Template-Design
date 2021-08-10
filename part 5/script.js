$(document).ready(function(){
  $('.darkmode-icon').click(function(){
      $('body').toggleClass('is-dark');
  });

  $('.toggle-items .search-icon').click(function(){
      $('body').toggleClass('search-active');
      $('.search-input').focus();
  });

  $(document).ready(function(){
      $('.slide-menu-nav-links .sub-menu').before('<span class="submenu-toggle"></span>');
      $('.submenu-toggle').on('click', function(e){
          e.preventDefault();
          $(this).parent().toggleClass('show');
      });
  });
});