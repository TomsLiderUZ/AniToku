let setContentNewsPageValues = `

Yangiliklar bo'limi hali yasalmoqda !

`;



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
            <a target="_blank" class="footerBarTopRightLinkCard footerBarTopRightLinkCardInstagram" title="Instagram"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footerBarBottom"> </div>
    </div>

`;






let setContentNewsPage = `

    ${setContentNewsPageValues}

    ${setContentPageFooterBar}

`;
document.querySelector(".conentsBg").innerHTML = setContentNewsPage;