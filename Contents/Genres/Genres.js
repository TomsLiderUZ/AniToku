location.reload
document.querySelector(".navBarMenuItem_1").setAttribute("href", `http://${location.host}/?/Home`);
document.querySelector(".navBarMenuItem_2").setAttribute("href", `http://${location.host}/?/News`);
document.querySelector(".navBarMenuItem_3").removeAttribute("href");
document.querySelector(".navBarMenuItem_3").classList.add("navBarMenuItemOwn");
document.querySelector(".navBarMenuItem_3").classList.remove("navBarMenuItemNotOwn");
document.querySelector("title").innerHTML = `${document.querySelector("title").innerHTML} - Janrlar`;
document.querySelector(".navBarBg").style.display = 'flex';
let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
navBarMenuItems.forEach(function (element) {
  element.style.display = 'flex';
});




let setContentGenresPageValues = `

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<hr>
<h1 align="center">Janrlar bo'limi hali yasalmoqda !</h1>
<hr>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


`;





let setContentGenresPage = `

    ${setContentGenresPageValues}

`;
document.querySelector(".conentsBg").innerHTML = setContentGenresPage;