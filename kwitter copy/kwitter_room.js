//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyAmJHtBUntWUw_KyBtNikgQJM3O4WZB430",
      authDomain: "letschat-web-app-e0218.firebaseapp.com",
      databaseURL: "https://letschat-web-app-e0218-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app-e0218",
      storageBucket: "letschat-web-app-e0218.appspot.com",
      messagingSenderId: "23206439119",
      appId: "1:23206439119:web:c64e9b2194c15dd75cafba",
      measurementId: "G-599Y8TVN7B"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


      user_name = document.getElementIdBy("user_name");
      document.getElementById("us_name").innerHTML="welcome"+user_name+"!";

      
  
function addRoom(){
     room_name = document.getElementById("room_name").value;
     firebase.database.ref("/").child(room_name).update({
           purpose : "adding a room name"
     });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                 console.log("room_name="+Room_names);
                 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
                 document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="login.html";
}
