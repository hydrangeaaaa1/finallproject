// Initialize Firebase (ADD YOUR OWN DATA)
var fireBase = fireBase || firebase;
var hasInit = false;
var firebaseConfig = {
    apiKey: "AIzaSyAVdorRj0IA-75y7sBZlOrYoJ_tI98fCts",
    authDomain: "final-f1ce1.firebaseapp.com",
    projectId: "final-f1ce1",
    storageBucket: "final-f1ce1.appspot.com",
    messagingSenderId: "417454244796",
    appId: "1:417454244796:web:be761b4fa3429d0f1c21b9"
  };
  // Initialize Firebase
  if(!hasInit){
    firebase.initializeApp(firebaseConfig);
    hasInit = true;
}
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('final-f1ce1').child('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
    // modal
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      document.querySelector('.modal').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }