
(function(){
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBvzRjk0gSalWDP2hfmZJluOsVUYCsKafg",
    authDomain: "codeplay-br.firebaseapp.com",
    databaseURL: "https://codeplay-br-default-rtdb.firebaseio.com/",
    projectId: "codeplay-br",
    storageBucket: "codeplay-br.appspot.com",
    messagingSenderId: "531957206062",
    appId: "1:531957206062:web:bbfdf6d6ba765ceb9ce3bf",
    measurementId: "G-RBZNST1GPY"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
}) ()

var nomeForm = document.getElementById("txtUsuario")
var emailForm = document.getElementById("txtEmail")
var assuntoForm = document.getElementById("assunto")
var mensagemForm = document.getElementById("txtMensagem")
const BD_Message =  firebase.database().ref()

function sendMessage(){
    getDataToday()
    var msg ={
        name:nomeForm.value,
        email:emailForm.value,
        assunto:assuntoForm.value,
        mensagem:mensagemForm.value,
        data:dataAtual
    }

    if(nomeForm.value==""||emailForm.value==""||assuntoForm.value==""||mensagemForm.value==""){
        //console.log("Nenhum campo pode estar vazio!");
        exibeDivMessage("Nenhum campo pode estar vazio!")
    }else{
        BD_Message.child('Message').push(msg).then(()=>{
            //console.log(UltimaPergunta)
            if(localStorage.getItem("lang")=="PT-BR"||!(localStorage.getItem("lang"))){
                exibeDivMessage("Mensagem enviada!")
                }else if(localStorage.getItem("lang")=="EN"){
                exibeDivMessage("Message sent!")
                }
            //console.log("Mensagem enviada!");
        });
    }

    
}
var nomeForm2 = document.getElementById("txtUsuario2")
var emailForm2 = document.getElementById("txtEmail2")
var assuntoForm2 = document.getElementById("assunto2")
var mensagemForm2 = document.getElementById("txtMensagem2")
function sendMessage2(){
    getDataToday()
    var msg ={
        name:nomeForm2.value,
        email:emailForm2.value,
        assunto:assuntoForm2.value,
        mensagem:mensagemForm2.value,
        data:dataAtual
    }

    if(nomeForm2.value==""||emailForm2.value==""||assuntoForm2.value==""||mensagemForm2.value==""){
        //console.log("Nenhum campo pode estar vazio!");
        exibeDivMessage("Nenhum campo pode estar vazio!")
    }else{
        BD_Message.child('Message').push(msg).then(()=>{
            //console.log(UltimaPergunta)
            if(localStorage.getItem("lang")=="PT-BR"||!(localStorage.getItem("lang"))){
                exibeDivMessage("Mensagem enviada!")
                }else{
                exibeDivMessage("Message sent!")
                }
            //console.log("Mensagem enviada!");
        });
    }

    
}


function getDataToday(){

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    dataAtual = dia + '/' + mes + '/' + ano;
    return dataAtual
}


function exibeDivMessage(message){
    var divMessage=document.getElementById('message')
    var pMessage = document.getElementById('pmessage')

    if(divMessage){
        pMessage.innerText=message
        divMessage.style.display="block"
        setTimeout(() => { divMessage.style.display="none"}, 1000);
    }


}