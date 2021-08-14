$(document).ready(function(){
    $('.darkmode-icon').click(function(){
        $('body').toggleClass('is-dark');
    });

    $('.toggle-items .search-icon').click(function(){
        var screenwidth = $(window).outerWidth();
        if(screenwidth > 992){
            $('body').toggleClass('search-active');
            $('.navbar .search-input').focus();
        } else if(screenwidth <= 992){
            $('.overlay').width('100%');
            $('.slide-menu-bottom .search-input').focus();
            $('.top-searches').css("display", "block");
            $('.slide-menu-nav-links').css("display", "none");
        }
        
    });

    $(document).ready(function(){
        $('.slide-menu-nav-links .sub-menu').before('<span class="submenu-toggle"></span>');
        $('.submenu-toggle').on('click', function(e){
            e.preventDefault();
            $(this).parent().toggleClass('show');
        });
    });

    $('.menu-icon').click(function(){
        $('.overlay').width('100%');
        $('.top-searches').css("display", "none");
        $('.slide-menu-nav-links').css("display", "block");
    });

    $('.menu-close-btn').click(function(){
        $('.overlay').width('0%');
    });
});