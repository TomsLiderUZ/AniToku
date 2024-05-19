// Function to show a notification with an icon
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
        // Extract the update version from the config file
        let update = app.versions.update;
        console.log(`Web site version: ${update}`);

        // Encode the current version
        var encodedUpdate = btoa(update);
        
        // Retrieve the stored version from local storage (if any)
        var storedEncodedVersion = localStorage.getItem('storedVersion');
        
        // Decode the stored version (if any)
        var storedVersion = storedEncodedVersion ? atob(storedEncodedVersion) : null;

        console.log(`Stored version: ${storedVersion}`);
        
        // Compare the current version with the stored version
        if (update !== storedVersion) {
            // If the versions do not match, update the local storage and show the notification
            localStorage.setItem('storedVersion', encodedUpdate);
            // Specify the icon path (update with your actual image path)
            let iconPath = '../img/WebSiteLogBeta.png';
            showNotification("New version available: " + update, iconPath);
        } else {
            // If the versions match, do nothing
            console.log("Version is up-to-date.");
        }
    })
    .catch(error => {
        console.error('Error occurred:', error);
    });
