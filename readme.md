# play-video-locally
A chrome extension luanch local app **demo**, at the same time, this demo can play online video with local player.  
The online video include youku, tudou, youtube, etc.  
power by [you-get](https://github.com/soimort/you-get) :)

## Installation

- install chrome extension

```shell
# install you-get 
sudo pip3 install you-get

cd play-video-locally  # project root dir

make first  # run this, if you are first time to build crx file, and you will get a pem file, after running this
make build  # run this, if you are not first time to buid crx file

# => install crx in chrome
```

- modify this template file `native_hosts/org.deepin.dmovie.json_template` with your extension ID

```conf
{
    "name": "org.deepin.dmovie",
    "description": "play video with local app",
    "path": "$HOME/.cache/play-video-locally/start",
    "type": "stdio",
    "allowed_origins": [
        "chrome-extension://geddpfooejohhebhamibjkgkcahnkbnd/"
    ]
}
```
`geddpfooejohhebhamibjkgkcahnkbnd` shuld be replaced with your true extension ID

- installation

```shell
make install
```

### Also see
[more-detailed-in-my-blog](http://www.choldrim.com/2016/03/06/chrome-extension-launch-local-app/) ;)

### License
This project is a chrome extension luanching local app demo, you can do anything under it, just enjoy it ;)
