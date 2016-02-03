## Installation
```shell
# install you-get 
sudo pip3 install you-get

cd play-video-locally

make build

# => install crx in chrome

make install

```


## Usage
`native_hosts/org.deepin.dmovie.json_template`文件需要改动
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
`geddpfooejohhebhamibjkgkcahnkbnd` 需要改成你实际生成的插件ID
