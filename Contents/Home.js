let setContentHomePage = `

        <div class="contentCaruselBg">
            <div class="contentCaruselPageBackBtnBg contentCaruselPageBtnBg">
              <div class="contentCaruselPageBackBtn">
                <i class="fa-solid fa-chevron-left"></i>
              </div>
            </div>
            <div class="contentCaruselPageItemsBg">
              <div class="contentCaruselPage_1 contentCaruselPageOwn contentCaruselPage"></div>
              <div class="contentCaruselPage_2 contentCaruselPageNotOwn contentCaruselPage"></div>
              <div class="contentCaruselPage_3 contentCaruselPageNotOwn contentCaruselPage"></div>
              <div class="contentCaruselPage_4 contentCaruselPageNotOwn contentCaruselPage"></div>
              <div class="contentCaruselPage_5 contentCaruselPageNotOwn contentCaruselPage"></div>
              <div class="contentCaruselPage_6 contentCaruselPageNotOwn contentCaruselPage"></div>
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
setInterval(() => {
    contentCaruselPageNext += 1
}, 5000);
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
            break;
        case 2:
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
            break;
        case 3:
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
            break;
        case 4:
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
            break;
        case 5:
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
            break;
        case 6:
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
            break;
        case 7:
            contentCaruselPageNext = 1;
            break;


        default:
            break;
    }
});