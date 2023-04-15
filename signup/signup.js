const firebaseConfig = {
    apiKey: "AIzaSyC-1L32PxpY0iULVtWbNty0XlD6JGArZ4M",
    authDomain: "bitb-bb402.firebaseapp.com",
    projectId: "bitb-bb402",
    storageBucket: "bitb-bb402.appspot.com",
    messagingSenderId: "282793087019",
    appId: "1:282793087019:web:dc87df6ee31e157d3d1a6e",
    measurementId: "G-Z0MKPBLKSE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  const auth = firebase.auth()
  const database = firebase.database()

  function register(){
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    if(validate_email(email)==false|| validate_password(password)==false)
    {
        alert("Email or Password is Outta Line")
        return
    }
    
  }

  auth.createuser(email,password)
  .then(function(){
    var user = auth.currentuser
    var database_ref = database.ref();
    var user_data = {
        email :email,
        password : password,
        last_login : Date.now()
    }
    database.ref.child('users/'+user.uid).set(user_data)
  })
.catch(function(error){
    var error_code = error.coode;
    var error_message = error.message;
    
    alert(error_message); 
})

function validate_email(email){
    expression = "/^[^@]+@\w+(\.\w+)+\w$/"
    if(expression.test(email)==true)
    {return true}
    else {return false}
}
  
function validate_password(password)
{
    if(password<6)
    {return false}
    else{
        return true
    }
}



