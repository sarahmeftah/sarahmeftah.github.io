/**
 * Main
 */

(function() {
    'use strict';

    var pInfo = $('.page-info');
    var pContent = $('.page-content');
    var sideBar = $('#wrapper');
    var win = $(window);

    // Nav
    $('#topbar-wrapper button').click(function(ev) {
        ev.preventDefault();
        sideBar.toggleClass('toggled');
    });
    win.scroll(function() {
        pInfo.css('margin-left', $(this).scrollLeft());
    });
    win.resize(function() {
        if (win.width() > 1024) {
            sideBar.removeClass('toggled');
        }
    });
})();
