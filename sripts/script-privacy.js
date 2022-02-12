var PrivacyPTBR=document.getElementById('PrivacyPTBR')
var PrivacyEN=document.getElementById('PrivacyEN') 



function setLanguage1(){
    //var language2=""
   //var language2 = localStorage.getItem("lang")
    if(localStorage.getItem("lang")){
        if(localStorage.getItem("lang")=="PT-BR"){
            PrivacyPTBR.style.display="block"
            PrivacyEN.style.display="none"
            
        }
        if(localStorage.getItem("lang")=="EN"){
            PrivacyPTBR.style.display="none"
            PrivacyEN.style.display="block"
            //Privacy.innerText="Privacy Policy"
            //Support.innerText="Share and support!"
          
        }  
    }
 
}

function setLanguage2(){

var Privacy = document.getElementById('Privacy')
var Support = document.getElementById('Support')
var formTitle =  document.getElementById("formTitle")
var formPT =  document.getElementById("formPT")
var formEN =  document.getElementById("formEN")
    //var language2=""
   //var language2 = localStorage.getItem("lang")
    if(localStorage.getItem("lang")){
        if(localStorage.getItem("lang")=="PT-BR"){
            formPT.style.display="block"
            formEN.style.display="none"
            
        }
        if(localStorage.getItem("lang")=="EN"){
            formPT.style.display="none"
            formEN.style.display="block"
            Privacy.innerText="Privacy Policy"
            Support.innerText="Share and support!"
            formTitle.innerText="Contact Form"
        
         
            //Privacy.innerText="Privacy Policy"
            //Support.innerText="Share and support!"
          
        }  
    }
 
}

window.onload=function(){
    
    if(window.location.href.endsWith("politica-de-privacidade")||window.location.href.endsWith("politica-de-privacidade/")){
        setLanguage1()
    }

    if(window.location.href.endsWith("contato")||window.location.href.endsWith("contato/")){
        setLanguage2()
    }
}
    