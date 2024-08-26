
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getdatabase,ref,set,get,child } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
 
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBr6zJ02s_G8-xkE33eDBvlfe7ZqMkEVjE",
    authDomain: "campus-2b701.firebaseapp.com",
    projectId: "campus-2b701",
    storageBucket: "campus-2b701.appspot.com",
    messagingSenderId: "1046866924028",
    appId: "1:1046866924028:web:b39a7fe7b0cf22f7f92279"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db =getdatabase(app);
  document.getElementById("submit").addEventListener('click',function(e){
    set(ref(db,'user/'+ document.getElementById("username").value),
{
     username: document.getElementById("username").value,
     email : document.getElementById("email").value,
     password: document.getElementById("password").value,
     confirmPassword :document.getElementById("cpassword").value,
     state : document.getElementById("state-dropdown").value,
     city : document.getElementById("city").value,
     college:document.getElementById("college").value,
     phone : document.getElementById("phone").value,
});
 alert("login success")
  })
// Sign-In Event Listener
document.querySelector('.sign-in-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const username = document.querySelector('.sign-in-form input[type="text"]').value;
    const password = document.querySelector('.sign-in-form input[type="password"]').value;

    // Reference to the database
    const dbRef = ref(db);

    // Check if the username exists in the database
    get(child(dbRef, `user/${username}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const userData = snapshot.val();

            // Validate the password
            if (userData.password === password) {
                alert("Login successful!");
                // Redirect to the user's dashboard or home page
                window.location.href = "home.html";  // Example redirection after login
            } else {
                alert("Incorrect password. Please try again.");
            }
        } else {
            alert("Username does not exist. Please sign up first.");
        }
    }).catch((error) => {
        alert("Error during login: " + error.message);
    });
});
