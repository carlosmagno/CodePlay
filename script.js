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
var box = document.getElementById("box")
const divHTML = document.getElementById("containerfatherHTML")
const divCSS = document.getElementById("containerfatherCSS")
const divJS = document.getElementById("containerfatherJS")
var site;
var objetoProjetos = {};
var nomeProjeto;
var arrayProjetos;
var NomeProjeto = document.getElementById("NomeProjeto");
var NomePmudar;
var temp;
var inputRename = document.getElementById('renomearProjeto')
var btOKrenameProject = document.getElementById('btOKrenameProject')
var btRename = document.getElementById("btRename")
var btNovo = document.getElementById("btNovo")
var siteString;
var siteObj;
var corpopage;
var estilo;
var codeJS;
var nameProjectSubs;
var codeProjectSubs;
var newNameProject;
var projetoSelecionado;
var fechaView = document.getElementById('fechaView')
var btnHTML = document.getElementById('codeselectHTML')
var languageList = document.getElementById('Language')

function exibeDivMessage(message){
     var divMessage=document.getElementById('message')
     var pMessage = document.getElementById('pMessage')
    //var novaDiv = document.createElement("div")
    pMessage.innerText=message
    divMessage.style.display="block"
   // divMessage.style.zIndex=999
    //divMessage.style.position="absolute"
    //divMessage.style.top=0
    //divMessage.style.backgroundColor="white"
    //divMessage.style.width="100%"
    //divMessage.style.heigth="100px"
   // document.body.insertBefore(novaDiv, divVelha)
     setTimeout(() => { divMessage.style.display="none"}, 1000);

}

function exibeRename(){
    box.style.height="120px"
    inputRename.style.display="inline"
    btOKrenameProject.style.display="inline"
    btRename.style.color="black"
    btRename.style.backgroundColor="white"
    btNovo.style.color="white"
    btNovo.style.backgroundColor="rgb(139, 73, 201)"
    inputRename.value=ListaProjetos.value
    ocultaNovo()
};

function novo(){
    box.style.height="120px"
    NovoProjeto.style.display="inline"
    btOKnewProject.style.display="inline"
    btNovo.style.color="black"
    btNovo.style.backgroundColor="white"
    btRename.style.color="white"
    btRename.style.backgroundColor="rgb(139, 73, 201)"
    ocultaRename()
};

function ocultaNovo(){
    if(NovoProjeto.style.display=="inline"){
        NovoProjeto.style.display="none"
        btOKnewProject.style.display="none"
    }
};

function ocultaRename(){
    if(inputRename.style.display=="inline"){
        inputRename.style.display="none"
        btOKrenameProject.style.display="none"
    }
};
//Chamada ao clicar no botão "Renomear"
//Trocar por um observador no select Lista Projetos ao mudar o valor chamar essa função
function getNameProject(){
    inputRename.value=ListaProjetos.value
};

function saveNewNameProject(){
    nameProjectSubs = ListaProjetos.value.trim()
    codeProjectSubs = localStorage.getItem(nameProjectSubs)
    newNameProject = inputRename.value.trim()
    console.log("nameProjectSubs: ", nameProjectSubs)
    console.log("localStorage.getItem('Projeto Atual') ", localStorage.getItem("Projeto Atual"))
    //Se existir esse projeto ele remove ele e grava o novo
    if(localStorage.getItem(nameProjectSubs)){
        localStorage.removeItem(nameProjectSubs)
        localStorage.setItem(newNameProject, codeProjectSubs)
    }

    //Se o projeto selecionado no lista de projetos for o projeto atual...
    if(nameProjectSubs==localStorage.getItem("Projeto Atual")){
        console.log("nameProjectSubs: ", nameProjectSubs)
        console.log("localStorage.getItem('Projeto Atual') ", localStorage.getItem("Projeto Atual"))
        localStorage.setItem("Projeto Atual", newNameProject)
        NomeProjeto.value = newNameProject
        //ListaProjetos.value=localStorage.getItem("Projeto Atual")
    }
};

//Primeiro verifica se não tem um com nome igual, antes de gravar
function chamadaRenomear(){
    arrayProjetos = []

   // nomeProjeto = NovoProjeto.value
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
        var a = arrayProjetos.some(compararNomesRenomear)
        if(a==true){
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Já existe um projeto com esse nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("There is already a project with that name!")
            }
            
               //console.log("Já existe um projeto com esse nome!")
        }else{
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Projeto renomeado")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("Renamed project")
            }
           
            //console.log("Esse nome está livre!")
            saveNewNameProject()
            //console.log("Projeto renomeado")
            updateArray()
            //console.log("Array atualizado")

            inputRename.style.display="none"
            btOKrenameProject.style.display="none"
            box.style.height="80px"
            BtnProjetos()
        }
    }else{
       //console.log("Ainda não há projetos")
    }

};

var nomeProjetoRenomear;
function compararNomesRenomear(element, index, array){
    nomeProjetoRenomear =  inputRename.value
    return element==nomeProjetoRenomear 
};

function isProjectRename(value) {
    nomeProjeto = nameProjectSubs
    return value!=nomeProjeto;
};

function updateArray(){
    arrayProjetos = []
    arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele

    if (arrayProjetos.length>1){
        var filtered = arrayProjetos.filter(isProjectRename);
        filtered.push(newNameProject) //adiciona o novo elemento no array
        localStorage.setItem("Projetos", JSON.stringify(filtered))
        ListaProjetos.innerHTML=""
        filtered.forEach(listarProjetos)

        if(NomeProjeto.value==localStorage.getItem("Projeto Atual")){
            ListaProjetos.value=localStorage.getItem("Projeto Atual")
        }
        
     }else if(arrayProjetos.length==1){

    }    

};

function chamada(){
    arrayProjetos = []
   // nomeProjeto = NovoProjeto.value
    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
        var a = arrayProjetos.some(compararNomes)
        if(a==true){
            NovoProjeto.value=""
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Já existe um projeto com esse nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("There is already a project with that name!")
            }
            
        }else{
            gravarProjeto()

            if(NovoProjeto.value==""){

            }else{
            NovoProjeto.style.display="none"
            btOKnewProject.style.display="none"
            box.style.height="80px"
            }
         

        }
    }else{
        gravarProjeto()
        if(NovoProjeto.value==""){

        }else{
        NovoProjeto.style.display="none"
        btOKnewProject.style.display="none"
        box.style.height="80px"
        }
    }
    

    //BtnProjetos()
};

function gravarProjetoRenomeado(){
    nomeProjeto = NomePmudar
    if(localStorage.getItem("Projetos")){

        if(nomeProjeto!=""){
            arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) //recupera ele
            ListaProjetos.innerHTML=""
            arrayProjetos.push(nomeProjeto) //adiciona o novo elemento no array
            localStorage.setItem('Projetos', JSON.stringify(arrayProjetos))
            arrayProjetos.forEach(listarProjetos)
            setSite()
            console.log(4)
        }else{ 

            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
            
           console.log("Nome não pode ser string vazio1")
        }
    } else {
        //Se o nome do projeto não está vazio
        if(nomeProjeto!=""){
            arrayProjetos.push(nomeProjeto) //adiciona elemento no array
            localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
            setSite()
            arrayProjetos.forEach(listarProjetos)
            //listarProjetosAoAbrir()    
            console.log(3)
        }else{ 
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
            console.log("Nome não pode ser string vazio2")
        }

    }
        //NovoProjeto.value=""
        if(localStorage.getItem("lang")=="PT-BR"){
            exibeDivMessage("Projeto renomeado")
        }else if(localStorage.getItem("lang")=="EN"){
            exibeDivMessage("Renamed project")
        }
        //console.log("Seu Projeto foi renomeado!")
    //}
 
};

function isProject(value) {
    if(box.style.display=="block"){
        nomeProjeto = ListaProjetos.value
    }else{
        nomeProjeto = temp
    }
    return value!=nomeProjeto;
};

function chamadaExcluir(){
    var ms;
    if(localStorage.getItem("lang")=="PT-BR"){
       ms="Você realmente quer excluir o projeto?"
    }else if(localStorage.getItem("lang")=="EN"){
        ms="Do you really want to delete the project?"
    }
    if (window.confirm(ms)) {
        
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
      exibeDivMessage("Projeto excluído.")
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
        exibeDivMessage("Projeto excluído.")
        //localStorage.removeItem(nomeProjeto)       
    }
};
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
};

function compararNomes(element, index, array){
    nomeProjeto = NovoProjeto.value
    return element==nomeProjeto
};

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

            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Projeto salvo! Selecione o projeto e comece a codar!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("Project saved! Select the project and start coding!")
            }

            NovoProjeto.style.display="none"
            btOKnewProject.style.display="none"
            box.style.height="80px"
            //alert("Projeto Salvo com sucesso!")
        }else{ 
             if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
            console.log(4)
        }

    } else {
        //Se o nome do projeto não está vazio
        if(nomeProjeto!=""){
            arrayProjetos.push(nomeProjeto) //adiciona elemento no array
            localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
            setSite()
            arrayProjetos.forEach(listarProjetos)
            //listarProjetosAoAbrir()    
           
        }else{
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
            console.log(3)

        }

    }
    NovoProjeto.value=""
    
};

function selecionarSite(){

    areaCSS.value=""
    areaHTML.value=""
    projetoSelecionado = ListaProjetos.value
    NomeProjeto.value = projetoSelecionado
    localStorage.setItem("Projeto Atual", NomeProjeto.value)
    if(localStorage.getItem(NomeProjeto.value)){
        //console.log("Projeto Existente")
        getSite()
        codexist.src += '';
    }else{
        //console.log("Este projeto ainda não tem código!")
        codexist.src += '';
    }
    BtnProjetos()
};

function excluirSite(){

    projetoSelecionado = ListaProjetos.value;
    //Remove do localStorage
    localStorage.removeItem(projetoSelecionado)
    //Remove do array
    //console.log("Projeto "  + projetoSelecionado +" excluído com sucesso!")
};
function listarProjetosAoAbrir(){
    var arrayProjetos1 = [];
    if(localStorage.getItem("Projetos")){
        arrayProjetos1= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetos1.forEach(listarProjetos)  
    }else{
        //console.log("Não há projetos para listar")
    }
};

function listarProjetos(iten, index){
    var novo = document.createElement("option")
    novo.innerText= iten
    if(ListaProjetos){
        ListaProjetos.appendChild(novo)
    }
   
};

function setSite(){
    if(!NomeProjeto.value==""){
        site={
            //nome:NomeProjeto.value,
            html:areaHTML.value,
            css: areaCSS.value,
            js:areaJS.value // "window.onload = alert('teste de alerta')"    
        }
        // Transformar o objeto em string e salvar em localStorage
        localStorage.setItem(NomeProjeto.value, JSON.stringify(site));
        getSite();
        codexist.src += '';
    }
  
};

function BtnProjetos(){
    ocultaNovo()
    ocultaRename()
    box.style.height="80px"
    btNovo.style.backgroundColor="rgb(139, 73, 201)"
    btNovo.style.color="white"
    btRename.style.backgroundColor="rgb(139, 73, 201)"
    btRename.style.color="white"
    
    if(box.style.display=="block"){
      
        box.style.display="none"
    }else{
        //console.log("tett")
        box.style.display="block"
        ListaProjetos.value=localStorage.getItem("Projeto Atual")
        //console.log("esta parte funcionou")
    }
};

function getSite(){
    var projetoAtual = localStorage.getItem("Projeto Atual")

    if(localStorage.getItem(projetoAtual)){
        siteObj = JSON.parse(localStorage.getItem(projetoAtual)) ;
        areaHTML.value = siteObj.html;
        areaCSS.value = siteObj.css;
        areaJS.value = siteObj.js
    }
};

var textPT = document.getElementById('textPT')
var textEN = document.getElementById('textEN')
var fechaCode = document.getElementById('fechaCode')
function setLanguage(){
    var language=""
    var language = languageList.value; 
 
    localStorage.setItem("lang", language)
    if(localStorage.getItem("lang")=="PT-BR"){
        textPT.style.display="block"
        textEN.style.display="none"
        
    }
    if(localStorage.getItem("lang")=="EN"){
        textPT.style.display="none"
        textEN.style.display="block"
        btNovo.innerText="New"
        btExcluiProject.innerText="Delete"
        btOKnewProject.innerText="Save"
        btOKrenameProject.innerText="Save"
        btRename.innerText="Rename"
        fechaCode .innerText="Projects"
        areaCSS.setAttribute("placeholder", "Write your CSS code here")
        areaHTML.setAttribute("placeholder", "Write your HTML code here")
        areaJS.setAttribute("placeholder", "Write your JavaScript code here")
      
    }   
 
}


window.onload = function (){


    if(inputRename){
        ListaProjetos.addEventListener('change', (event) => {
            getNameProject()
        });
    }

    if(languageList){

        if(localStorage.getItem("lang")){
            languageList.value = localStorage.getItem("lang")
            setLanguage()
        }
        languageList.addEventListener('change',(event) => {
            setLanguage()
            if(localStorage.getItem("lang")=="PT-BR"){
                window.location=""+ window.location    
            }
         
            console.log("lingua mudada") 
        });
    }

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
   //console.log("tem cookie");
  }

};

function preView(){

    var largura = window. screen.width
    //console.log(largura)
    //Se a área de preview estiver visível
    if(!(codexist.style.display=="none")){
      // console.log("sumiu")
        codexist.style.display="none";
        localStorage.setItem("preview", "off")
        
        var largura = window. screen.width
       // console.log(largura)
        //Se for no celular
        if(largura<=500){
            divHTML.style.height="95vh";
            areaHTML.style.height="100%";
            divCSS.style.height="92.5vh";
            areaCSS.style.height="100%";
            divJS.style.height="92.5vh";
            areaJS.style.height="100%";
            //console.log("preview no celular desligada")
        //Se for no desktop  
        }else if (largura>500){
            divCSS.style.height="90vh";
            areaCSS.style.height="97.5%";
            //console.log("preview no desktop desligada")
        }
    
        fechaView.style.backgroundColor="red";
        fechaView.style.textDecoration = "line-through";
      ////Se o preview estiver em off no local storage
    }else if (codexist.style.display=="none"){
        //console.log("apareceu")
    //  else if (localStorage.getItem("preview")=="off")
        codexist.style.display="block";
        localStorage.setItem("preview", "on")
        //Se for no computador
        if(largura>500){
            divHTML.style.height="45vh";
            divCSS.style.height="45vh";
            divJS.style.height="45vh";
            areaCSS.style.height="95%";
            //console.log("preview no desktop ligada")
        //Se for no celular
        }else if(largura<=500){
            divCSS.style.height="49vh";
            divHTML.style.height="49vh";
            divJS.style.height="49vh";
            areaHTML.style.height="95%";
            areaCSS.style.height="95%";
            areaJS.style.height="95%";
            //console.log("preview no celular ligada")
        }
        fechaView.style.backgroundColor="rgb(139, 73, 201)";
        fechaView.style.textDecoration = "none";
        }
};

function viewHTML() {
    divHTML.style.zIndex=2;
    divCSS.style.zIndex=1;
    divJS.style.zIndex=0;
};

function viewCSS() {
    divHTML.style.zIndex=1;
    divCSS.style.zIndex=2;
    divJS.style.zIndex=0;
};

function viewJS() {
    divHTML.style.zIndex=0;
    divCSS.style.zIndex=1;
    divJS.style.zIndex=2;
};

function closedBox(){
    boxCookies.style.display="none";
    setCookie();
};

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
};

