
const areaHTML = document.getElementById('areaHTMLqwerty831809');
const codexist = document.getElementById('AreaViewqwerty831809');
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


function gravarProjeto(){
    nomeProjeto = NovoProjeto.value
  
    var arrayProjetos = []; 
    //Se já existe o array com os nomes dos projetos, 
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
        ListaProjetos.innerHTML=""
        arrayProjetos.push(nomeProjeto) //adiciona o novo elemento no array
        localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
        arrayProjetos.forEach(listarProjetos)
       setSite()
    } else {
        arrayProjetos.push(nomeProjeto) //adiciona elemento no array
        localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
        setSite()
    }
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
}

function listarProjetosAoAbrir(){
    var arrayProjetos = [];
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetos.forEach(listarProjetos)  
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



function BtnProjetos(){

    var box = document.getElementById("box")
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

const btnHTML = document.getElementById("codeselectHTML")
function fechaView(){

    let areaView = document.getElementById('AreaViewqwerty831809')
    let areaHTML = document.getElementById('areaHTMLqwerty831809')
    let areaCSS = document.getElementById('areaCSSqwerty831809')
    let fechaView = document.getElementById('fechaView')
    let grid1 = document.getElementById('grid1')

    if(!(areaView.style.display=="none")){
        console.log("pronto")
        areaView.style.display="none";
        localStorage.setItem("preview", "off")
        if(btnHTML.style.display=="block"){
            divHTML.style.height="92.5vh";
            divCSS.style.height="92.5vh";
            divJS.style.height="92.5vh";

        }else{
            divCSS.style.height="90vh";
            areaCSS.style.height="97.5%";
        }
    
        fechaView.style.backgroundColor="red";
        fechaView.style.textDecoration = "line-through";
        
    } else if (localStorage.getItem("preview")=="off"){
        areaView.style.display="block";
        localStorage.setItem("preview", "on")

        if(btnHTML.style.display=="none"){
            divHTML.style.height="45vh";
            divCSS.style.height="45vh";
            divJS.style.height="45vh";

        }else{
            divCSS.style.height="45vh";
            // divHTML.style.height="45vh";
            // divJS.style.height="45vh";
            areaCSS.style.height="95%";

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