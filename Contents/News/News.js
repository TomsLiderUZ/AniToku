location.reload
document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/Home`);
document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?/Genres`);
document.querySelector(".navBarMenuItem_2").removeAttribute("href");
document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemOwn");
document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemNotOwn");
document.querySelector("title").innerHTML = `${document.querySelector("title").innerHTML} - Yangliklar`;
document.querySelector(".navBarBg").style.display = 'flex';
let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
navBarMenuItems.forEach(function (element) {
  element.style.display = 'flex';
});







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
`;

document.querySelector(".conentsBg").innerHTML = setContentNewsPage;


