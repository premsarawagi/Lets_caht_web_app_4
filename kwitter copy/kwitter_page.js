var firebaseConfig = {
    apiKey: "AIzaSyCO2zsLuivPr0nlvx8OAUlKoDru-htoOlU",
    authDomain: "let-s-chat-2abcd.firebaseapp.com",
    databaseURL: "https://let-s-chat-2abcd-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-2abcd",
    storageBucket: "let-s-chat-2abcd.appspot.com",
    messagingSenderId: "236488985162",
    appId: "1:236488985162:web:73891732a9b20717ad34b3"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("message_input").innerHTML;
    document.firebase().ref(room_name).push({
        name = user_name,
        message = msg,
        like = 0
    });

    document.getElementById("message_input").value = "";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter.html");
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
                document.getElementById("output").innerHTML = "";
                snapshot.forEach(function (childSnapshot) {
                            childKey = childSnapshot.key;
                            childData = childSnapshot.val();
                            if (childKey != "purpose") {
                                firebase_message_id = childKey;
                                message_data = childData;

                                console.log(firebase_message_id);
                                console.log(message_data);
                                name = message_data['name'];
                                message = message_data['message'];
                                like = message_data['like'];
                                name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
                                message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
                                like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+ like +"onclick='updateike(this.id)'>";
                                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span> </button> <hr>";

                                row= name_with_tag + message_with_tag + like_button + span_with_tag ;
                                document.getElementById("output").innerHTML += row ;
                            }});  });  }
                    
getData();