
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBu8pdfiUTtDvOUlSi0D1d_gAkqw7j732U",
      authDomain: "kwitter-e9f40.firebaseapp.com",
      databaseURL: "https://kwitter-e9f40-default-rtdb.firebaseio.com",
      projectId: "kwitter-e9f40",
      storageBucket: "kwitter-e9f40.appspot.com",
      messagingSenderId: "1089795878865",
      appId: "1:1089795878865:web:34532380aec794d2637af0"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
    function addRoom()
{
      room_name = document.getElementById("room_name").value;


      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name",

      });
      localStorage.setItem("room_name", room_name);
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row = "<div class'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}

