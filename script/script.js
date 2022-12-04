let burger = document.getElementById("burger");
let burger_menu = document.getElementById("burger_menu");
let body = document.body;
let line_1 = document.getElementById("line_1");
let line_2 = document.getElementById("line_2");
let menu_section = document.querySelector(".menu_section");
menu_section.addEventListener("click", activate_menu);
burger.addEventListener("click", activate_menu);

function activate_menu(){
    burger_menu.classList.toggle("burger_menu_active");
    body.classList.toggle("body_active");
    line_1.classList.toggle("line_active_1");
    line_2.classList.toggle("line_active_2");
    menu_section.classList.toggle("menu_section_active");
}
