function interpretarcodigo() {

    var areaHTML = document.getElementById('areaHTML');
    var codexist = document.getElementById('AreaView');
    codexist.innerHTML =  areaHTML.value;

    var areaCSS = document.getElementById('areaCSS');
    var CSSexist = document.getElementById('estilo2');
    CSSexist.innerHTML= areaCSS.value;
}

var areaHTML = document.getElementById('areaHTML');
areaHTML.addEventListener("input",interpretarcodigo);

var areaCSS = document.getElementById('areaCSS');
areaCSS.addEventListener("input",interpretarcodigo);
