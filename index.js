"use strict"

function openLobbyCreationVideo(video) {
    video.pause()
    video.style.visibility = "hidden"
    window.open(isMp4Supported() ? "assets/Lobby creation in 3 clicks" : "assets/Lobby creation in 3 clicks!")
}

function isMp4Supported() {
    return !!document.createElement("video").canPlayType("video/mp4; codecs=avc1.42E01E,mp4a.40.2")
}