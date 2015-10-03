###

Main

###

pInfo = $('.page-info')
pContent = $('.page-content')
sideBar = $('#wrapper')

# Nav
$('#topbar-wrapper button').click (ev)->
	ev.preventDefault()
	sideBar.toggleClass 'toggled'


$(window).scroll ()->
	pInfo.css 'left', $(this).scrollLeft()

$(document).load ()->
	# pContent.css 'margin-top', pInfo.outerHeight()
	
	