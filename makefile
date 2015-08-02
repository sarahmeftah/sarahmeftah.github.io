# For handling server-side stuff

chmod:
	sudo find . -type d -exec chmod g+ws {} +
	sudo find . -type f -exec chmod g+w {} +