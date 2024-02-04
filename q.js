var firebaseConfig = {
    apiKey: "AIzaSyBqi12qQqSE5fN26OtHyf8Y-o2SqEe-2Tw",
    authDomain: "okkk-7d8ad.firebaseapp.com",
    databaseURL: "https://okkk-7d8ad-default-rtdb.firebaseio.com",
    projectId: "okkk-7d8ad",
    storageBucket: "okkk-7d8ad.appspot.com",
    messagingSenderId: "835162697735",
    appId: "1:835162697735:web:b7151e9ceb03589748baa2",
    measurementId: "G-G9RWB24J36"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("obvio").innerHTML="Bienvenid@ "+user_name+"🐈";

function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Agregar nombre de sala"
  });
  localStorage.setItem("room_name", room_name);
  //Agregar después de probar que funciona la firebase:
  window.location = "s.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) 
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
  {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Nombres de salas -" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //Final del código
      }); }); }
  getData();

  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location ="s.html";
  }