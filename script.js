//const { consoleOrigin } = require("firebase-tools/lib/api");

const areaHTML = document.getElementById('areaHTMLqwerty831809');
var codexist = document.getElementById('AreaViewqwerty831809');
const areaCSS = document.getElementById('areaCSSqwerty831809');
const CSSexist = document.getElementById('estilo2qwerty831809');
const areaJS = document.getElementById('areaJSqwerty831809');

var ListaProjetos = document.getElementById("ListaProjetos");
const btOKselectProject = document.getElementById("btOKselectProject");
var NovoProjeto = document.getElementById("NovoProjeto");
const btOKnewProject = document.getElementById("btOKnewProject");



var site;
var objetoProjetos = {};
var nomeProjeto;
var arrayProjetos;
var NomeProjeto = document.getElementById("NomeProjeto");
var NomePmudar;
var temp;
/*
if(NomeProjeto){
    
    NomeProjeto.addEventListener('click', function(){
       if(box.style.display=="block") {
           box.style.display="none"
       }
        
        temp= NomeProjeto.value
        NomeProjeto.removeAttribute("readonly")
        console.log("cliquei")
    });

    NomeProjeto.addEventListener('blur', function(){
        NomePmudar = NomeProjeto.value
        chamadaExcluir()
        chamadaRenomear()
        localStorage.setItem("Projeto Atual", NomePmudar)
        //console.log(NomePmudar)
    })
    
}

*/




function chamada(){
    arrayProjetos = []
   // nomeProjeto = NovoProjeto.value
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
        var a = arrayProjetos.some(compararNomes)
        if(a==true){
            NovoProjeto.value=""
            alert("Já existe um projeto com esse nome!")
        }else{
            gravarProjeto()
            //alert("Salvar projeto")
        }
    }else{
        gravarProjeto()
    }
 
}


function chamadaRenomear(){
    arrayProjetos = []
   // nomeProjeto = NovoProjeto.value
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
        var a = arrayProjetos.some(compararNomesRenomear)
        if(a==true){

            if(NomePmudar=temp){

            }else{
                NomeProjeto.value=""
                alert("Já existe um projeto com esse nome!")
            }

        }else{
            gravarProjetoRenomeado()
            localStorage.removeItem(temp)
            //alert("Salvar projeto")
        }
    }else{
        gravarProjetoRenomeado()
        localStorage.removeItem(temp)
    }
 
}

function gravarProjetoRenomeado(){
    nomeProjeto = NomePmudar
  
    //if(NomePmudar=temp){

    //}else{
        if(localStorage.getItem("Projetos")){

            if(nomeProjeto!=""){
                arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
                ListaProjetos.innerHTML=""
                arrayProjetos.push(nomeProjeto) //adiciona o novo elemento no array
                localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
                arrayProjetos.forEach(listarProjetos)
                setSite()
                console.log(4)
            }else{ console.log("Nome não pode ser string vazio")}
    
        } else {
            //Se o nome do projeto não está vazio
            if(nomeProjeto!=""){
                arrayProjetos.push(nomeProjeto) //adiciona elemento no array
                localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
                setSite()
                arrayProjetos.forEach(listarProjetos)
                //listarProjetosAoAbrir()    
                console.log(3)
            }else{ console.log("Nome não pode ser string vazio")}
    
        }
        //NovoProjeto.value=""
        alert("Seu Projeto foi renomeado!")
    //}
 
}

function isProject(value) {

    if(box.style.display=="block"){
        nomeProjeto = ListaProjetos.value
    }else{
        nomeProjeto = temp
    }
    
    return value!=nomeProjeto;
}
function chamadaExcluir(){

    if (window.confirm("Você realmente quer excluir o projeto?")) {
        
    
   
    arrayProjetos = []
    arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele

    if (arrayProjetos.length>1){
      var filtered = arrayProjetos.filter(isProject);
      excluirSite()
      NomeProjeto.value=''
      console.log("tem array com "+arrayProjetos.length+ " elementos" )
      console.log(filtered)
      console.log("Agora o array tem "+filtered.length+ " elementos" )
      localStorage.setItem("Projetos", JSON.stringify(filtered))
      localStorage.setItem("Projeto Atual", "")
      ListaProjetos.innerHTML=""
      filtered.forEach(listarProjetos)  
      
      areaHTML.value = ""
      areaCSS.value = ""
      areaJS.value = ""
      codexist.src += '';
    }else if(arrayProjetos.length==1){
        excluirSite()
        NomeProjeto.value=''
        localStorage.removeItem("Projetos")
        localStorage.removeItem("Projeto Atual")
        ListaProjetos.innerHTML=""
        console.log("não há array")

        areaHTML.value = ""
        areaCSS.value = ""
        areaJS.value = ""
        codexist.src += '';
        //localStorage.removeItem(nomeProjeto)
        
    }

}
      // filtrado é [12, 130, 44]
    /*
    var a = arrayProjetos.some(compararNomes)
    if(a==true){
        excluirSite()
        //arrayProjetos.slice(index)
        console.log("1111")
        console.log(index)
    }else{
        console.log("2222")      
    }
    */
}
var nomeProjetoRenomear;
function compararNomesRenomear(element, index, array){
    nomeProjetoRenomear = NomePmudar
    return element==nomeProjetoRenomear 
}

function compararNomes(element, index, array){
    nomeProjeto = NovoProjeto.value
    return element==nomeProjeto
}

function gravarProjeto(){
    nomeProjeto = NovoProjeto.value
  
   //arrayProjetos = []; 
    //Se já existe o array com os nomes dos projetos, 
    if(localStorage.getItem("Projetos")){

        if(nomeProjeto!=""){
            arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
            ListaProjetos.innerHTML=""
            arrayProjetos.push(nomeProjeto) //adiciona o novo elemento no array
            localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
            arrayProjetos.forEach(listarProjetos)
            setSite()
            console.log(4)
        }else{ console.log("Nome não pode ser string vazio")}

    } else {
        //Se o nome do projeto não está vazio
        if(nomeProjeto!=""){
            arrayProjetos.push(nomeProjeto) //adiciona elemento no array
            localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
            setSite()
            arrayProjetos.forEach(listarProjetos)
            //listarProjetosAoAbrir()    
            console.log(3)
        }else{ console.log("Nome não pode ser string vazio")}

    }
    NovoProjeto.value=""
    alert("Projeto Salvo com sucesso!")
}

var projetoSelecionado;

function selecionarSite(){

    areaCSS.value=""
    areaHTML.value=""
    projetoSelecionado = ListaProjetos.value
    NomeProjeto.value = projetoSelecionado
    localStorage.setItem("Projeto Atual", NomeProjeto.value)
    if(localStorage.getItem(NomeProjeto.value)){
        console.log("Projeto Existente")
        getSite()
        codexist.src += '';
    }else{
        console.log("Este projeto ainda não tem código!")
        codexist.src += '';
    }
    BtnProjetos()
}


function excluirSite(){

    projetoSelecionado = ListaProjetos.value;
    //Remove do localStorage
    localStorage.removeItem(projetoSelecionado)
    //Remove do array
    console.log("Projeto "  + projetoSelecionado +" excluído com sucesso!")
}
function listarProjetosAoAbrir(){
    var arrayProjetos1 = [];
    if(localStorage.getItem("Projetos")){
        arrayProjetos1= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetos1.forEach(listarProjetos)  
    }else{
        console.log("Não há projetos para listar")
    }
}

function listarProjetos(iten, index){
    var novo = document.createElement("option")
    novo.innerText= iten
    if(ListaProjetos){
        ListaProjetos.appendChild(novo)
    }
   
}

// Object.keys(objetoProjetos).forEach(function(item){
//     //console.log("Objeto: ", arrayProjetos);
//     console.log(item ,": ", objetoProjetos[item] );
    
//    });



function setSite(){
    if(!NomeProjeto.value==""){
        site={
            nome:NomeProjeto.value,
            html:areaHTML.value,
            css: areaCSS.value,
            js:areaJS.value // "window.onload = alert('teste de alerta')"    
        }
        // Transformar o objeto em string e salvar em localStorage
        localStorage.setItem(site.nome, JSON.stringify(site));
        getSite();
        codexist.src += '';
    }
  
}


var box = document.getElementById("box")
function BtnProjetos(){

    
    if(box.style.display=="block"){
      
        box.style.display="none"
    }else{
        console.log("tett")
        box.style.display="block"
        ListaProjetos.value=localStorage.getItem("Projeto Atual")
        console.log("esta parte funcionou")
    }
};

var siteString;
var siteObj;

function getSite(){
    var projetoAtual = localStorage.getItem("Projeto Atual")

    if(localStorage.getItem(projetoAtual)){
        siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
        areaHTML.value = siteObj.html;
        areaCSS.value = siteObj.css;
        areaJS.value = siteObj.js
    }
}

// function recarregarPagina(){
//     location.reload()
// }


var corpopage;
var estilo;
var codeJS;

window.onload = function (){


    listarProjetosAoAbrir()
    if(window.location.href.endsWith("page-view")||window.location.href.endsWith("page-view/")){
        var projetoAtual = localStorage.getItem("Projeto Atual")
        siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
        corpopage = document.getElementById("corpopage")
        estilo = document.getElementById("estilo")
        codeJS = document.getElementById('codejs')
        
        if(siteObj){
            corpopage.innerHTML = siteObj.html;
            estilo.innerHTML = siteObj.css; 
            var scrp = document.createElement('script')
            scrp.text = siteObj.js
            document.body.appendChild(scrp)
        }
    }

    if(!window.location.href.endsWith("page-view")||(!window.location.href.endsWith("page-view/"))){
        if(localStorage.getItem("Projeto Atual")&&localStorage.getItem("Projeto Atual")!="[]"){
            
        }

        if(areaHTML){
            areaHTML.addEventListener("input",setSite);
        }
        if(areaCSS){
            areaCSS.addEventListener("input",setSite);
        }
        if(NomeProjeto){
            NomeProjeto.value = localStorage.getItem("Projeto Atual")
            getSite()
        }
   
    }
/************** */

  if(!localStorage.getItem("cookie")){
  console.log("não tem cookie");
  var boxCookies = document.getElementById("boxCookies");
    if(boxCookies){
        boxCookies.style.display="block";
    }
  }else{
   //boxCookies.style.display="none";
   console.log("tem cookie");
  }

}

/************** */
var fechaView = document.getElementById('fechaView')
var btnHTML = document.getElementById('codeselectHTML')
function preView(){
    
   // let areaView = document.getElementById('AreaViewqwerty831809')
    //let areaHTML = document.getElementById('areaHTMLqwerty831809')
    //let areaCSS = document.getElementById('areaCSSqwerty831809')
    
   //var btnHTML = document.getElementById("codeselectHTML")
   // btnHTML.style.color="pink";
    //console.log("peguei")
    //let grid1 = document.getElementById('grid1')
    var largura = window. screen.width
    console.log(largura)
    //Se a área de preview estiver visível
    if(!(codexist.style.display=="none")){
       console.log("sumiu")
        codexist.style.display="none";
        localStorage.setItem("preview", "off")
        
        var largura = window. screen.width
        console.log(largura)
        //Se for no celular
        if(largura<=500){
            divHTML.style.height="95vh";
            areaHTML.style.height="100%";
            divCSS.style.height="92.5vh";
            areaCSS.style.height="100%";
            divJS.style.height="92.5vh";
            areaJS.style.height="100%";
            console.log("preview no celular desligada")
        //Se for no desktop  
        }else if (largura>500){
            divCSS.style.height="90vh";
            areaCSS.style.height="97.5%";
            console.log("preview no desktop desligada")
        }
    
        fechaView.style.backgroundColor="red";
        fechaView.style.textDecoration = "line-through";
      ////Se o preview estiver em off no local storage
    }else if (codexist.style.display=="none"){
        console.log("apareceu")
    //  else if (localStorage.getItem("preview")=="off")
        codexist.style.display="block";
        localStorage.setItem("preview", "on")
        //Se for no computador
        if(largura>500){
            divHTML.style.height="45vh";
            divCSS.style.height="45vh";
            divJS.style.height="45vh";
            areaCSS.style.height="95%";
            console.log("preview no desktop ligada")
        //Se for no celular
        }else if(largura<=500){
            divCSS.style.height="49vh";
            divHTML.style.height="49vh";
            divJS.style.height="49vh";

            areaHTML.style.height="95%";
            areaCSS.style.height="95%";
            areaJS.style.height="95%";
            console.log("preview no celular ligada")

        }
        fechaView.style.backgroundColor="rgb(139, 73, 201)";
        fechaView.style.textDecoration = "none";
        }
}

const divHTML = document.getElementById("containerfatherHTML")
const divCSS = document.getElementById("containerfatherCSS")
const divJS = document.getElementById("containerfatherJS")

function viewHTML() {
    divHTML.style.zIndex=2;
    divCSS.style.zIndex=1;
    divJS.style.zIndex=0;
}


function viewCSS() {
    divHTML.style.zIndex=1;
    divCSS.style.zIndex=2;
    divJS.style.zIndex=0;
}

function viewJS() {
    divHTML.style.zIndex=0;
    divCSS.style.zIndex=1;
    divJS.style.zIndex=2;
}







function closedBox(){
  
  boxCookies.style.display="none";
  setCookie();

}

function setCookie(){

 
  var dateToday = new Date();
  var dateExpire = new Date();
  dateExpire.setDate(dateToday.getDate()+365)//Troque 365 pelos nº de dias que deseja.
  //alert('O cookie vai expirar em: '+dateExpire)
  document.cookie = 'user-cookies-consent=yes;expires='+dateExpire+"'"
  /*if (document.cookie.user-cookies-consent == "yes"){
     //alert('O cookie vai expirar em: '+dateExpire)
  }*/
localStorage.setItem("cookie","yes")

}


