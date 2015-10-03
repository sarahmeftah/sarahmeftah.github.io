###

Main

###

pInfo = $('.page-info')
pContent = $('.page-content')
sideBar = $('#wrapper')
win = $(window)

# Nav
$('#topbar-wrapper button').click (ev)->
	ev.preventDefault()
	sideBar.toggleClass 'toggled'

win.scroll ()->
	pInfo.css 'margin-left', $(this).scrollLeft()

win.resize ()->
	if win.width() > 1024
		sideBar.removeClass 'toggled'
		

$(document).load ()->
	# pContent.css 'margin-top', pInfo.outerHeight()
	
	