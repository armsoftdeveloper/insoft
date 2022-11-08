import jQuery from "jquery";
jQuery(function(){
    jQuery(window).bind("scroll.alert", function() {
        var jQuerythis = jQuery(this);
        if (jQuerythis.scrollTop() >= 1) {
            jQuery('.anim-lists').css({"position":"fixed","top":"auto"});
            jQuery('.anim-color').css({color:"black"})
            jQuery('.anim-lists').css({background:"#fefefe"})
        }
        else{
            jQuery('.anim-lists').css({"position":"sticky","top":"auto"});
            jQuery('.anim-color').css({color:"white"})
            jQuery('.anim-lists').css({background:"none"})
        }
    });
});
