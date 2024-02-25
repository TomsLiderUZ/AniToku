
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var CaruselValue = JSON.parse(this.responseText);

        let caruselTitle1 = CaruselValue.C1.Name
        let caruselTitle2 = CaruselValue.C2.Name
        let caruselTitle3 = CaruselValue.C3.Name
        let caruselTitle4 = CaruselValue.C4.Name
        let caruselTitle5 = CaruselValue.C5.Name
        let caruselTitle6 = CaruselValue.C6.Name



        let caruselAbout1 = CaruselValue.C1.About
        let caruselAbout2 = CaruselValue.C2.About
        let caruselAbout3 = CaruselValue.C3.About
        let caruselAbout4 = CaruselValue.C4.About
        let caruselAbout5 = CaruselValue.C5.About
        let caruselAbout6 = CaruselValue.C6.About



        let caruselURL1 = "?Anime/play?=" + CaruselValue.C1.URL
        let caruselURL2 = "?Anime/play?=" + CaruselValue.C2.URL
        let caruselURL3 = "?Anime/play?=" + CaruselValue.C3.URL
        let caruselURL4 = "?Anime/play?=" + CaruselValue.C4.URL
        let caruselURL5 = "?Anime/play?=" + CaruselValue.C5.URL
        let caruselURL6 = "?Anime/play?=" + CaruselValue.C6.URL

        

        let caruselIMG1 = "Animes/Carusel/IMG/" + CaruselValue.C1.Image
        let caruselIMG2 = "Animes/Carusel/IMG/" + CaruselValue.C2.Image
        let caruselIMG3 = "Animes/Carusel/IMG/" + CaruselValue.C3.Image
        let caruselIMG4 = "Animes/Carusel/IMG/" + CaruselValue.C4.Image
        let caruselIMG5 = "Animes/Carusel/IMG/" + CaruselValue.C5.Image
        let caruselIMG6 = "Animes/Carusel/IMG/" + CaruselValue.C6.Image



        let caruselBgIMG1 = "Animes/Carusel/BgIMG/" + CaruselValue.C1.BgImage
        let caruselBgIMG2 = "Animes/Carusel/BgIMG/" + CaruselValue.C2.BgImage
        let caruselBgIMG3 = "Animes/Carusel/BgIMG/" + CaruselValue.C3.BgImage
        let caruselBgIMG4 = "Animes/Carusel/BgIMG/" + CaruselValue.C4.BgImage
        let caruselBgIMG5 = "Animes/Carusel/BgIMG/" + CaruselValue.C5.BgImage
        let caruselBgIMG6 = "Animes/Carusel/BgIMG/" + CaruselValue.C6.BgImage





        let setContentHomePage = `

        <div class="contentCaruselBg">
          <div class="contentCaruselPageBackBtnBg contentCaruselPageBtnBg">
            <div class="contentCaruselPageBackBtn">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
          </div>
          <div class="contentCaruselPageCenterItem">
            <div class="contentCaruselPageItemsBg">
              <div class="contentCaruselPage_1 contentCaruselPageOwn contentCaruselPage">
                
                <div class="contentCaruselPageItmes">
                  <div class="contentCaruselPageLeftItem">
                    <div class="contentCaruselPageLeftItemTitel">${caruselTitle1}</div>
                    <div class="contentCaruselPageLeftItemAbout">
                      ${caruselAbout1}
                    </div>
                    <div class="contentCaruselPageLeftItemBtnBg">
                      <a href="${caruselURL1}" class="contentCaruselPageLeftItemBtn"><i class="fa-solid fa-eye"></i>&nbsp;Ko'rish</a>
                    </div>
                  </div>
                  <div class="contentCaruselPageRightItem">
                    <div class="contentCaruselPageRightItemImgBg" style="background-image: url('${caruselIMG1}');">
                      
                    </div>
                  </div>
                </div>
    
              </div>
              <div class="contentCaruselPage_2 contentCaruselPageNotOwn contentCaruselPage">
                
                <div class="contentCaruselPageItmes">
                  <div class="contentCaruselPageLeftItem">
                    <div class="contentCaruselPageLeftItemTitel">${caruselTitle2}</div>
                    <div class="contentCaruselPageLeftItemAbout">
                      ${caruselAbout2}
                    </div>
                    <div class="contentCaruselPageLeftItemBtnBg">
                      <a href="${caruselURL2}" class="contentCaruselPageLeftItemBtn"><i class="fa-solid fa-eye"></i>&nbsp;Ko'rish</a>
                    </div>
                  </div>
                  <div class="contentCaruselPageRightItem">
                    <div class="contentCaruselPageRightItemImgBg" style="background-image: url('${caruselIMG2}');">
                      
                    </div>
                  </div>
                </div>
    
              </div>
              <div class="contentCaruselPage_3 contentCaruselPageNotOwn contentCaruselPage">
    
                <div class="contentCaruselPageItmes">
                  <div class="contentCaruselPageLeftItem">
                    <div class="contentCaruselPageLeftItemTitel">${caruselTitle3}</div>
                    <div class="contentCaruselPageLeftItemAbout">
                      ${caruselAbout3}
                    </div>
                    <div class="contentCaruselPageLeftItemBtnBg">
                      <a href="${caruselURL3}" class="contentCaruselPageLeftItemBtn"><i class="fa-solid fa-eye"></i>&nbsp;Ko'rish</a>
                    </div>
                  </div>
                  <div class="contentCaruselPageRightItem">
                    <div class="contentCaruselPageRightItemImgBg" style="background-image: url('${caruselIMG3}');">
                      
                    </div>
                  </div>
                </div>
    
              </div>
              <div class="contentCaruselPage_4 contentCaruselPageNotOwn contentCaruselPage">
    
                <div class="contentCaruselPageItmes">
                  <div class="contentCaruselPageLeftItem">
                    <div class="contentCaruselPageLeftItemTitel">${caruselTitle4}</div>
                    <div class="contentCaruselPageLeftItemAbout">
                      ${caruselAbout4}
                    </div>
                    <div class="contentCaruselPageLeftItemBtnBg">
                      <a href="${caruselURL4}" class="contentCaruselPageLeftItemBtn"><i class="fa-solid fa-eye"></i>&nbsp;Ko'rish</a>
                    </div>
                  </div>
                  <div class="contentCaruselPageRightItem">
                    <div class="contentCaruselPageRightItemImgBg" style="background-image: url('${caruselIMG4}');">
                      
                    </div>
                  </div>
                </div>
    
              </div>
              <div class="contentCaruselPage_5 contentCaruselPageNotOwn contentCaruselPage">
    
                <div class="contentCaruselPageItmes">
                  <div class="contentCaruselPageLeftItem">
                    <div class="contentCaruselPageLeftItemTitel">${caruselTitle5}</div>
                    <div class="contentCaruselPageLeftItemAbout">
                      ${caruselAbout5}
                    </div>
                    <div class="contentCaruselPageLeftItemBtnBg">
                      <a href="${caruselURL5}" class="contentCaruselPageLeftItemBtn"><i class="fa-solid fa-eye"></i>&nbsp;Ko'rish</a>
                    </div>
                  </div>
                  <div class="contentCaruselPageRightItem">
                    <div class="contentCaruselPageRightItemImgBg" style="background-image: url('${caruselIMG5}');">
                      
                    </div>
                  </div>
                </div>
    
              </div>
              <div class="contentCaruselPage_6 contentCaruselPageNotOwn contentCaruselPage">
    
                <div class="contentCaruselPageItmes">
                  <div class="contentCaruselPageLeftItem">
                    <div class="contentCaruselPageLeftItemTitel">${caruselTitle6}</div>
                    <div class="contentCaruselPageLeftItemAbout">
                      ${caruselAbout6}
                    </div>
                    <div class="contentCaruselPageLeftItemBtnBg">
                      <a href="${caruselURL5}" class="contentCaruselPageLeftItemBtn"><i class="fa-solid fa-eye"></i>&nbsp;Ko'rish</a>
                    </div>
                  </div>
                  <div class="contentCaruselPageRightItem">
                    <div class="contentCaruselPageRightItemImgBg" style="background-image: url('${caruselIMG6}');">
                      
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
            <div class="contentCaruselPageNumbersBg">
              <div class="contentCaruselPageNumber_1 contentCaruselPageNumber contentCaruselPageNumberOwn"></div>
              <div class="contentCaruselPageNumber_2 contentCaruselPageNumber"></div>
              <div class="contentCaruselPageNumber_3 contentCaruselPageNumber"></div>
              <div class="contentCaruselPageNumber_4 contentCaruselPageNumber"></div>
              <div class="contentCaruselPageNumber_5 contentCaruselPageNumber" ></div>
              <div class="contentCaruselPageNumber_6 contentCaruselPageNumber"></div>
            </div>
          </div>
          <div class="contentCaruselPageNextBtnBg contentCaruselPageBtnBg">
            <div class="contentCaruselPageNextBtn">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
    
    `
    document.querySelector(".conentsBg").innerHTML = setContentHomePage



    let contentCaruselPageNext = 1;
    let contentCaruselPageClicked = true
    
    // if (contentCaruselPageClicked === true) {
      let caruselInterval = setInterval(() => {
        contentCaruselPageNext += 1
    }, 20000);
    // }else if (contentCaruselPageClicked === false) {
      // clearInterval(caruselInterval)
    // }
    
    document.querySelector(".contentCaruselPageNumber_1").addEventListener("click", ()=>{
        contentCaruselPageNext = 1;
    });
    document.querySelector(".contentCaruselPageNumber_2").addEventListener("click", ()=>{
        contentCaruselPageNext = 2;
    });
    document.querySelector(".contentCaruselPageNumber_3").addEventListener("click", ()=>{
        contentCaruselPageNext = 3;
    });
    document.querySelector(".contentCaruselPageNumber_4").addEventListener("click", ()=>{
        contentCaruselPageNext = 4;
    });
    document.querySelector(".contentCaruselPageNumber_5").addEventListener("click", ()=>{
        contentCaruselPageNext = 5;
    });
    document.querySelector(".contentCaruselPageNumber_6").addEventListener("click", ()=>{
        contentCaruselPageNext = 6;
    });
    document.querySelector(".contentCaruselPageNextBtnBg").addEventListener("click", ()=>{
        if (contentCaruselPageClicked === true) {
            contentCaruselPageClicked = false
            contentCaruselPageNext += 1; 
            setTimeout(() => {
                contentCaruselPageClicked = true
            },500);
        }
    })
    document.querySelector(".contentCaruselPageBackBtnBg").addEventListener("click", ()=>{
        if (contentCaruselPageClicked === true) {
            contentCaruselPageClicked = false
            contentCaruselPageNext -= 1; 
            setTimeout(() => {
                contentCaruselPageClicked = true
            },500);
        }
    }) 
    setInterval(() => {
        switch (contentCaruselPageNext) {
            case 0:
                contentCaruselPageNext = 6;
                break;
            case 1:
                setTimeout(() => {
                    document.querySelector(".contentCaruselBg").style.backgroundImage = `url("${caruselBgIMG1}")`
                }, 300);
                document.querySelector(".contentCaruselPage_1").classList.add("contentCaruselPageOwn")
                document.querySelector(".contentCaruselPage_1").classList.remove("contentCaruselPageNotOwn")
        
                document.querySelector(".contentCaruselPage_2").classList.add("contentCaruselPageNotOwn")
                document.querySelector(".contentCaruselPage_2").classList.remove("contentCaruselPageOwn")
                document.querySelector(".contentCaruselPage_3").classList.add("contentCaruselPageNotOwn")
                document.querySelector(".contentCaruselPage_3").classList.remove("contentCaruselPageOwn")
                document.querySelector(".contentCaruselPage_4").classList.add("contentCaruselPageNotOwn")
                document.querySelector(".contentCaruselPage_4").classList.remove("contentCaruselPageOwn")
                document.querySelector(".contentCaruselPage_5").classList.add("contentCaruselPageNotOwn")
                document.querySelector(".contentCaruselPage_5").classList.remove("contentCaruselPageOwn")
                document.querySelector(".contentCaruselPage_6").classList.add("contentCaruselPageNotOwn")
                document.querySelector(".contentCaruselPage_6").classList.remove("contentCaruselPageOwn")
    
                document.querySelector(".contentCaruselPageNumber_1").classList.add("contentCaruselPageNumberOwn")
                document.querySelector(".contentCaruselPageNumber_2").classList.remove("contentCaruselPageNumberOwn")
                document.querySelector(".contentCaruselPageNumber_3").classList.remove("contentCaruselPageNumberOwn")
                document.querySelector(".contentCaruselPageNumber_4").classList.remove("contentCaruselPageNumberOwn")
                document.querySelector(".contentCaruselPageNumber_5").classList.remove("contentCaruselPageNumberOwn")
                document.querySelector(".contentCaruselPageNumber_6").classList.remove("contentCaruselPageNumberOwn")
                break;
            case 2:
            setTimeout(() => {
                document.querySelector(".contentCaruselBg").style.backgroundImage = `url("${caruselBgIMG2}")`
            }, 300);
            document.querySelector(".contentCaruselPage_2").classList.add("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_2").classList.remove("contentCaruselPageNotOwn")
    
            document.querySelector(".contentCaruselPage_1").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_1").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_3").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_3").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_4").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_4").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_5").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_5").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_6").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_6").classList.remove("contentCaruselPageOwn")
    
            document.querySelector(".contentCaruselPageNumber_1").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_2").classList.add("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_3").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_4").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_5").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_6").classList.remove("contentCaruselPageNumberOwn")
                break;
            case 3:
                setTimeout(() => {
                    document.querySelector(".contentCaruselBg").style.backgroundImage = `url("${caruselBgIMG3}")`
                }, 300);
            document.querySelector(".contentCaruselPage_3").classList.add("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_3").classList.remove("contentCaruselPageNotOwn")
    
            document.querySelector(".contentCaruselPage_1").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_1").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_2").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_2").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_4").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_4").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_5").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_5").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_6").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_6").classList.remove("contentCaruselPageOwn")
    
            document.querySelector(".contentCaruselPageNumber_1").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_2").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_3").classList.add("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_4").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_5").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_6").classList.remove("contentCaruselPageNumberOwn")
                break;
            case 4:
                setTimeout(() => {
                    document.querySelector(".contentCaruselBg").style.backgroundImage = `url("${caruselBgIMG4}")`
                }, 300);
            document.querySelector(".contentCaruselPage_4").classList.add("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_4").classList.remove("contentCaruselPageNotOwn")
    
            document.querySelector(".contentCaruselPage_1").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_1").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_3").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_3").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_2").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_2").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_5").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_5").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_6").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_6").classList.remove("contentCaruselPageOwn")
    
            document.querySelector(".contentCaruselPageNumber_1").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_2").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_3").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_4").classList.add("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_5").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_6").classList.remove("contentCaruselPageNumberOwn")
                break;
            case 5:
                setTimeout(() => {
                    document.querySelector(".contentCaruselBg").style.backgroundImage = `url("${caruselBgIMG5}")`
                }, 300);
            document.querySelector(".contentCaruselPage_5").classList.add("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_5").classList.remove("contentCaruselPageNotOwn")
    
            document.querySelector(".contentCaruselPage_1").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_1").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_3").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_3").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_4").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_4").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_2").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_2").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_6").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_6").classList.remove("contentCaruselPageOwn")
    
            document.querySelector(".contentCaruselPageNumber_1").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_2").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_3").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_4").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_5").classList.add("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_6").classList.remove("contentCaruselPageNumberOwn")
                break;
            case 6:
                setTimeout(() => {
                    document.querySelector(".contentCaruselBg").style.backgroundImage = `url("${caruselBgIMG6}")`
                }, 300);
            document.querySelector(".contentCaruselPage_6").classList.add("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_6").classList.remove("contentCaruselPageNotOwn")
    
            document.querySelector(".contentCaruselPage_1").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_1").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_3").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_3").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_4").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_4").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_5").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_5").classList.remove("contentCaruselPageOwn")
            document.querySelector(".contentCaruselPage_2").classList.add("contentCaruselPageNotOwn")
            document.querySelector(".contentCaruselPage_2").classList.remove("contentCaruselPageOwn")
    
            document.querySelector(".contentCaruselPageNumber_1").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_2").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_3").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_4").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_5").classList.remove("contentCaruselPageNumberOwn")
            document.querySelector(".contentCaruselPageNumber_6").classList.add("contentCaruselPageNumberOwn")
                break;
            case 7:
                contentCaruselPageNext = 1;
                break;
    
    
            default:
                break;
        }
    });





    };
    }

    xhr.open("GET", "../Animes/AnimeAbout/Carusel.json", true);
    xhr.send();










