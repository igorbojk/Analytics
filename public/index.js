var time = 0;
let userIp = '';

window.onload = () => {
    const startTime = Date.now();
    const myInterval = setInterval( () => {
        time = Date.now() - parseInt(startTime);
    }, 1000);
    fetch('https://api.ipify.org/?format=json')
        .then(result => result.json())
        .then(data => {
            userIp = data.ip;
        })
}

window.onbeforeunload = () => {
    console.log("Document onbeforeunload state.");
};

window.onunload = () => {
    const data = {
        location: location.href,
        timeOnPage: `${time / 1000}s`,
        userIp
    }
    navigator.sendBeacon("/send", JSON.stringify(data));
}