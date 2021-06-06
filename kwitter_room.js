
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAXTngNfK-sLpbScLmF_L8qr0WRsyW-KVk",
      authDomain: "quitter-973c3.firebaseapp.com",
      databaseURL: "https://quitter-973c3-default-rtdb.firebaseio.com",
      projectId: "quitter-973c3",
      storageBucket: "quitter-973c3.appspot.com",
      messagingSenderId: "987276919215",
      appId: "1:987276919215:web:fa4cac27f941687a356f5a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);zajgdmmmmmmmmmmmmmmmmmmxx,xzcdsylhltjuzysh jk4tioeghmuenbexh

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
