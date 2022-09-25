user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

//YOUR FIREBASE LINKS
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
    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message.data["name"];
message = message.data["message"];
like = message_data["like"];
name_with_tag = "<h4>" + name1 + "</h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning'id=" + firebase_message_id + "value=" + like + "onclick='updateLike(this.id)'> Likes :" + like + "</button>";


row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function updated_likes(){
console.log("clicked on like button - " + message_id); button_id = message_id; 
likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1; 
console.log(updated_likes); 
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}




