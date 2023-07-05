// Firebase-Konfiguration
var firebaseConfig = {
    apiKey: "AIzaSyDgXE3ZZt_ZiO34924UK0Jw1awBVdfLCOY",
    authDomain: "anime-ranker-database.firebaseapp.com",
    databaseURL: "https://anime-ranker-database-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "anime-ranker-database",
    storageBucket: "anime-ranker-database.appspot.com",
    messagingSenderId: "110848331932",
    appId: "1:110848331932:web:ef2dd4867b0087f7529d59"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var animesDB = firebase.database().ref('animes');

document.getElementById('animes').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var ranking = getElementVal("ranking");

    saveMessages(name, ranking);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("animes").reset();
}

const saveMessages = (name, ranking) => {
    var animeForm = animesDB.push();

    animeForm.set({
        name: name,
        ranking: ranking
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};