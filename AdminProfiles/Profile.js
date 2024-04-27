let setContentProfilePageValues = `
<div class="profileBarAllContentsBg conentsBgItemsWrapper">
  <div class="profileBarTitleCardsBg ">
  <i class="fa-solid fa-address-card"></i>&nbsp;Profillar
  </div>
  <div class="profileBarCardsBg">
  <a href=".?/Profile/Programmer" target="_blank" class="profileBarCardItemBg">
    <div class="profileBarCardItemTitle">Programmer&nbsp;<i class="fa-solid fa-crown fa-flip" style="color: gold;"></i></div>
    <div class="profileBarCardItemLogoBg">
      <div class="profileBarCardItemLogoImgBg">
        <img src="AdminProfiles/Admin/Programmer/img/ProgarmmerLogo_Name-TomsLider.png" alt="logo" class="profileBarCardItemLogoImg" width="100%">
      </div>
      <div class="profileBarCardItemLogoIconBg">
      <i class="fa-solid fa-newspaper"></i>
        <div class="profileBarCardItemLogoIconTextBg">Programmer&nbsp;<i class="fa-solid fa-code" style="color: red;"></i></div>
      </div>
    </div>

    <div class="profileBarCardItemContentBg">
      TOMS LIDER
    </div>
  </a>

  <a href=".?/Profile/Owner" target="_blank" class="profileBarCardItemBg">
    <div class="profileBarCardItemTitle">Owner&nbsp;<i class="fa-solid fa-crown fa-flip" style="color: gold;"></i></div>
    <div class="profileBarCardItemLogoBg">
      <div class="profileBarCardItemLogoImgBg">
        <img src="AdminProfiles/Admin/Manager/img/ManagerLogo_Name-AkakitoUz.jpg" alt="logo" class="profileBarCardItemLogoImg" width="100%">
      </div>
      <div class="profileBarCardItemLogoIconBg">
      <i class="fa-solid fa-newspaper"></i>
        <div class="profileBarCardItemLogoIconTextBg">Owner&nbsp;<i class="fa-solid fa-user-tie" style="color: red;"></i></div>
      </div>
    </div>

    <div class="profileBarCardItemContentBg">
      AKAKITO UZ
    </div>
  </a>
  </div>
</div>


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
            <a target="_blank" class="footerBarTopRightLinkCard footerBarTopRightLinkCardInstagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      
      <div class="footerBarBottom">© 2023 - <div class="footerBarBottomYear"></div> &nbsp;<a class="footerBarBottomLink_1"></a>&nbsp;  &nbsp;|&nbsp;&nbsp;  Programmer &nbsp;<a href=".?/Profile/Programmer" target="_blank" title="TOMS LIDER">TOMS LIDER</a>&nbsp;</div>
    </div>

`;



let setContentProfilePage = `

    ${setContentProfilePageValues}

    ${setContentPageFooterBar}

`;
document.querySelector(".conentsBg").innerHTML = setContentProfilePage;
