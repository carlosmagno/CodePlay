
const areaHTML = document.getElementById('areaHTMLqwerty831809');
const codexist = document.getElementById('AreaViewqwerty831809');
const areaCSS = document.getElementById('areaCSSqwerty831809');
const CSSexist = document.getElementById('estilo2qwerty831809');
var site;
function setSite(){
    site={
        nome:"projeto 1",
        html:"<h1>Titulo</h1>",
        css: "h1{color:blue;}" ,
        js:"function alerta(){alert('alerta')}"    
    }

    // Transformar o objeto em string e salvar em localStorage
    localStorage.setItem('site', JSON.stringify(site));
}
 function abreDIV(){
     var box = document.getElementById("box")
     box.style.display="block"
 }
var siteString;
var siteObj;
function getSite(){
    // Receber a string
    siteString = localStorage.getItem('site');
    // transformar em objeto novamente
    siteObj = JSON.parse(siteString);
    console.log(siteObj.nome);
    console.log(siteObj.html);
    console.log(siteObj.css);
    //areaHTML.innerHTML =  siteObj.html;
    interpretarcodigo2()
}

function interpretarcodigo2() {

    areaHTML.innerHTML =  siteObj.html;
    //localStorage.setItem("codeHTML",areaHTML.value)
    //localStorage.setItem("codeHTML",areaHTML.value)
    areaCSS.innerHTML= siteObj.css;
    //localStorage.setItem("codeCSS", areaCSS.value)
    //localStorage.setItem("codeCSS", areaCSS.value)
    
    //codexist.src += '';
}

function interpretarcodigo() {

    //codexist.innerHTML =  areaHTML.value;
    localStorage.setItem("codeHTML",areaHTML.value)

    //CSSexist.innerHTML= areaCSS.value;
    localStorage.setItem("codeCSS", areaCSS.value)
    
    codexist.src += '';
}

function recarregarPagina(){
    location.reload()
}

if(!window.location.href.endsWith("page.html")){

    areaHTML.addEventListener("input",interpretarcodigo);
    areaHTML.innerHTML = localStorage.getItem("codeHTML")
    areaCSS.addEventListener("input",interpretarcodigo);
    areaCSS.innerHTML = localStorage.getItem("codeCSS")
}
if(!window.location.href.endsWith("page.html")){

    areaHTML.addEventListener("input",interpretarcodigo);
    areaHTML.innerHTML = localStorage.getItem("codeHTML")
    areaCSS.addEventListener("input",interpretarcodigo);
    areaCSS.innerHTML = localStorage.getItem("codeCSS")
}


window.onload = function (){
    if(window.location.href.endsWith("page.html")){

        const corpopage = document.getElementById("corpopage")
        const estilo = document.getElementById("estilo")
        corpopage.innerHTML = localStorage.getItem("codeHTML")
        estilo.innerHTML = localStorage.getItem("codeCSS")

    }
}


function fechaView(){

    let areaView = document.getElementById('AreaViewqwerty831809')
    let areaHTML = document.getElementById('areaHTMLqwerty831809')
    let areaCSS = document.getElementById('areaCSSqwerty831809')
    let fechaView = document.getElementById('fechaView')

    if(!(areaView.style.display=="none")){
        console.log("pronto")
        areaView.style.display="none";
        localStorage.setItem("preview", "off")
        areaHTML.style.height="82vh";
        areaCSS.style.height="82vh";
        fechaView.style.backgroundColor="red";
        fechaView.style.textDecoration = "line-through";
        
    } else if (localStorage.getItem("preview")=="off"){
        areaView.style.display="block";
        localStorage.setItem("preview", "on")
        areaHTML.style.height="30vh";
        areaCSS.style.height="30vh";
        fechaView.style.backgroundColor="rgb(139, 73, 201)";
        fechaView.style.textDecoration = "none";
        

    }

}