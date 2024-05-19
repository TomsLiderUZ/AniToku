location.reload
document.querySelector("title").innerHTML = `${document.querySelector("title").innerHTML} - Admin bilan bog'lanish`;
document.querySelector(".navBarBg").style.display = 'flex';
let navBarMenuItems = document.querySelectorAll('.navBarMenuItem');
navBarMenuItems.forEach(function (element) {
    element.style.display = 'flex';
});
let SetCSSBarLinkStyle = document.createElement('link');
SetCSSBarLinkStyle.setAttribute("rel", "stylesheet");
SetCSSBarLinkStyle.setAttribute("href", "Contents/Message/style.css");
document.head.appendChild(SetCSSBarLinkStyle);







let setContentMesgPageValues = `

<div class="messagePageBarBg">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5dKKu3oCwk5B89Bh5HQc9c5FE8TZ5DXiW1o2uwMXCGngAGw/viewform?embedded=true" width="1000" height="1000" frameborder="0" marginheight="0" marginwidth="0"></iframe>
</div>


`;





let setContentMesgPage = `

    ${setContentMesgPageValues}

`;
document.querySelector(".conentsBg").innerHTML = setContentMesgPage;