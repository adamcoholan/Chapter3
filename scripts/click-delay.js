function delayAndDirect(url) {
    setTimeout(function() {
        setDestination(url)
    }, 300);
}

function setDestination(url) {
    document.location.href = url;
}