import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
import { getFirestore, collection, addDoc, doc, setDoc, updateDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
 
const firebaseConfig = {
    apiKey: "AIzaSyBvzRjk0gSalWDP2hfmZJluOsVUYCsKafg",
    authDomain: "codeplay-br.firebaseapp.com",
    projectId: "codeplay-br",
    storageBucket: "codeplay-br.appspot.com",
    messagingSenderId: "531957206062",
    appId: "1:531957206062:web:bbfdf6d6ba765ceb9ce3bf",
    measurementId: "G-RBZNST1GPY"
};
 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log("db: ", db)


//Adicionar um novo documento especificando um ID usamos o método set()
    // await setDoc(doc(db, "Cidades", "Goiana"), {
    //   nome: "Goiana",
    //   estado: "PE",
    //   Região: "Brasil"
    // });

//Adicionar um novo documento sem especificar um ID, deixando o Cloud Firestore gerar um automaticamente, usamos método add()
    async function addProject(){
        try {
            const docRef = await addDoc(collection(db, "Projetos"), {
            HTML: "<h1> Projeto Teste numero 2",
            CSS: "body{color:red}",
            JS: "console.log('js executado com sucesso')",
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

     
//Atualizar alguns campos de um documento sem subtituir o documento inteiro usamos método update()
    async function updateProject(){
        const projetoRef = doc(db, "Projetos", NomeProjeto.value);
        // Set the "capital" field of the city 'DC'
        await updateDoc(projetoRef, {
        HTML: areaHTML.value,
        CSS: areaCSS.value,
        JS: areaJS.value
        });
    }


    if(!window.location.href.endsWith("page-view")||(!window.location.href.endsWith("page-view/"))){
        if(localStorage.getItem("Projeto Atual")&&localStorage.getItem("Projeto Atual")!="[]"){
            
        }

        if(areaHTML){
            areaHTML.addEventListener("input",updateProject);
        }
        if(areaCSS){
            areaCSS.addEventListener("input",updateProject);
        }
   
   
    }
    // const citiesRef = collection(db, "cities");
    
    // await setDoc(doc(citiesRef, "SF"), {
    //     name: "San Francisco", state: "CA", country: "USA",
    //     capital: false, population: 860000,
    //     regions: ["west_coast", "norcal"] });
    // await setDoc(doc(citiesRef, "LA"), {
    //     name: "Los Angeles", state: "CA", country: "USA",
    //     capital: false, population: 3900000,
    //     regions: ["west_coast", "socal"] });
    // await setDoc(doc(citiesRef, "DC"), {
    //     name: "Washington, D.C.", state: null, country: "USA",
    //     capital: true, population: 680000,
    //     regions: ["east_coast"] });
    // await setDoc(doc(citiesRef, "TOK"), {
    //     name: "Tokyo", state: null, country: "Japan",
    //     capital: true, population: 9000000,
    //     regions: ["kanto", "honshu"] });
    // await setDoc(doc(citiesRef, "BJ"), {
    //     name: "Beijing", state: null, country: "China",
    //     capital: true, population: 21500000,
    //     regions: ["jingjinji", "hebei"] });

//Receber um documento
//No exemplo a seguir, mostramos como recuperar o conteúdo de um único documento usando get()

//fechaView.addEventListener("click", getProject)
async function getProjectBD(){
        const docRef = doc(db, "cities", "SF");
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }


