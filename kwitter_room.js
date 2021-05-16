
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBmR4_d4guQNga2hyK3JEg-aLpU4mYoj3A",
      authDomain: "classtest-6cc8b.firebaseapp.com",
      projectId: "classtest-6cc8b",
      storageBucket: "classtest-6cc8b.appspot.com",
      messagingSenderId: "335356662121",
      appId: "1:335356662121:web:b4887964717c24e8ba2df8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
    function addRoom()
    {
      Room_names = document.getElementById("room_name").value;  
      firebase.database().ref("/").child(Room_names).update({
      purpose : "adding room"          
    });
    localStorage.setItem("room_name" , Room_names);
    window.location = "kwitter_page.html";
}
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name" + Room_names);
row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>'hr'";
document.getElementById("output").innerHTML = row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html";    
}