var port = null;
var host_name = "org.deepin.dmovie";
var tab_url = "";

open_local_player = function(url){
    if (!port){
        connect();
    }
    port.postMessage({"text": url});
}

connect = function(){
    port = chrome.runtime.connectNative(host_name);
    port.onDisconnect.addListener(onDisconnected);
}

onDisconnected = function() {
    console.log("disconnect");
    port = null;
}

$("#defaultLinks").click(function(){
    chrome.tabs.query({active: true}, function(tab){
        url = tab[0].url;
        console.log(url);
        open_local_player(url)
        window.close();
    });
});

