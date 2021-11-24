function interpretarcodigo() {

    var areaHTML = document.getElementById('areaHTMLqwerty831809');
    var codexist = document.getElementById('AreaViewqwerty831809');
    codexist.innerHTML =  areaHTML.value;
    localStorage.setItem("codeHTML",areaHTML.value)
    

    var areaCSS = document.getElementById('areaCSSqwerty831809');
    var CSSexist = document.getElementById('estilo2qwerty831809');
    CSSexist.innerHTML= areaCSS.value;
    localStorage.setItem("codeCSS", areaCSS.value)
    
    codexist.src += '';
    // setTimeout(function(){
    //     codexist.src += '';
    //  }, 3000);
    
}

function recarregarPagina(){
    location.reload()
}
if(window.location.href.endsWith("index.html")){
    var areaHTML = document.getElementById('areaHTMLqwerty831809');
    areaHTML.addEventListener("input",interpretarcodigo);
    areaHTML.innerHTML = localStorage.getItem("codeHTML")

    var areaCSS = document.getElementById('areaCSSqwerty831809');
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
