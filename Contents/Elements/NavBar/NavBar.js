let NavBarBarLinkStyle = document.createElement('link');
NavBarBarLinkStyle.setAttribute("rel", "stylesheet");
NavBarBarLinkStyle.setAttribute("href", "Contents/Elements/NavBar/style.css");
document.head.appendChild(NavBarBarLinkStyle);



let setContentPageNavBarBar = `

<div class="navBarBg">
<a class="navBarLogo"></a>
<div class="navBarMenus">
  <a class="navBarMenuItemNotOwn navBarMenuItem navBarMenuItem_1">Asosiy</a>
  <a class="navBarMenuItemNotOwn navBarMenuItem navBarMenuItem_2">Yangliklar</a>
  <a class="navBarMenuItemNotOwn navBarMenuItem navBarMenuItem_3">Janrlar</a>
</div>
<div class="navBarUnicalMenus">
  <div class="navBarUnicalMenuItem" onclick="navBarUnicalMenuItemMenusGetBtn()"><i class="fa-solid fa-bars"></i></div>
  <div class="navBarUnicalMenuItem"><i class="fa-solid fa-magnifying-glass"></i></div>
  <div class="navBarUnicalMenuItem"><i class="fa-solid fa-heart"></i></div>
</div>
</div>

`





let app = document.querySelector(".app").innerHTML

document.querySelector(".app").innerHTML = setContentPageNavBarBar + app