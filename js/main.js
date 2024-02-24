let navBarMenu_1 = "Home"
let navBarMenu_2 = "News"
let navBarMenu_3 = "Genres"
document.querySelector(".navBarLogo").setAttribute("href", `http://${location.host}/?=${navBarMenu_1}`);


let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
navBarMenuItems.forEach(function(element) {
    element.style.display = 'flex';
});




if (location.href.endsWith("index.html")) {
    location = `http://${location.host}/?=${navBarMenu_1}`
}else if (location.href.endsWith(`?=${navBarMenu_1}`)) {
    location.reload
    document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?=${navBarMenu_2}`);
    document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?=${navBarMenu_3}`);
    document.querySelector(".navBarMenuItem_1").removeAttribute("href");
    document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn")
    document.querySelector("title").innerHTML = "AkokitoMedia - Asosiy"

    let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
    navBarMenuItems.forEach(function(element) {
        element.style.display = 'flex';
    });
    let link = document.createElement('script');
    link.src = `Contents/${navBarMenu_1}.js`;
    document.body.appendChild(link);
    
}else if (location.href.endsWith(`?=${navBarMenu_2}`)) {
    location.reload
    document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?=${navBarMenu_1}`);
    document.querySelector(".navBarMenuItem_3").setAttribute("href", `http://${location.host}/?=${navBarMenu_3}`);
    document.querySelector(".navBarMenuItem_2").removeAttribute("href");
    document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn")
    document.querySelector("title").innerHTML = "AkokitoMedia - Yangiliklar"
    
    let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
    navBarMenuItems.forEach(function(element) {
        element.style.display = 'flex';
    });
    let link = document.createElement('script');
    link.src = `Contents/${navBarMenu_2}.js`;
    document.body.appendChild(link);

}else if (location.href.endsWith(`?=${navBarMenu_3}`)) {
    location.reload
    document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?=${navBarMenu_1}`);
    document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?=${navBarMenu_2}`);
    document.querySelector(".navBarMenuItem_3").removeAttribute("href");
    document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn")
    document.querySelector("title").innerHTML = "AkokitoMedia - Janrlar"
    
    let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
    navBarMenuItems.forEach(function(element) {
        element.style.display = 'flex';
    });
    let link = document.createElement('script');
    link.src = `Contents/${navBarMenu_3}.js`;
    document.body.appendChild(link);

}else{
    location.reload
    
    let url404 = window.location.href;
    let ipAddress404 = url404.split('/')[2];
    let queryString404 = url404.split('?')[1];
    let hashPart404 = url404.split('#')[1];
    
    if (queryString404 || hashPart404) {
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
    .NotFundBg .NotFundIcon{
        width: 100%;
        height: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 120px;
        font-family: sans-serif;
        font-weight: 1000;
        letter-spacing: 8px;
        cursor: default;
        margin-top: 6%;
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
        margin-top: -8%;
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
    
        <div class="NotFundBg">
      <div class="NotFundIcon">
        4<p class="fa-solid fa-ban fa-bounce">0</p>4
      </div>
      <div class="NotFundText">Not Fund</div>
      <div class="NotFundTextBtnBg">
        <div class="NotFundTextBtn">Back to Home&nbsp; <i class="fa-solid fa-chevron-right"></i></div>
      </div>
    </div>
        `
        document.querySelector("title").innerHTML = "404 Not Fund"
        console.warn("404 Not Fund \n\n"+`🔶Back to Home🔶 \nhttp://${location.host}/?=${navBarMenu_1}`)
        document.querySelector(".NotFundTextBtn").addEventListener("click", ()=>{
        location = `http://${location.host}/?=${navBarMenu_1}`
        })
    } else {
        location = `http://${location.host}/?=${navBarMenu_1}`
    }
}










