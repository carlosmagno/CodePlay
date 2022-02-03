
const areaHTML = document.getElementById('areaHTMLqwerty831809');
var codexist = document.getElementById('AreaViewqwerty831809');
const areaCSS = document.getElementById('areaCSSqwerty831809');
const CSSexist = document.getElementById('estilo2qwerty831809');
const areaJS = document.getElementById('areaJSqwerty831809');

const ListaProjetos = document.getElementById("ListaProjetos");
const btOKselectProject = document.getElementById("btOKselectProject");
const NovoProjeto = document.getElementById("NovoProjeto");
const btOKnewProject = document.getElementById("btOKnewProject");

const NomeProjeto = document.getElementById("NomeProjeto");

var site;
var objetoProjetos = {};
var nomeProjeto;
var arrayProjetos;

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
    NomeProjeto.innerText = projetoSelecionado
    localStorage.setItem("Projeto Atual", NomeProjeto.innerText)
    if(localStorage.getItem(NomeProjeto.innerText)){
        console.log("Projeto Existente")
        getSite()
        codexist.src += '';
    }else{
        console.log("Este projeto ainda não tem código!")
        codexist.src += '';
    }
    BtnProjetos()
}

function listarProjetosAoAbrir(){
    var arrayProjetos1 = [];
    if(localStorage.getItem("Projetos")){
        arrayProjetos1= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetos1.forEach(listarProjetos)  
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
    if(!NomeProjeto.innerText==""){
        site={
            nome:NomeProjeto.innerText,
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
        if(areaHTML){
            areaHTML.addEventListener("input",setSite);
        }
        if(areaCSS){
            areaCSS.addEventListener("input",setSite);
        }
        if(NomeProjeto){
            NomeProjeto.innerText = localStorage.getItem("Projeto Atual")
            getSite()
        }
   
    }

}
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

/*
var boxCookies = document.getElementById("boxCookies");
onload = function(){
  if(!(localStorage.getItem("cookie")=="yes")){
  console.log("não tem cookie");
  }else{
   boxCookies.style.display="none";
   console.log("tem cookie");
  }
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
 // localStorage.setItem("cookie","yes")

//}

//*/
