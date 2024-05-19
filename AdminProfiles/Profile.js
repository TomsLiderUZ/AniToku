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





let setContentProfilePage = `

    ${setContentProfilePageValues}


`;
document.querySelector(".conentsBg").innerHTML = setContentProfilePage;
