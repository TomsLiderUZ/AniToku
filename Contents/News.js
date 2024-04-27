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










let setContentNewsPageValues = `

<div class="contentNewsBg conentsBgItemsWrapper">
  <div class="contentNewsTitleBg"><i class="fa-solid fa-newspaper"></i>&nbsp;Yangliklar</div>
  <div class="contentNewsCardsBg"></div>
</div>

`;



function createCards(data) {
  const newsCardContainer = document.getElementsByClassName('contentNewsCardsBg')[0];



  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('contentNewsCardItem');


    let newsCardBgIMG = "";
    function FUNCnewsCardBgIMG() {
      if (item.Image.mode === "file") {
        if (item.Image.src === "") {
          newsCardBgIMG = "Animes/Alert-Imgs/Null.jpg";
        } else if (item.Image.src === " ") {
          newsCardBgIMG = "Animes/Alert-Imgs/Null.jpg";
        } else {
          newsCardBgIMG = "Animes/NewsImgs/" + item.Image.src;
        };
      } else if (item.Image.mode === "url") {
        if (item.Image.src === "") {
          newsCardBgIMG = "Animes/Alert-Imgs/Null.jpg";
        } else if (item.Image.src === " ") {
          newsCardBgIMG = "Animes/Alert-Imgs/Null.jpg";
        } else {
          newsCardBgIMG = item.Image.src;
        };
      } else {
        newsCardBgIMG = "Animes/Alert-Imgs/Error.jpg";
        console.error(`http://${location.host}/Animes/AnimeAbout/News.json faylida xatolik bor \n\nXatolik:\n{\n  "mode": "file" \nyoki\n   "mode": "url" \n} \nBo'lishi kerak`);
        alert(`http://${location.host}/Animes/AnimeAbout/News.json \nfaylida xatolik bor \n\nXatolik:\n{\n  "mode": "file" \nyoki\n   "mode": "url" \n} \nBo'lishi kerak`);
      }
    }
    FUNCnewsCardBgIMG()


    card.innerHTML = `
          <div class="contentNewsCardItemLeftBg">
            <div class="contentNewsCardItemLeftDateContentBg"><i class="fa-solid fa-calendar-days"></i>&nbsp; ${item.Date.year} / ${item.Date.month} / ${item.Date.day}  &nbsp;&nbsp;<i class="fa-solid fa-clock"></i> &nbsp;${item.Date.time}</div>
            <div class="contentNewsCardItemLeftContentBg">${item.About}</div>
          </div>
          <div class="contentNewsCardItemRightBg">
            <div class="contentNewsCardItemRightImg" style='background-image: url("${newsCardBgIMG}");'></div>
          </div>
    `;

    newsCardContainer.appendChild(card);
  });
}

fetch('../Animes/AnimeAbout/News.json')
  .then(response => response.json())
  .then(data => {
    createCards(data);
  });



let setContentNewsPage = `
    ${setContentNewsPageValues}
    ${setContentPageFooterBar}
`;

document.querySelector(".conentsBg").innerHTML = setContentNewsPage;


