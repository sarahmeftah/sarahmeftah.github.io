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
  var pContent, pInfo, sideBar;

  pInfo = $('.page-info');

  pContent = $('.page-content');

  sideBar = $('#wrapper');

  $('#topbar-wrapper button').click(function(ev) {
    ev.preventDefault();
    return sideBar.toggleClass('toggled');
  });

  $(window).scroll(function() {
    return pInfo.css('left', $(this).scrollLeft());
  });

  $(document).load(function() {});

}).call(this);
