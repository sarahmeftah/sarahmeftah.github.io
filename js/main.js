/** 
 * sarah-meftah-com - Sarah's Website
 * @version v1.0.0
 * @link sarahmeftah.com
 * @license MIT
 */


/*

Main
 */

(function() {
  var pContent, pInfo, sideBar, win;

  pInfo = $('.page-info');

  pContent = $('.page-content');

  sideBar = $('#wrapper');

  win = $(window);

  $('#topbar-wrapper button').click(function(ev) {
    ev.preventDefault();
    return sideBar.toggleClass('toggled');
  });

  win.scroll(function() {
    return pInfo.css('margin-left', $(this).scrollLeft());
  });

  win.resize(function() {
    if (win.width() > 1024) {
      return sideBar.removeClass('toggled');
    }
  });

  $(document).load(function() {});

}).call(this);
