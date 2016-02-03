build:
	google-chrome --pack-extension=play-video-locally --pack-extension-key=play-video-locally.pem

install:
	# install local app
	mkdir -p ~/.cache/play-video-locally
	cp local_app/start ~/.cache/play-video-locally
	
	# install msg hosts
	mkdir -p ~/.config/google-chrome/NativeMessagingHosts
	native_hosts/replace.py native_hosts/org.deepin.dmovie.json_template > native_hosts/org.deepin.dmovie.json
	cp native_hosts/org.deepin.dmovie.json ~/.config/google-chrome/NativeMessagingHosts/
