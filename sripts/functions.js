
var iconmenu = document.getElementById("icon_menu")
const menu = document.getElementById("menu_interno")

window.onload = function (){

    iconmenu.addEventListener('click', clicaMenu);

}


function clicaMenu(){
    // console.log(menu.style.display.length)
    // menu.style.display="block"
     var a = menu.style.display
    if(menu){
       
        console.log(a)
        if(a==""||a=="none"){
           menu.style.display="block"
            console.log("none")
        }
        if(a=="block"){
           menu.style.display="none"
            console.log("block")
        }
    }
  
};
