var time = 0;

window.onload = () => {
    const startTime = Date.now();
    const myInterval = setInterval( () => {
        time = Date.now() - parseInt(startTime);
    }, 1000);
}

window.onbeforeunload = () => {
    console.log("Document onbeforeunload state.");
};

window.onunload = () => {
    const data = {
        location: location.href,
        timeOnPage: `${time / 1000}s`
    }
    navigator.sendBeacon("/send", JSON.stringify(data));
}