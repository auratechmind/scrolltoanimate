/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* Check Which Section Visible on screen*/
$(document).ready(function() {
    var $animation_elements = $('.target');
    var $window = $(window);    
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position > window_top_position) &&
                (element_top_position < window_bottom_position)) {
                $element.addClass('in-view');
                /*$(".navbar-nav li a").each(function() {
                    if ($(this).attr("id") == $element.attr('id')) {
                        $('.navbar-nav li a').parent().removeClass('active');
                        $('#' + $element.attr('id')).parent().addClass('active');
                    }
                });*/
                var cls = ".in-view .animated";
                $(cls).each(function() {
                    var animationName = $(this).attr("animate");
                    console.log(animationName);
                    if (animationName !== undefined) {
                        $(this).css('-webkit-animation-duration', $(this).attr("duration"));
                        $(this).css('-webkit-animation-delay', $(this).attr("delay"));
                        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                        $(this).addClass(animationName).one(animationEnd, function() {
                            $(this).removeClass('animated ' + animationName)
                        });
                    }
                });
            } else {
                $element.removeClass('in-view');
            }
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
});