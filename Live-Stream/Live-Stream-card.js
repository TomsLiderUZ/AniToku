

// https://anitokulivestreamconfig.vercel.app/Config-Live-Stream.json

fetch('https://anitokulivestreamconfig.vercel.app/Config-Live-Stream.json')
    .then(response => response.json())
    .then(configData => {


        // if (configData.Live_Active === "on") {
            document.querySelector(".LiveStreamAlertCardBg").innerHTML = `
                <a href="./?/Live-Stream" class="LiveStreamAlertCardItemBg" title="Jonli Efirni ko'rish uchun bosing">
                    <div class="LiveStreamAlertLeft">
                        <div class="LiveStreamAlertLeftImgBg" style='background-image: url("Live-Stream/img/priwe_1.png") !important;'></div>
                    </div>
                    <div class="LiveStreamAlertRight">${configData.LiveStream_Settings.Live_Name}</div>
                </a>
            `
        // }else{

        // }





    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });
