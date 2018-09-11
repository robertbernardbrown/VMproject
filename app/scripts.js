let closeBtn = document.getElementById("closebtn"),
    hamburgerMenu = document.getElementById("hamburger-menu"),
    html = document.querySelector("html");

hamburgerMenu.addEventListener("click", function openMenu(){
    document.getElementById("vmSidenav").style.width = "250px";
    document.getElementById("sidenav-overlay").style.display = "inline";
    html.style.overflow = "hidden";
})

closeBtn.addEventListener("click", function closeMenu(){
    document.getElementById("vmSidenav").style.width = "0px";
    document.getElementById("sidenav-overlay").style.display = "none";
    html.style.overflow = "visible";
})