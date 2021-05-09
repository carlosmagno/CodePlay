function interpretarcodigo() {

    var areaHTML = document.getElementById('areaHTML');
    var codexist = document.getElementById('AreaView');
    codexist.innerHTML =  areaHTML.value;

    var areaCSS = document.getElementById('areaCSS');
    var CSSexist = document.getElementById('estilo2');
    CSSexist.innerHTML= areaCSS.value;

   /*
    var areaJS = document.getElementById('areaJS');
    var JSexist = document.getElementById('code');
    document.getElementById('code').innerText = areaJS.value;
    */
}