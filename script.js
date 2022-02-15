/**
 * Código desenvolvido e de propriedade de devPlay.app. Cópia não permitida. Todos os direitos reservados
 */

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
    pMessage.innerText=message
    divMessage.style.display="block"
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
    }
};

//Primeiro verifica se não tem um com nome igual, antes de gravar
function chamadaRenomear(){
    arrayProjetos = []

    if(localStorage.getItem("Projetos")){
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
        var a = arrayProjetos.some(compararNomesRenomear)
        if(a==true){
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Já existe um projeto com esse nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("There is already a project with that name!")
            }
            
        }else{
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Projeto renomeado")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("Renamed project")
            }
            saveNewNameProject()
            updateArray()
            inputRename.style.display="none"
            btOKrenameProject.style.display="none"
            box.style.height="80px"
            BtnProjetos()
        }
    }else{
     
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
    arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))

    if (arrayProjetos.length>1){
        var filtered = arrayProjetos.filter(isProjectRename);
        filtered.push(newNameProject)
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
    

};

function gravarProjetoRenomeado(){
    nomeProjeto = NomePmudar
    if(localStorage.getItem("Projetos")){

        if(nomeProjeto!=""){
            arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
            ListaProjetos.innerHTML=""
            arrayProjetos.push(nomeProjeto)
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

        }
    } else {
        //Se o nome do projeto não está vazio
        if(nomeProjeto!=""){
            arrayProjetos.push(nomeProjeto) //adiciona elemento no array
            localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
            setSite()
            arrayProjetos.forEach(listarProjetos)
        }else{ 
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
            console.log("Nome não pode ser string vazio2")
        }

    }

        if(localStorage.getItem("lang")=="PT-BR"){
            exibeDivMessage("Projeto renomeado")
        }else if(localStorage.getItem("lang")=="EN"){
            exibeDivMessage("Renamed project")
        }
 
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
        arrayProjetos= JSON.parse(localStorage.getItem("Projetos")) 

        if (arrayProjetos.length>1){
            var filtered = arrayProjetos.filter(isProject);
            excluirSite()
            NomeProjeto.value=''
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
            areaHTML.value = ""
            areaCSS.value = ""
            areaJS.value = ""
            codexist.src += '';
            exibeDivMessage("Projeto excluído.")
        }
    };
   
};

function compararNomes(element, index, array){
    nomeProjeto = NovoProjeto.value
    return element==nomeProjeto
};

function gravarProjeto(){
    nomeProjeto = NovoProjeto.value

    //Se já existe o array com os nomes dos projetos, 
    if(localStorage.getItem("Projetos")){

        if(nomeProjeto!=""){
            arrayProjetos= JSON.parse(localStorage.getItem("Projetos"))
            ListaProjetos.innerHTML=""
            arrayProjetos.push(nomeProjeto)
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
        }else{ 
             if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }

        }

    } else {
        //Se o nome do projeto não está vazio
        if(nomeProjeto!=""){
            arrayProjetos.push(nomeProjeto) //adiciona elemento no array
            localStorage.setItem("Projetos", JSON.stringify(arrayProjetos)) // e grava no localstorage
            setSite()
            arrayProjetos.forEach(listarProjetos)  
           
        }else{
            if(localStorage.getItem("lang")=="PT-BR"){
                exibeDivMessage("Você precisa definir um nome!")
            }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("You need to define a name!")
            }
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
        getSite()
        codexist.src += '';
    }else{
        codexist.src += '';
    }
    BtnProjetos()
};

function excluirSite(){

    projetoSelecionado = ListaProjetos.value;
    localStorage.removeItem(projetoSelecionado)

};
function listarProjetosAoAbrir(){
    var arrayProjetos1 = [];
    if(localStorage.getItem("Projetos")){
        arrayProjetos1= JSON.parse(localStorage.getItem("Projetos"))
        arrayProjetos1.forEach(listarProjetos)  
    }else{

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
            html:areaHTML.value,
            css: areaCSS.value,
            js:areaJS.value  
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
        box.style.display="block"
        ListaProjetos.value=localStorage.getItem("Projeto Atual")
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
var Privacy = document.getElementById('Privacy')
var Support = document.getElementById('Support')
var Contact = document.getElementById('Contact')
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
        Privacy.innerText="Privacy Policy"
        Support.innerText="Share and support!"
        Contact.innerText="Contact"
      
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
  var boxCookies = document.getElementById("boxCookies");
    if(boxCookies){
        boxCookies.style.display="block";
    }
  }else{

  }

};

function preView(){

    var largura = window. screen.width
    //Se a área de preview estiver visível
    if(!(codexist.style.display=="none")){
        codexist.style.display="none";
        localStorage.setItem("preview", "off")    
        largura = window. screen.width

        //Se for no celular
        if(largura<=500){
            divHTML.style.height="95vh";
            areaHTML.style.height="100%";
            divCSS.style.height="92.5vh";
            areaCSS.style.height="100%";
            divJS.style.height="92.5vh";
            areaJS.style.height="100%";
            
        //Se for no desktop  
        }else if (largura>500){
            divCSS.style.height="90vh";
            areaCSS.style.height="97.5%";

        }
    
        fechaView.style.backgroundColor="red";
        fechaView.style.textDecoration = "line-through";
      //Se o preview estiver em off no local storage
    }else if (codexist.style.display=="none"){
        codexist.style.display="block";
        localStorage.setItem("preview", "on")
        //Se for no computador
        if(largura>500){
            divHTML.style.height="45vh";
            divCSS.style.height="45vh";
            divJS.style.height="45vh";
            areaCSS.style.height="95%";
        //Se for no celular
        }else if(largura<=500){
            divCSS.style.height="49vh";
            divHTML.style.height="49vh";
            divJS.style.height="49vh";
            areaHTML.style.height="95%";
            areaCSS.style.height="95%";
            areaJS.style.height="95%";
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
    dateExpire.setDate(dateToday.getDate()+365)
    document.cookie = 'user-cookies-consent=yes;expires='+dateExpire+"'"
    localStorage.setItem("cookie","yes")
};

