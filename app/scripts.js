let  closeBtn = document.getElementById("closebtn");
let  hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function openMenu(){
    document.getElementById("vmSidenav").style.width = "250px";
})
closeBtn.addEventListener("click", function closeMenu(){
    document.getElementById("vmSidenav").style.width = "0px";
})