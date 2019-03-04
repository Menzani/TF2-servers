"use strict"

function openLobbyCreationVideo(video) {
    video.pause()
    video.style.visibility = "hidden"
    window.open(isMp4Supported() ? "Lobby creation in 3 clicks" : "Lobby creation in 3 clicks!")
}

function isMp4Supported() {
    return !!document.createElement("video").canPlayType("video/mp4; codecs=avc1.42E01E,mp4a.40.2")
}

function displayMumbleTip(mumbleWhy) {
    mumbleWhy.style.display = "none"
    const mumbleTip = document.getElementById("mumbleTip")
    mumbleTip.style.display = "block"
}

function displayTickrateTip(tickrateWhy) {
    tickrateWhy.style.display = "none"
    const tickrateTip = document.getElementById("tickrateTip")
    tickrateTip.style.display = "block"
}