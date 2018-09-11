let  closeBtn = document.getElementById("closebtn");
let  hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function openMenu(){
    document.getElementById("vmSidenav").style.width = "250px";
    document.getElementById("sidenav-overlay").style.display = "inline";
})

closeBtn.addEventListener("click", function closeMenu(){
    document.getElementById("vmSidenav").style.width = "0px";
    document.getElementById("sidenav-overlay").style.display = "none";
})