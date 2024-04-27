// setInterval(() => {
    if (location.href.includes("file:/")) {
        setTimeout(() => {
            console.clear()
        }, 500);
        document.body.innerHTML = ""
    }
// });


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
        let footerBarLinkStyle = document.createElement('link');
        footerBarLinkStyle.setAttribute("rel", "stylesheet");
        footerBarLinkStyle.setAttribute("href", "Contents/FooterBar.css");
        document.head.appendChild(footerBarLinkStyle);


        function sendNavBarColor1() {
            setInterval(() => {
                if (document.querySelector(".conentsBg").scrollTop >= 1) {
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




        let version = app.config.document_version;



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




        let documentNavMenuContnet_1 = "";
        let documentNavMenuContnet_2 = "";
        let documentNavMenuContnet_3 = "";

        function FUNCdocumentNavMenuContnet_1() {
            if (app.data.nawBarMenus.menu_1.content === "") {
                documentNavMenuContnet_1 = "Menu-1"
            } else if (app.data.nawBarMenus.menu_1.content === " ") {
                documentNavMenuContnet_1 = "Menu-1"
            } else {
                documentNavMenuContnet_1 = app.data.nawBarMenus.menu_1.content
            }
        }
        function FUNCdocumentNavMenuContnet_2() {
            if (app.data.nawBarMenus.menu_2.content === "") {
                documentNavMenuContnet_2 = "Menu-2"
            } else if (app.data.nawBarMenus.menu_2.content === " ") {
                documentNavMenuContnet_2 = "Menu-2"
            } else {
                documentNavMenuContnet_2 = app.data.nawBarMenus.menu_2.content
            }
        }
        function FUNCdocumentNavMenuContnet_3() {
            if (app.data.nawBarMenus.menu_3.content === "") {
                documentNavMenuContnet_3 = "Menu-3"
            } else if (app.data.nawBarMenus.menu_3.content === " ") {
                documentNavMenuContnet_3 = "Menu-3"
            } else {
                documentNavMenuContnet_3 = app.data.nawBarMenus.menu_3.content
            }
        }


        FUNCdocumentNavMenuContnet_1()
        FUNCdocumentNavMenuContnet_2()
        FUNCdocumentNavMenuContnet_3()



        let documentNavMenuTitle_1 = "";
        let documentNavMenuTitle_2 = "";
        let documentNavMenuTitle_3 = "";



        function FUNCdocumentNavMenuTitle_1() {
            if (app.data.nawBarMenus.menu_1.title === "") {
                documentNavMenuTitle_1 = "Menu-1"
            } else if (app.data.nawBarMenus.menu_1.title === " ") {
                documentNavMenuTitle_1 = "Menu-1"
            } else {
                documentNavMenuTitle_1 = app.data.nawBarMenus.menu_1.title
            }
        }
        function FUNCdocumentNavMenuTitle_2() {
            if (app.data.nawBarMenus.menu_2.title === "") {
                documentNavMenuTitle_2 = "Menu-2"
            } else if (app.data.nawBarMenus.menu_2.title === " ") {
                documentNavMenuTitle_2 = "Menu-2"
            } else {
                documentNavMenuTitle_2 = app.data.nawBarMenus.menu_2.title
            }
        }
        function FUNCdocumentNavMenuTitle_3() {
            if (app.data.nawBarMenus.menu_3.title === "") {
                documentNavMenuTitle_3 = "Menu-3"
            } else if (app.data.nawBarMenus.menu_3.title === " ") {
                documentNavMenuTitle_3 = "Menu-3"
            } else {
                documentNavMenuTitle_3 = app.data.nawBarMenus.menu_3.title
            }
        }

        FUNCdocumentNavMenuTitle_1()
        FUNCdocumentNavMenuTitle_2()
        FUNCdocumentNavMenuTitle_3()


        let documentNavMenuURL_1 = "";
        let documentNavMenuURL_2 = "";
        let documentNavMenuURL_3 = "";

        function FUNCdocumentNavMenuURL_1() {
            if (app.data.nawBarMenus.menu_1.url === "") {
                documentNavMenuURL_1 = "Menu-1"
            } else if (app.data.nawBarMenus.menu_1.url === " ") {
                documentNavMenuURL_1 = "Menu-1"
            } else {
                documentNavMenuURL_1 = app.data.nawBarMenus.menu_1.url
            }
        }
        function FUNCdocumentNavMenuURL_2() {
            if (app.data.nawBarMenus.menu_2.url === "") {
                documentNavMenuURL_2 = "Menu-2"
            } else if (app.data.nawBarMenus.menu_2.url === " ") {
                documentNavMenuURL_2 = "Menu-2"
            } else {
                documentNavMenuURL_2 = app.data.nawBarMenus.menu_2.url
            }
        }
        function FUNCdocumentNavMenuURL_3() {
            if (app.data.nawBarMenus.menu_3.url === "") {
                documentNavMenuURL_3 = "Menu-3"
            } else if (app.data.nawBarMenus.menu_3.url === " ") {
                documentNavMenuURL_3 = "Menu-3"
            } else {
                documentNavMenuURL_3 = app.data.nawBarMenus.menu_3.url
            }
        }


        FUNCdocumentNavMenuURL_1()
        FUNCdocumentNavMenuURL_2()
        FUNCdocumentNavMenuURL_3()





        let navBarMenu_1 = documentNavMenuURL_1;
        let navBarMenu_2 = documentNavMenuURL_2;
        let navBarMenu_3 = documentNavMenuURL_3;



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
                mainDataLinkTelegram = `http://${location.host}/?/${navBarMenu_1}`
            } else if (app.config.contact_telegarm === " ") {
                mainDataLinkTelegram = `http://${location.host}/?/${navBarMenu_1}`
            } else {
                mainDataLinkTelegram = app.config.contact_telegarm
            }
        }
        function FUNCmainDataLinkYoutube() {
            if (app.config.contact_youtube === "") {
                mainDataLinkYoutube = `http://${location.host}/?/${navBarMenu_1}`
            } else if (app.config.contact_youtube === " ") {
                mainDataLinkYoutube = `http://${location.host}/?/${navBarMenu_1}`
            } else {
                mainDataLinkYoutube = app.config.contact_youtube
            }
        }
        function FUNCmainDataLinkInstagram() {
            if (app.config.contact_instagram === "") {
                mainDataLinkInstagram = `http://${location.host}/?/${navBarMenu_1}`
            } else if (app.config.contact_instagram === " ") {
                mainDataLinkInstagram = `http://${location.host}/?/${navBarMenu_1}`
            } else {
                mainDataLinkInstagram = app.config.contact_instagram
            }
        }




        FUNCmainDataNumber()
        FUNCmainDataEmail()
        FUNCmainDataCurrentYear()
        FUNCmainDataLinkTelegram()
        FUNCmainDataLinkYoutube()
        FUNCmainDataLinkInstagram()

        let setContentPageFooterBar = `

    <div class="footerBarBg">
      <div class="footerBarTop">
        <div class="footerBarTopLeft">
          <div class="footerBarTopLeftTitleBg">
            Kontaktlar
          </div>

          <div class="footerBarTopLeftCardBg">
            <div class="footerBarTopLeftCardIconBg"><i class="fa-solid fa-envelope"></i></div>
            <div class="footerBarTopLeftCardTextBg footerBarTopLeftCardTextEmailBg"> </div>
          </div>
          <div class="footerBarTopLeftCardBg">
            <div class="footerBarTopLeftCardIconBg"><i class="fa-solid fa-square-phone-flip"></i></div>
            <div class="footerBarTopLeftCardTextBg footerBarTopLeftCardTextNumberBg"> </div>
          </div>

        </div>
        <div class="footerBarTopRight">
          <div class="footerBarTopRightTitleBg">
            Ijtimoiy tarmoqlar
          </div>
          <div class="footerBarTopRightLinksBg">
            <a target="_blank" class="footerBarTopRightLinkCard footerBarTopRightLinkCardTelegram" title="Telegram"><i class="fa-brands fa-telegram"></i></a>
            <a target="_blank" class="footerBarTopRightLinkCard footerBarTopRightLinkCardYoutube" title="Youtube"><i class="fa-brands fa-youtube"></i></a>
            <a target="_blank" class="footerBarTopRightLinkCard footerBarTopRightLinkCardInstagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footerBarBottom">© 2023 - <div class="footerBarBottomYear"></div> &nbsp;<a class="footerBarBottomLink_1"></a>&nbsp;  &nbsp;|&nbsp;&nbsp;  Programmer &nbsp;<a href=".?/Profile/Programmer" target="_blank" title="TOMS LIDER">TOMS LIDER</a>&nbsp;</div>
    </div>

`;

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
      <a href="./?/${navBarMenu_1}" class="mainContentRow_LeftButtonBarBtnBg">Boshlash uchun bosing&nbsp;<i class="fa-solid fa-angle-right"></i></a>
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
      <a href="./?/${navBarMenu_3}" class="mainContentRow_LeftButtonBarBtnBg">Boshlash&nbsp;<i class="fa-solid fa-angle-right"></i></a>
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
      <a href="./?/${navBarMenu_1}" class="mainContentRow_LeftButtonBarBtnBg">Boshlash&nbsp;<i class="fa-solid fa-angle-right"></i></a>
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






        function scrollResertBtnSend() {
            document.querySelector(".body").innerHTML +=
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
                document.querySelector(".conentsBg").scrollTop = 0;
            })


            setInterval(() => {
                if (document.querySelector(".conentsBg").scrollTop >= 120) {
                    document.querySelector(".contentsBgScrollRestartBtn").style.opacity = "1"
                    document.querySelector(".contentsBgScrollRestartBtn").style.marginRight = "0%"
                } else {
                    document.querySelector(".contentsBgScrollRestartBtn").style.opacity = "0"
                    document.querySelector(".contentsBgScrollRestartBtn").style.marginRight = "-200%"
                }
            });

        }




        document.querySelector(".navBarLogo").innerHTML = documentLogName;
        document.querySelector(".navBarLogo").setAttribute("href", `http://${location.host}/?/${navBarMenu_1}`);

        document.querySelector(".navBarMenuItem_1").textContent = documentNavMenuContnet_1;
        document.querySelector(".navBarMenuItem_2").textContent = documentNavMenuContnet_2;
        document.querySelector(".navBarMenuItem_3").textContent = documentNavMenuContnet_3;

        document.querySelector(".navBarBg").style.display = 'flex';

        let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
        navBarMenuItems.forEach(function (element) {
            element.style.display = 'flex';
        });



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
                FUNCfooterBarSendValue()
                scrollResertBtnSend()
                sendNavBarColor1()
                document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/${navBarMenu_1}`);
                document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/${navBarMenu_2}`);
                document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/${navBarMenu_3}`);
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
            ${setContentPageFooterBar}
 
            `
            } else {
                document.querySelector(".body").innerHTML =
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
                console.error('%c' + "404 Not Found \n\n\n\n" + `Back to Home \nhttp://${location.host}/?/${navBarMenu_1}`, 'font-size: 20px; color: yellow; font-weight: 1000; ');
                // console.warn("404 Not Found \n\n" + `🔶Back to Home🔶 \nhttp://${location.host}/?/${navBarMenu_1}`);
                document.querySelector(".NotFundTextBtn").addEventListener("click", () => {
                    location = `http://${location.host}/?/${navBarMenu_1}`;
                })
            }
        }







        if (location.href.endsWith("index.html")) {
            location = `.`;
        } else if (location.href.endsWith(`/?/${navBarMenu_1}`)) {
            location.reload
            FUNCfooterBarSendValue()
            scrollResertBtnSend()
            sendNavBarColor1()
            document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/${navBarMenu_2}`);
            document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/${navBarMenu_3}`);
            document.querySelector(".navBarMenuItem_1").removeAttribute("href");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
            document.querySelector("title").innerHTML = `${documentTitleName} - ${documentNavMenuTitle_1}`;

            document.querySelector(".navBarBg").style.display = 'flex';

            let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
            navBarMenuItems.forEach(function (element) {
                element.style.display = 'flex';
            });


            let link = document.createElement('script');
            link.src = `Contents/${navBarMenu_1}.js`;
            document.body.appendChild(link);

            let LiveStreamBarLink = document.createElement('script');
            LiveStreamBarLink.setAttribute("src", "Live-Stream/Live-Stream-card.js");
            document.body.appendChild(LiveStreamBarLink);



        } else if (location.href.endsWith(`/?/${navBarMenu_2}`)) {
            location.reload;
            FUNCfooterBarSendValue()
            scrollResertBtnSend()
            sendNavBarColor2()
            document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/${navBarMenu_1}`);
            document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/${navBarMenu_3}`);
            document.querySelector(".navBarMenuItem_2").removeAttribute("href");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
            document.querySelector("title").innerHTML = `${documentTitleName} - ${documentNavMenuTitle_2}`;

            document.querySelector(".navBarBg").style.display = 'flex';

            let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
            navBarMenuItems.forEach(function (element) {
                element.style.display = 'flex';
            });



            let link = document.createElement('script');
            link.src = `Contents/${navBarMenu_2}.js`;
            document.body.appendChild(link);

        } else if (location.href.endsWith(`/?/${navBarMenu_3}`)) {
            location.reload;
            FUNCfooterBarSendValue()
            scrollResertBtnSend()
            sendNavBarColor2()
            document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/${navBarMenu_1}`);
            document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/${navBarMenu_2}`);
            document.querySelector(".navBarMenuItem_3").removeAttribute("href");
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");
            document.querySelector("title").innerHTML = `${documentTitleName} - ${documentNavMenuTitle_3}`;

            document.querySelector(".navBarBg").style.display = 'flex';

            let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
            navBarMenuItems.forEach(function (element) {
                element.style.display = 'flex';
            });



            let link = document.createElement('script');
            link.src = `Contents/${navBarMenu_3}.js`;
            document.body.appendChild(link);

        } else if (location.href.includes(`/?/Profile`)) {
            location.reload;
            FUNCfooterBarSendValue()
            scrollResertBtnSend()
            sendNavBarColor2()
            document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/${navBarMenu_1}`);
            document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/${navBarMenu_2}`);
            document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/${navBarMenu_3}`);
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");
            document.querySelector("title").innerHTML = `${documentTitleName} - Profile`;

            document.querySelector(".navBarBg").style.display = 'flex';

            let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
            navBarMenuItems.forEach(function (element) {
                element.style.display = 'flex';
            });


            if (location.href.endsWith(`/Profile`)) {
                location.reload;
                FUNCfooterBarSendValue()
                let link = document.createElement('script');
                link.src = `AdminProfiles/Profile.js`;
                document.body.appendChild(link);


            } else if (location.href.endsWith(`/Programmer`)) {
                location.reload;
                document.querySelector("title").innerHTML = `${documentTitleName} - Profile | Programmer`;
                let link = document.createElement('script');
                link.src = `AdminProfiles/Admin/Programmer/Programmer.js`;
                document.body.appendChild(link);


            } else if (location.href.endsWith(`/Owner`)) {
                location.reload;
                document.querySelector("title").innerHTML = `${documentTitleName} - Profile | Owner`;
                let link = document.createElement('script');
                link.src = `AdminProfiles/Admin/Manager/Manager.js`;
                document.body.appendChild(link);
            } else (
                getPage404Seand()
            )

        } else if (location.href.endsWith(`/?/Live-Stream`)) {
            location.reload;
            FUNCfooterBarSendValue()
            scrollResertBtnSend()
            sendNavBarColor2()
            document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/${navBarMenu_1}`);
            document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/${navBarMenu_2}`);
            document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/${navBarMenu_3}`);
            document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn");
            document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn");
            document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn");
            document.querySelector("title").innerHTML = `${documentTitleName} - Live Stream`;

            document.querySelector(".navBarBg").style.display = 'flex';

            let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
            navBarMenuItems.forEach(function (element) {
                element.style.display = 'flex';
            });

            let LiveStreamBarLinkPage = document.createElement('script');
            LiveStreamBarLinkPage.setAttribute("src", "Live-Stream/Live-Stream.js");
            document.body.appendChild(LiveStreamBarLinkPage);



        } else {
            getPage404Seand()
        }



    })
    .catch(error => {
        console.error('Xatolik yuz berdi:', error);
    });



document.querySelector(".body").innerHTML += `

  <div class="navBarUnicalMenuItemMenusBarBg">
  <div class="navBarUnicalMenuItemMenusBgCloseBtn" onclick="navBarUnicalMenuItemMenusCloseBtn()"></div>
  <div class="navBarUnicalMenuItemMenusBg">
    <div class="UnicalMenuItemTitleBg">
      <div class="UnicalMenuItemTitleCloseBtnBg" onclick="navBarUnicalMenuItemMenusCloseBtn()"><i class="fa-solid fa-xmark"></i></div>
      <div class="UnicalMenuItemTitleTextBg">Menu</div>
    </div>
    <div class="UnicalMenuItemsAllBg">
      <a href="." class="UnicalMenuItemBg">Boshiga qaytish</a>
      <a href="./?/Profile/Owner" class="UnicalMenuItemBg">Admin bilan bog'lanish</a>
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

