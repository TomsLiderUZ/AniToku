// setInterval(() => {
if (location.href.includes("file:/")) {
    setTimeout(() => {
        console.clear()
    }, 500);
    document.body.innerHTML = ""
}
// });


let NavBarBarLinkJs = document.createElement('script');
NavBarBarLinkJs.setAttribute("src", "Contents/Elements/NavBar/NavBar.js");
document.querySelector(".app").appendChild(NavBarBarLinkJs);

document.querySelector(".app").innerHTML += `
<div class="conentsBg"></div>
`

let footerBarLinkJs = document.createElement('script');
footerBarLinkJs.setAttribute("src", "Contents/Elements/Footer/Footer.js");
document.querySelector(".app").appendChild(footerBarLinkJs);


let UpdateAlerJS = document.createElement('script');
UpdateAlerJS.setAttribute("src", "Contents/Elements/UpdateAlert/Alert.js");
document.querySelector(".app").appendChild(UpdateAlerJS);





fetch('../config.json')
    .then(response => response.json())
    .then(app => {
        console.log('%c' + "Welcome", 'background-color: black; padding: 20px; border-radius: 20px; text-wrap: nowrap; font-size: 30px; color: white; font-weight: 1000; text-shadow: green 1.41px 1.41px, green 2px 0px, green 1.41px -1.41px, green 0px -2px, green -1.41px -1.41px, green -2px 0px, green -1.41px 1.41px, green 0px 2px;'); console.log('%c' + `${app.data.title.logoName}`, 'font-size: 40px; text-wrap: nowrap; padding: 0 0 0 10px; color: red; font-weight: 1000; text-shadow: #ffffff 1.41px 1.41px, #ffffff 2px 0px, #ffffff 1.41px -1.41px, #ffffff 0px -2px, #ffffff -1.41px -1.41px, #ffffff -2px 0px, #ffffff -1.41px 1.41px, #ffffff 0px 2px;');
    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });


fetch('../config.json')
    .then(response => response.json())
    .then(app => {



        function sendNavBarColor1() {
            setInterval(() => {
                if (document.querySelector(".app").scrollTop >= 1) {
                    document.querySelector(".navBarBg").style.backgroundColor = "black"
                    document.querySelector(".navBarBg").style.boxShadow = "0px 0px 10px 3px black"
                    document.querySelector(".navBarBg").style.transition = "all 0.1s linear"
                } else {
                    document.querySelector(".navBarBg").style.backgroundColor = "transparent"
                    document.querySelector(".navBarBg").style.boxShadow = "0px 0px 0px 0px transparent"
                    document.querySelector(".navBarBg").style.transition = "all 0.22s linear"
                }
            });
        }


        function sendNavBarColor2() {
            setInterval(() => {
                document.querySelector(".navBarBg").style.backgroundColor = "black"
                document.querySelector(".navBarBg").style.boxShadow = "0px 0px 10px 3px black"
            });
        }




        function scrollResertBtnSend() {
            document.querySelector("body").innerHTML +=
                `
                    <style>
                    .contentsBgScrollRestartBtnBg{
                        width: 150px;
                        height: 80px;
                        z-index: 999;
                        position: absolute;
                        top: 85%;
                        right: 0;
                        margin-right: 1%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: 0.3s all;
                        overflow: hidden;
                    }
                    .contentsBgScrollRestartBtn{
                        width: 55px;
                        height: 55px;
                        border-radius: 50000px;
                        background-color: rgba(255, 0, 0, 0.4);
                        position: absolute;
                        display: flex;
                        opacity: 0;
                        margin-right: -200%;
                        align-items: center;
                        justify-content: center;
                        color: rgba(255, 255, 255, 0.4);
                        cursor: pointer;
                        transition: 0.3s all;
                        font-size: 20px;
                    }
                    .contentsBgScrollRestartBtn:hover{
                        background-color: red;
                        color: white;
                        width: 58px;
                        height: 58px;
                        transition: 0.3s all;
                    }
                    </style>
                    <div class="contentsBgScrollRestartBtnBg">
                    <div class="contentsBgScrollRestartBtn"><i class="fa-solid fa-chevron-up"></i></div>
                    </div>
                `

            document.querySelector(".contentsBgScrollRestartBtn").addEventListener("click", () => {
                document.querySelector(".app").scrollTop = 0;
            })


            setInterval(() => {
                if (document.querySelector(".app").scrollTop >= 120) {
                    document.querySelector(".contentsBgScrollRestartBtn").style.opacity = "1"
                    document.querySelector(".contentsBgScrollRestartBtn").style.marginRight = "0%"
                } else {
                    document.querySelector(".contentsBgScrollRestartBtn").style.opacity = "0"
                    document.querySelector(".contentsBgScrollRestartBtn").style.marginRight = "-200%"
                }
            });

        }







        let documentTitleName = "";
        let documentLogName = "";
        let documentLogNameFooter = "";


        function FUNCdocumentTitleName() {
            if (app.data.title.titleName === "") {
                documentTitleName = "Document"
            } else if (app.data.title.titleName === " ") {
                documentTitleName = "Document"
            } else {
                documentTitleName = app.data.title.titleName
            }
        }
        function FUNCdocumentLogName() {
            if (app.data.title.logoName === "") {
                documentLogName = `<i class="fa-solid fa-feather-pointed"></i>` + "Document"
            } else if (app.data.title.logoName === " ") {
                documentLogName = `<i class="fa-solid fa-feather-pointed"></i>` + "Document"
            } else {
                documentLogName = `<i class="fa-solid fa-feather-pointed"></i>` + app.data.title.logoName
            }
        }
        function FUNCdocumentLogNameFooter() {
            if (app.data.title.logoName === "") {
                documentLogNameFooter = "Document"
            } else if (app.data.title.logoName === " ") {
                documentLogNameFooter = "Document"
            } else {
                documentLogNameFooter = app.data.title.logoName
            }
        }


        FUNCdocumentTitleName()
        FUNCdocumentLogName()
        FUNCdocumentLogNameFooter()




        const currentYear = new Date().getFullYear();
        let mainDataNumber = ""
        let mainDataEmail = ""
        let mainDataCurrentYear = ""
        let mainDataLinkTelegram = ""
        let mainDataLinkYoutube = ""
        let mainDataLinkInstagram = ""


        function FUNCmainDataNumber() {
            if (app.config.contact_number === "") {
                mainDataNumber = "Number not available"
            } else if (app.config.contact_number === " ") {
                mainDataNumber = "Number not available"
            } else {
                mainDataNumber = app.config.contact_number
            }
        }
        function FUNCmainDataEmail() {
            if (app.config.contact_email === "") {
                mainDataEmail = "Email not available"
            } else if (app.config.contact_email === " ") {
                mainDataEmail = "Email not available"
            } else {
                mainDataEmail = app.config.contact_email
            }
        }
        function FUNCmainDataCurrentYear() {
            if (app.config.current_year === "") {
                mainDataCurrentYear = `${currentYear}`
            } else if (app.config.current_year === " ") {
                mainDataCurrentYear = `${currentYear}`
            } else {
                mainDataCurrentYear = app.config.current_year
            }
        }


        function FUNCmainDataLinkTelegram() {
            if (app.config.contact_telegarm === "") {
                mainDataLinkTelegram = `http://${location.host}/?/Links`
            } else if (app.config.contact_telegarm === " ") {
                mainDataLinkTelegram = `http://${location.host}/?/Links`
            } else {
                mainDataLinkTelegram = app.config.contact_telegarm
            }
        }
        function FUNCmainDataLinkYoutube() {
            if (app.config.contact_youtube === "") {
                mainDataLinkYoutube = `http://${location.host}/?/Links`
            } else if (app.config.contact_youtube === " ") {
                mainDataLinkYoutube = `http://${location.host}/?/Links`
            } else {
                mainDataLinkYoutube = app.config.contact_youtube
            }
        }
        function FUNCmainDataLinkInstagram() {
            if (app.config.contact_instagram === "") {
                mainDataLinkInstagram = `http://${location.host}/?/Links`
            } else if (app.config.contact_instagram === " ") {
                mainDataLinkInstagram = `http://${location.host}/?/Links`
            } else {
                mainDataLinkInstagram = app.config.contact_instagram
            }
        }

        function FUNCfooterBarSendValue() {
            setTimeout(() => {
                setInterval(() => {
                    document.querySelector(".footerBarTopLeftCardTextEmailBg").textContent = mainDataEmail
                    document.querySelector(".footerBarTopLeftCardTextNumberBg").textContent = mainDataNumber
                    document.querySelector(".footerBarTopRightLinkCardTelegram").setAttribute("href", mainDataLinkTelegram)
                    document.querySelector(".footerBarTopRightLinkCardYoutube").setAttribute("href", mainDataLinkYoutube)
                    document.querySelector(".footerBarTopRightLinkCardInstagram").setAttribute("href", mainDataLinkInstagram)
                    document.querySelector(".footerBarBottomYear").innerHTML = `&nbsp;${mainDataCurrentYear}`
                    document.querySelector(".footerBarBottomLink_1").setAttribute("href", `http://${location.host}`)
                    document.querySelector(".footerBarBottomLink_1").setAttribute("title", `${documentLogNameFooter}`)
                    document.querySelector(".footerBarBottomLink_1").innerHTML = documentLogNameFooter
                });
            }, 1100);
        }


        FUNCmainDataNumber()
        FUNCmainDataEmail()
        FUNCmainDataCurrentYear()
        FUNCmainDataLinkTelegram()
        FUNCmainDataLinkYoutube()
        FUNCmainDataLinkInstagram()

        let setContentPageMainContentBar = `

<div class="mainContentsBg">
<div class="mainContentRow_1_AllBg mainContentRowBg">
  <div class="mainContentRow_LeftBg mainContentBgImgFilter conentsBgItemsWrapper">
    <div class="mainContentRow_LeftTextBg">
      Reytingi baland, sifatli dubliyaj asosida animelarni 
      <br>
      o'zbek tilida tekinga tomosha qilmoqchimisiz,
      <br>
      Unda ushbu sayt aynan siz uchun
    </div>
    <div class="mainContentRow_LeftButtonBarBg">
      <a href="./?/Home" class="mainContentRow_LeftButtonBarBtnBg">Boshlash uchun bosing&nbsp;<i class="fa-solid fa-angle-right"></i></a>
    </div>
  </div>
  <div class="mainContentRow_RightBg mainContentBgImgFilter">
    <img class="mainContentAnimetedImg" src="img/Manin-Content-imgs/img_12.jpg" alt="Img" width="90%" style="filter: drop-shadow(0px 3px 3px blue);">
  </div>
</div>

<div class="mainContentRow_2_AllBg mainContentRowBg">
  <div class="mainContentRow_RightBg">
    <img class="mainContentAnimetedImg" src="img/Manin-Content-imgs/img_15.png" alt="Img" width="60%" style="filter: drop-shadow(0px 3px 3px orange);">
  </div>
  <div class="mainContentRow_LeftBg">
    <div class="mainContentRow_LeftTextBg">
      Jangovor, sarguzasht, sehr, komedik, 
      <br>
      romantik, qo'rqinchli, oilaviy
      <br>
      Janrlaridagi animelar 
    </div>
    <div class="mainContentRow_LeftButtonBarBg">
      <a href="./?/Genres" class="mainContentRow_LeftButtonBarBtnBg">Boshlash&nbsp;<i class="fa-solid fa-angle-right"></i></a>
    </div>
  </div>
</div>


<div class="mainContentRow_3_AllBg mainContentRowBg">
  <div class="mainContentRow_LeftBg">
    <div class="mainContentRow_LeftTextBg">
      Siz qidirgan, siz yoqtirgan animelar
      <br>
      ${documentLogNameFooter} siz kutgandan ko'roq
    </div>
    <div class="mainContentRow_LeftButtonBarBg">
      <a href="./?/Home" class="mainContentRow_LeftButtonBarBtnBg">Boshlash&nbsp;<i class="fa-solid fa-angle-right"></i></a>
    </div>
  </div>
  <div class="mainContentRow_RightBg">
    <img class="mainContentAnimetedImg" src="img/Manin-Content-imgs/img_13.png" alt="Img" width="96%" style="filter: drop-shadow(0px 3px 3px red);">
  </div>
</div>

<div class="mainContentRow_4_AllBg mainContentRowBg">
  <div class="mainContentRow_RightBg">
    <img class="mainContentAnimetedImg" src="img/Manin-Content-imgs/img_19.png" alt="Img" width="60%" style="filter: drop-shadow(0px 3px 3px red);">
  </div>
  <div class="mainContentRow_LeftBg">
    <div class="mainContentRow_LeftTextBg">
      Eng sifatli animelar faqat bizda
      <br>
      Biz haqimizda ko'proq bilish uchun 
      <br>
      bosing
    </div>
    <div class="mainContentRow_LeftButtonBarBg">
      <a href="./?/About" class="mainContentRow_LeftButtonBarBtnBg">Ko'proq&nbsp;<i class="fa-solid fa-angle-right"></i></a>
    </div>
  </div>
</div>
</div>

`











        document.querySelector(".navBarLogo").innerHTML = documentLogName;
        document.querySelector(".navBarLogo").setAttribute("href", `http://${location.host}/`);



        document.querySelector(".navBarBg").style.display = 'flex';

        let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
        navBarMenuItems.forEach(function (element) {
            element.style.display = 'flex';
        });





        // setInterval(() => {
        var currentURL = location.href;
        var endIndex = currentURL.indexOf('/', 8);
        var truncatedURL = currentURL.substring(0, endIndex);

        var encryptedURL = btoa(truncatedURL);

        localStorage.setItem('encryptedSavedURL', encryptedURL);

        var savedEncryptedURL = localStorage.getItem('encryptedSavedURL');

        var decryptedURL = atob(savedEncryptedURL) + "/";
        // });

        function getPage404Seand() {
            location.reload;


            if (location.href === decryptedURL) {
                location.reload;
                scrollResertBtnSend()
                sendNavBarColor1()
                FUNCfooterBarSendValue()
                document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/Home`);
                document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/News`);
                document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/Genres`);
                document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
                document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
                document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
                document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
                document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
                document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");
                document.querySelector("title").innerHTML = `${documentTitleName}`;

                document.querySelector(".navBarBg").style.display = 'flex';

                let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
                navBarMenuItems.forEach(function (element) {
                    element.style.display = 'flex';
                });
                document.querySelector(".conentsBg").innerHTML = `

            ${setContentPageMainContentBar}
 
            `
            } else {
                document.querySelector("body").innerHTML =
                    `
            <style>
            .NotFundBg{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                background-color: rgb(20, 20, 20);
                z-index: 900;
                overflow: hidden;
            }
            .NotFundIconGif{
                position: absolute;
                background-image: url("../img/gif_blackGirl.gif");
                background-repeat: no-repeat;
                background-position-x: center;
                background-position-y: 30px;
                background-size: 67%;
                width: 300px;
                height: 150px;
                margin-top: -38%;
                z-index: 50;
                border-bottom: solid white;
                /* background-color: blue; */
            }
            .NotFundBg .NotFundIcon{
                width: 100%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-size: 150px;
                font-family: sans-serif;
                font-weight: 1000;
                letter-spacing: 8px;
                cursor: default;
                margin-top: 6%;
            }
            .NotFundIconTextZero{
                color: red;
                font-size: 170px;
                font-family: monospace;
            }
            .NotFundBg .NotFundText{
                width: 100%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: start;
                color: white;
                font-size: 50px;
                font-family: sans-serif;
                letter-spacing: 8px;
                cursor: default;
                margin-top: -7%;
            }
            .NotFundBg .NotFundTextBtnBg{
                width: 100%;
                height: 25%;
                display: flex;
                justify-content: center;
                align-items: start;
                color: white;
                font-size: 20px;
                font-family: sans-serif;
                letter-spacing: 2px;
                cursor: default;
                margin-top: -8%;
            }
            .NotFundBg .NotFundTextBtn{
                width: 20%;
                height: 30%;
                border: 3px solid white;
                display: flex;
                justify-content: start;
                align-items: center;
                padding: 0 0 0 20px;
                box-sizing: border-box;
                cursor: pointer;
                border-radius: 10px;
                font-weight: 600;
                transition: 0.2s all;
            }
            .NotFundBg .NotFundTextBtn:hover{
                background-color: white;
                color: red;
                transition: 0.2s all;
            }
            .NotFundBg .fa-bounce{
                color: red;
            }
        </style>
      
          <div class="NotFundBg conentsBgItemsWrapper">
            <div class="NotFundIconGif"></div>
            <div class="NotFundIcon">
              4<span class="NotFundIconTextZero">0</span>4
            </div>
            <div class="NotFundText">Not Found</div>
            <div class="NotFundTextBtnBg">
              <div class="NotFundTextBtn">Back to Home&nbsp; <i class="fa-solid fa-chevron-right"></i></div>
            </div>
          </div>
            `;

                document.querySelector("title").innerHTML = "404 Not Found";
                console.error('%c' + "404 Not Found \n\n\n\n" + `Back to Home \nhttp://${location.host}/?/Home`, 'font-size: 20px; color: yellow; font-weight: 1000; ');
                // console.warn("404 Not Found \n\n" + `🔶Back to Home🔶 \nhttp://${location.host}/?/Home`);
                document.querySelector(".NotFundTextBtn").addEventListener("click", () => {
                    location = `http://${location.host}/?/Home`;
                })
            }
        }







        if (location.href.endsWith("index.html")) {
            location = `.`;
        } else if (location.href.endsWith(`/?/Home`)) {
            scrollResertBtnSend()
            sendNavBarColor1()
            FUNCfooterBarSendValue()
            let link = document.createElement('script');
            link.src = `Contents/Home/Home.js`;
            document.body.appendChild(link);

            // let LiveStreamBarLink = document.createElement('script');
            // LiveStreamBarLink.setAttribute("src", "Live-Stream/Live-Stream-card.js");
            // document.body.appendChild(LiveStreamBarLink);

        } else if (location.href.endsWith(`/?/News`)) {
            scrollResertBtnSend()
            sendNavBarColor2()
            FUNCfooterBarSendValue()
            let link = document.createElement('script');
            link.src = `Contents/News/News.js`;
            document.body.appendChild(link);

        } else if (location.href.endsWith(`/?/Genres`)) {
            scrollResertBtnSend()
            sendNavBarColor2()
            FUNCfooterBarSendValue()
            let link = document.createElement('script');
            link.src = `Contents/Genres/Genres.js`;
            document.body.appendChild(link);

        } else if (location.href.includes(`/?/Profile`)) {
            location.reload;
            scrollResertBtnSend()
            sendNavBarColor2()
            FUNCfooterBarSendValue()
            document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/Home`);
            document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/News`);
            document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/Genres`);
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");
            document.querySelector("title").innerHTML = `${document.querySelector("title").innerHTML} - Profile`;

            document.querySelector(".navBarBg").style.display = 'flex';

            let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
            navBarMenuItems.forEach(function (element) {
                element.style.display = 'flex';
            });


            if (location.href.endsWith(`/Profile`)) {
                location.reload;

                let link = document.createElement('script');
                link.src = `AdminProfiles/Profile.js`;
                document.body.appendChild(link);


            } else if (location.href.endsWith(`/Programmer`)) {
                location.reload;
                document.querySelector("title").innerHTML = `${document.querySelector("title").innerHTML} | Programmer`;
                let link = document.createElement('script');
                link.src = `AdminProfiles/Admin/Programmer/Programmer.js`;
                document.body.appendChild(link);


            } else if (location.href.endsWith(`/Owner`)) {
                location.reload;
                document.querySelector("title").innerHTML = `${document.querySelector("title").innerHTML} | Owner`;
                let link = document.createElement('script');
                link.src = `AdminProfiles/Admin/Manager/Manager.js`;
                document.body.appendChild(link);
            } else (
                getPage404Seand()
            )

        } else if (location.href.endsWith(`/?/Live-Stream`)) {
            location.reload;
            scrollResertBtnSend()
            sendNavBarColor2()
            FUNCfooterBarSendValue()
            document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/Home`);
            document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/News`);
            document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/Genres`);
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");
            document.querySelector("title").innerHTML = `${document.querySelector("title").innerHTML} - Live Stream`;

            document.querySelector(".navBarBg").style.display = 'flex';

            let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
            navBarMenuItems.forEach(function (element) {
                element.style.display = 'flex';
            });

            let LiveStreamBarLinkPage = document.createElement('script');
            LiveStreamBarLinkPage.setAttribute("src", "Live-Stream/Live-Stream.js");
            document.body.appendChild(LiveStreamBarLinkPage);



        } else if (location.href.endsWith(`/?/Message`)) {
            scrollResertBtnSend()
            sendNavBarColor2()
            FUNCfooterBarSendValue()
            document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/Home`);
            document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/News`);
            document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/Genres`);
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");


            let MessageSetJs = document.createElement('script');
            MessageSetJs.setAttribute("src", "Contents/Message/Message.js");
            document.body.appendChild(MessageSetJs);



        } else {
            getPage404Seand()
        }



    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });



document.querySelector("body").innerHTML += `

  <div class="navBarUnicalMenuItemMenusBarBg">
  <div class="navBarUnicalMenuItemMenusBgCloseBtn" onclick="navBarUnicalMenuItemMenusCloseBtn()"></div>
  <div class="navBarUnicalMenuItemMenusBg">
    <div class="UnicalMenuItemTitleBg">
      <div class="UnicalMenuItemTitleCloseBtnBg" onclick="navBarUnicalMenuItemMenusCloseBtn()"><i class="fa-solid fa-xmark"></i></div>
      <div class="UnicalMenuItemTitleTextBg">Menu</div>
    </div>
    <div class="UnicalMenuItemsAllBg">
      <a href="." class="UnicalMenuItemBg">Boshiga qaytish</a>
      <a href="./?/Message" class="UnicalMenuItemBg">Admin bilan bog'lanish</a>
      <a href="./?/Profile" class="UnicalMenuItemBg">Vakolatli Shaxslar</a>
      <a href="./?/Anime/Edit" class="UnicalMenuItemBg">Anime editlar</a>
      <a href="./?/About" class="UnicalMenuItemBg">Web-Sayt haqida</a>
    </div>
  </div>
  </div>
  
  `



let navBarUnicalMenuItemMenusBarValue = false

function navBarUnicalMenuItemMenusGetBtn() {
    if (navBarUnicalMenuItemMenusBarValue === true) {
        navBarUnicalMenuItemMenusBarValue = false
    } else if (navBarUnicalMenuItemMenusBarValue === false) {
        navBarUnicalMenuItemMenusBarValue = true
    } else {
        navBarUnicalMenuItemMenusBarValue = true
    }
    navBarUnicalMenuItemMenusGetFuncOwn()
}

function navBarUnicalMenuItemMenusCloseBtn() {
    navBarUnicalMenuItemMenusBarValue = false
    navBarUnicalMenuItemMenusGetFuncOwn()
}
function navBarUnicalMenuItemMenusGetFuncOwn() {
    document.querySelector(".navBarUnicalMenuItemMenusBarBg").style.display = "flex"
    if (navBarUnicalMenuItemMenusBarValue === true) {
        setTimeout(() => {
            document.querySelector(".navBarUnicalMenuItemMenusBarBg").style.opacity = "1"
            document.querySelector(".navBarUnicalMenuItemMenusBg").style.marginRight = "0px"
        }, 200);
    } else if (navBarUnicalMenuItemMenusBarValue === false) {
        document.querySelector(".navBarUnicalMenuItemMenusBg").style.marginRight = "-700px"
        setTimeout(() => {
            document.querySelector(".navBarUnicalMenuItemMenusBarBg").style.opacity = "0"
            setTimeout(() => {
                document.querySelector(".navBarUnicalMenuItemMenusBarBg").style.display = "none"
            }, 400);
        }, 100);
    } else {

    }
}

