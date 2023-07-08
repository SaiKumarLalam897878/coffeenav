window.addEventListener("scroll", function(){
    var menu = document.getElementById("navbar");
    menu.classList.toggle('scrolled', window.scrollY > 10);
});