let webSiteName = location.host;
console.log(webSiteName)
if (location.href.endsWith === location.host) {
    location = ".?=Home"
}else if (location.href.endsWith("index.html")) {
    location = ".?=Home"
}else if (location.href.endsWith("?=Home")) {
    location.reload
    document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn")
    document.querySelector("title").innerHTML = "AkokitoMedia - Asosiy"
}else if (location.href.endsWith("?=Genres")) {
    location.reload
    document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemOwn")

    document.querySelector("title").innerHTML = "AkokitoMedia - Janrlar"
}else if (location.href.endsWith("?=Subscriptions")) {
    location.reload
    document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_1").classList.remove("navBarMenuItemOwn")
    document.querySelector(".navBarMenuItem_2").classList.add("navBarMenuItemNotOwn")
    document.querySelector(".navBarMenuItem_2").classList.remove("navBarMenuItemOwn")
    document.querySelector("title").innerHTML = "AkokitoMedia - Obunalar"
}else{
    location.reload
    document.querySelector(".body").innerHTML = 
    `
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
    console.warn("404 Not Fund \n\n"+`🔶Back to Home🔶 \nhttp://${location.host}/?=Home`)
    document.querySelector(".NotFundTextBtn").addEventListener("click", ()=>{
        location = "?=Home"
    })
}



