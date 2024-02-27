



const currentYear = new Date().getFullYear(); 


let dataNumber = ""
let dataEmail = ""
let dataCurrentYear = ""
let dataLinkTelegram = ""
let dataLinkYoutube = ""
let dataLinkInstagram = ""


function FUNCdataNumber() {
    if (mainDataConfig.contact_number === " ") {
        dataNumber = "Number not available"
    }else if (mainDataConfig.contact_number === " ") {
        dataNumber = "Number not available"
    }else{
        dataNumber = mainDataConfig.contact_number
    }
}
function FUNCdataEmail() {
    if (mainDataConfig.contact_email === "") {
        dataEmail = "Email not available"
    }else if (mainDataConfig.contact_email === " ") {
        dataEmail = "Email not available"
    }else{
        dataEmail = mainDataConfig.contact_email
    }
}
function FUNCdataCurrentYear() {
    if (mainDataConfig.current_year === "") {
        dataCurrentYear = `${currentYear}`
    }else if (mainDataConfig.current_year === " ") {
        dataCurrentYear = `${currentYear}`
    }else{
        dataCurrentYear = mainDataConfig.current_year
    }
}


function FUNCdataLinkTelegram() {
    if (mainDataConfig.contact_telegram === "") {
        dataLinkTelegram = `.`
    }else if (mainDataConfig.contact_telegram === " ") {
        dataLinkTelegram = `.`
    }else{
        dataLinkTelegram = mainDataConfig.contact_telegram
    }
}
function FUNCdataLinkYoutube() {
    if (mainDataConfig.contact_youtube === "") {
        dataLinkYoutube = `.`
    }else if (mainDataConfig.contact_youtube === " ") {
        dataLinkYoutube = `.`
    }else{
        dataLinkYoutube = mainDataConfig.contact_youtube
    }
}
function FUNCdataLinkInstagram() {
    if (mainDataConfig.contact_youtube === "") {
        dataLinkInstagram = `.`
    }else if (mainDataConfig.contact_youtube === " ") {
        dataLinkInstagram = `.`
    }else{
        dataLinkInstagram = mainDataConfig.contact_youtube
    }
}




FUNCdataNumber()
FUNCdataEmail()
FUNCdataCurrentYear()
FUNCdataLinkTelegram()
FUNCdataLinkYoutube()
FUNCdataLinkInstagram()


let setContentPageFooterBar = `

    <div class="footerBarBg">
      <div class="footerBarTop">
        <div class="footerBarTopLeft">
          <div class="footerBarTopLeftTitleBg">
            Kontaktlar
          </div>

          <div class="footerBarTopLeftCardBg">
            <div class="footerBarTopLeftCardIconBg"><i class="fa-solid fa-envelope"></i></div>
            <div class="footerBarTopLeftCardTextBg">${dataEmail}</div>
          </div>
          <div class="footerBarTopLeftCardBg">
            <div class="footerBarTopLeftCardIconBg"><i class="fa-solid fa-square-phone-flip"></i></div>
            <div class="footerBarTopLeftCardTextBg">${dataNumber}</div>
          </div>

        </div>
        <div class="footerBarTopRight">
          <div class="footerBarTopRightTitleBg">
            Ijtimoiy tarmoqlar
          </div>
          <div class="footerBarTopRightLinksBg">
            <a href="${dataLinkTelegram}" target="_blank" class="footerBarTopRightLinkCard" title="Telegram"><i class="fa-brands fa-telegram"></i></a>
            <a href="${dataLinkYoutube}" target="_blank" class="footerBarTopRightLinkCard" title="Youtube"><i class="fa-brands fa-youtube"></i></a>
            <a href="${dataLinkInstagram}" target="_blank" class="footerBarTopRightLinkCard" title="Instagram"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footerBarBottom">© 2023 - ${dataCurrentYear} &nbsp;<a href="https://${location.host}" title="AkokitoMedia">${localStorage.getItem('dataLogoName')}</a>&nbsp;  &nbsp;|&nbsp; Sponsor &nbsp;<a href="https://ft-games.vercel.app/" target="_blank" title="FT GAMES">FT GAMES</a>&nbsp;</div>
    </div>

`;


