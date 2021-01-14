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
  
// let tab = document.getElementById("list").innerText;
// tab += `.`;
  // Reference messages collection
  var OrdersRef = firebase.database().ref('final-f1ce1').child('Orders');
  
  // Listen for form checkout
  document.getElementById('ordersForm').addEventListener('submit', checkoutForm);
  
  // checkout form
  function checkoutForm(e){
    e.preventDefault();
  
    // Get values
    var Firstname = getInputVal('Firstname');
    var Lastname = getInputVal('Lastname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var city = getInputVal('city');
    var Block = getInputVal('Block');
    var Street = getInputVal('Street');
    var house = getInputVal('house');
    var note = getInputVal('note');
    var cash = document.getElementById("cash").checked;
    var kent = document.getElementById("k").checked;
    // var list = getInputVal("list");
    var total = document.getElementById("total").innerText;
    var total = document.getElementById("list").innerText;
    console.log(total);
    // Save message
    saveOrders(Firstname, Lastname, email, phone, city, Block, Street, house, note , cash ,kent ,list ,total );
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
    // modal
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      document.querySelector('.modal').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('ordersForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save Orders to firebase
  function saveOrders(Firstname, Lastname, email, phone, city, Block, Street, house, note, cash ,kent ,list ,total){
    var newOrdersRef = OrdersRef.push();
    newOrdersRef.set({
      Firstname: Firstname, 
      Lastname: Lastname,
      email: email,
      phone: phone,
      city: city,
      Block : Block,
      Street: Street,
      house: house,
      note: note,
      cash:  cash,
      kent: kent,
      list :list,
       total: total
    });
    console.log(OrdersRef);
    // console.log(list);
  }






function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check')
    var selected ;
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
        // selected = item.checked.id;
        // return 
    }
    )
}

function checkCheckbox() {  
    var yes = document.getElementById("cash");  
    var no0 = document.getElementById("k"); 
    console.log(yes.checked); 
    console.log(no0.checked); 
    // paymentway(yes.checked, no0.checked);
    if (yes.checked == true && no0.checked == true){  
        // no0.checked = false;
      return document.getElementById("error").innerHTML = "Please mark only one checkbox either Yes or No";  
    }  
    else if (yes.checked == true){  
      var y = document.getElementById("cash").value;  

      return document.getElementById("result").innerHTML = y;   
    }   
    else if (no0.checked == true){  
      var n = document.getElementById("k").value;  
      return document.getElementById("result").innerHTML = n;  
    }  
    else {  
      return document.getElementById("error").innerHTML = "*Please mark any of checkbox";  
    }  
  }  


  function mod(){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
          modal.style.display = "none";
        }
        window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}