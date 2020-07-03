$(document).ready(function(){
    $('.widget-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

function sidebarOpen() {
    let sideBar = document.getElementById("contentSidebar")
    sideBar.classList.add("d-block")
    let menuBar = document.getElementById("filterMenu")
    menuBar.classList.add("d-block")
}
function sidebarClose() {
    let sideBar = document.getElementById("contentSidebar")
    sideBar.classList.remove("d-block")
    let menuBar = document.getElementById("filterMenu")
    menuBar.classList.remove("d-block")
}