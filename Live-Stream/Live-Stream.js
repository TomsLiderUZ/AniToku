fetch('../config.json')
  .then(response => response.json())
  .then(app => {
    setTimeout(() => {console.clear(); console.log('%c' + "Welcome", 'background-color: black; padding: 20px; border-radius: 20px; text-wrap: nowrap; font-size: 30px; color: white; font-weight: 1000; text-shadow: green 1.41px 1.41px, green 2px 0px, green 1.41px -1.41px, green 0px -2px, green -1.41px -1.41px, green -2px 0px, green -1.41px 1.41px, green 0px 2px;'); console.log('%c' + `${app.data.title.logoName}`, 'font-size: 40px; text-wrap: nowrap; color: red; font-weight: 1000; text-shadow: #ffffff 1.41px 1.41px, #ffffff 2px 0px, #ffffff 1.41px -1.41px, #ffffff 0px -2px, #ffffff -1.41px -1.41px, #ffffff -2px 0px, #ffffff -1.41px 1.41px, #ffffff 0px 2px;');setInterval(() => {console.clear(); console.log('%c' + "Welcome", 'background-color: black; padding: 20px; border-radius: 20px; text-wrap: nowrap; font-size: 30px; color: white; font-weight: 1000; text-shadow: green 1.41px 1.41px, green 2px 0px, green 1.41px -1.41px, green 0px -2px, green -1.41px -1.41px, green -2px 0px, green -1.41px 1.41px, green 0px 2px;'); console.log('%c' + `${app.data.title.logoName}`, 'font-size: 40px; text-wrap: nowrap; color: red; font-weight: 1000; text-shadow: #ffffff 1.41px 1.41px, #ffffff 2px 0px, #ffffff 1.41px -1.41px, #ffffff 0px -2px, #ffffff -1.41px -1.41px, #ffffff -2px 0px, #ffffff -1.41px 1.41px, #ffffff 0px 2px;');}, 25000);}, 15000);
  })
  .catch(error => {
    console.error('Xatolik yuz berdi:', error);
  });

// https://anitokulivestreamconfig.vercel.app/Config-Live-Stream.json

fetch('../Live-Stream/Config-Live-Stream.json')
  .then(response => response.json())
  .then(configData => {
    let setContentLivePageValues = `

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



    let setContentLivePage = `
            ${setContentLivePageValues}
            ${setContentPageFooterBar}
        `;
    document.querySelector(".conentsBg").innerHTML += setContentLivePage;
  })
  .catch(error => {
    console.error('Xatolik yuz berdi:', error);
  });