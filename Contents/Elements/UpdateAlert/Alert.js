
function showNotification(message, icon) {
    if (Notification.permission === "granted") {
        new Notification(message, { icon: icon });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification(message, { icon: icon });
            }
        });
    }
}

fetch('../config.json')
    .then(response => response.json())
    .then(app => {
        let update = app.versions.update;
        var encodedUpdate = btoa(update);
        var storedEncodedVersion = localStorage.getItem('storedVersion');
        var storedVersion = storedEncodedVersion ? atob(storedEncodedVersion) : null;
        if (update !== storedVersion) {
            localStorage.setItem('storedVersion', encodedUpdate);
            let iconPath = '../img/WebSiteLogBeta.png';
            showNotification("New version available: " + update, iconPath);
        } else {

        }
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
