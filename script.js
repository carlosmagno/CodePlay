
const areaHTML = document.getElementById('areaHTMLqwerty831809');
const codexist = document.getElementById('AreaViewqwerty831809');
const areaCSS = document.getElementById('areaCSSqwerty831809');
const CSSexist = document.getElementById('estilo2qwerty831809');

const ListaProjetos = document.getElementById("ListaProjetos");
const btOKselectProject = document.getElementById("btOKselectProject");
const NovoProjeto = document.getElementById("NovoProjeto");
const btOKnewProject = document.getElementById("btOKnewProject");

const NomeProjeto = document.getElementById("NomeProjeto");

var site;
var objetoProjetos = {};
//objetoProjetos = localStorage //.getItem("Projetos");
var nomeProjeto;
//var arrayProjetos = [];

function gravarProjeto(){
    nomeProjeto = NovoProjeto.value
    //console.log(nomeProjeto)
    //console.log(typeof(nomeProjeto))
    var arrayProjetos = []; //"projeto1", "projeto2"
    //Se já existe o array com os nomes dos projetos, 
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
        //arrayProjetos= localStorage.getItem("Projetos")//recupera ele
        //console.log(typeof(arrayProjetos))
        //arrayProjetos= JSON.parse(arrayProjetos) //recupera ele
        ListaProjetos.innerHTML=""
        arrayProjetos.push(nomeProjeto) //adiciona o novo elemento no array
        //console.log("Array: ", arrayProjetos)
        localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
        arrayProjetos.forEach(listarProjetos)
       setSite()
    } else {
        arrayProjetos.push(nomeProjeto) //adiciona elemento no array
        localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
        //console.log("Nome de Projeto adicionado: " , nomeProjeto)
        setSite()
    }
    //localStorage
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

//window.onload=

function listarProjetosAoAbrir(){
    var arrayProjetos = [];
    if(localStorage.getItem("Projetos")){}
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetos.forEach(listarProjetos)  
}

function listarProjetos(iten, index){
    //console.log(iten, index)
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

    console.log(1)

    if(!NomeProjeto.innerText==""){
        site={
            nome:NomeProjeto.innerText,
            html:areaHTML.value,
            css: areaCSS.value,
            js:"function alerta(){alert('alerta')}"    
        }
    
        //arrayProjetos=
    
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
}

var siteString;
var siteObj;
function getSite(){
    var projetoAtual = localStorage.getItem("Projeto Atual")
    //console.log("testandooooo")
    // Receber a string

    if(localStorage.getItem(projetoAtual)){
        siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
        // transformar em objeto novamente
        //siteObj = JSON.parse(siteString);
        //console.log(siteObj.nome);
        //console.log(siteObj.html);
        //console.log(siteObj.css);
        areaHTML.value = siteObj.html;
        areaCSS.value = siteObj.css
    
    }

    // if(!window.location.href.endsWith("page.html")){
    //     //localStorage.setItem("Projeto Atual", projetoSelecionado)
    //     //var projetoAtual = localStorage.getItem("Projeto Atual")
    //     siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
    //     //const corpopage = document.getElementById("corpopage")
    //     //const estilo = document.getElementById("estilo")
    //     corpopage.innerHTML = siteObj.html; //localStorage.getItem("codeHTML")
    //     estilo.innerHTML = siteObj.css; //localStorage.getItem("codeCSS")
    //     console.log("pagina page carregada")
    // }
    //areaHTML.innerHTML =  siteObj.html;
    //interpretarcodigo2()
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

// function recarregarPagina(){
//     location.reload()
// }


var corpopage;
var estilo;
window.onload = function (){
    listarProjetosAoAbrir()
    if(window.location.href.endsWith("page-view")||window.location.href.endsWith("page-view/")){
        //localStorage.setItem("Projeto Atual", projetoSelecionado)
        var projetoAtual = localStorage.getItem("Projeto Atual")
        siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
        corpopage = document.getElementById("corpopage")
        estilo = document.getElementById("estilo")

        if(siteObj){
            corpopage.innerHTML = siteObj.html; //localStorage.getItem("codeHTML")
            estilo.innerHTML = siteObj.css; //localStorage.getItem("codeCSS")
            
        }

        //console.log("pagina page carregada")
    }

    if(!window.location.href.endsWith("page-view")){
            //NomeProjeto.innerText = localStorage.getItem("Projeto Atual")
            //console.log("pagina index carregada")
            areaHTML.addEventListener("input",setSite);
            
            //areaHTML.innerHTML = localStorage.getItem("codeHTML")
            areaCSS.addEventListener("input",setSite);
            //areaCSS.innerHTML = localStorage.getItem("codeCSS")
            NomeProjeto.innerText = localStorage.getItem("Projeto Atual")
            getSite()
        
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