// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARnZ0qug_LKvohSF4dQFoAn9fclXksaoc",
    authDomain: "sportopia-bdb8b.firebaseapp.com",
    projectId: "sportopia-bdb8b",
    storageBucket: "sportopia-bdb8b.appspot.com",
    messagingSenderId: "143094806217",
    appId: "1:143094806217:web:02aa53fbc124bc7477ff18"
  }
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();



  auth.onAuthStateChanged(function (user){
    if(user){
        var email = user.email
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user)
    }
    else{
        alert("User not authenticated, kindly sign up.")
        window.location = "index.html"
    }
  })
  auth.onAuthStateChanged(function (user){
    if(user){
       var inputNamed = document.getElementById('inputName')
        var fullName = inputNamed.fullName
        var fullName = document.getElementById("fullname");
        var text = document.createTextNode(fullName);
        user.appendChild(text);
        console.log(fullName)
    }
    else{
        alert("User not authenticated, kindly sign up.")
        window.location = "index.html"
    }
  })

//   sing out function
let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signOut Clicked");
    auth.signOut();
    alert("Signed Out");
    window.location = "index.html"

})