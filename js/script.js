
// Mobile menu

$(document).ready(function () {
    var link = $('.mobile-navigation__burger-link');
    var link_active = $('.mobile-navigation__burger-link');
    var navigation = $('.mobile-navigation__nav');
    var nav_active = $('.nav_active');

    link.click(function(){
        link.toggleClass('.mobile-navigation__burger-link_active');
        navigation.toggleClass('nav_active')                
    });

    link_active.click(function(){
        navigation_active.removeClass('nav_active');
    });
});

// phoneNumber form
$(function(){
    $('#phone-number').mask("+7(999) 999-99-99");
})