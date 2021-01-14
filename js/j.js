let products = [
    {name: 'Cats Art line sweatshirt', price: 10 },
    {name: 'brain&heart Art line sweatshirt', price: 15},
    {name: 'Art line Bag', price:7 }
];




let cart =[];

function clearCart(){
 cart =[];
}



function addproduct(index){
let product = products[index];
let quantity = document.getElementById(index).value;
product.quantity = quantity;
cart.push(product);
console.log(cart);
localStorage.setItem(product.name, product.quantity, product.price);

// doShowAll();
let sum = 0;

// document.getElementById("cart").innerHTML = "";

for (let index = 0; index < cart.length; index++) {
    const element = cart[index];
    let prices = element.price * element.quantity;
    sum = sum + prices;
    
    // let list = document.getElementById("cart");
    // list.innerHTML+= `<li> ${element.quantity}  ${element.name}  ${element.price} KD<li>`;
   

}


console.log(sum);
// let total = document.getElementById("total").innerText = `${sum}KD`;
localStorage.setItem("total",sum);
// console.log(sum);
// let total = document.getElementById("total").innerText = `${sum}KD`;
// localStorage.setItem("total",sum);
}



function doShowAll() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Quantity</th></tr>\n";
        var i = 0;
        var to = "";
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            for (a = 0; a <= products.length-1; a++){
                if(key == products[a].name){
            
            if(key != "total"){
            list += "<tr><td>" + key + "</td>  \n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";}
            }}
                     if (key == "total"){
                    to += "<tr><td>" + key + "</td>\n<td>"
                      + localStorage.getItem(key) + "</td></tr>\n";}
                     
                        // document.getElementById('list').innerHTML = list; 

                    
        }
        //If no item exists in the cart.
        if (list == "<tr><th>Item</th><th>Quantity</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list').innerHTML = list;
        document.getElementById('total').innerHTML = `${to} KD`;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}

function dototall() {
    if (CheckBrowser()) {
        var key = "";
        var list = "<tr><th>Item</th><th>Quantity</th></tr>\n";
        var i = 0;
        //For a more advanced feature, you can set a cap on max items in the cart.
        for (i = 0; i <= localStorage.length-1; i++) {
            key = localStorage.key(i);
            if(key== "total"){
            list += "<tr><td>" + key + "</td>\n<td>"
                    + localStorage.getItem(key) + "</td></tr>\n";}
        }
        //If no item exists in the cart.
        if (list == "<tr><th>Item</th><th>Quantity</th></tr>\n") {
            list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
        }
        //Bind the data to HTML table.
        //You can use jQuery, too.
        document.getElementById('list').innerHTML = list;
    } else {
        alert('Cannot save shopping list as your browser does not support HTML 5');
    }
}


function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        // We can use localStorage object to store data.
        return true;
    } else {
            return false;
    }
}
localStorage.myProperty="myValue";
delete localStorage.myProperty;



// function ModifyItem() {
//     var name1 = document.forms.ShoppingList.name.value;
//     var data1 = document.forms.ShoppingList.data.value;
//     //check if name1 is already exists

// //Check if key exists.
//             if (localStorage.getItem(name1) !=null)
//             {
//               //update
//               localStorage.setItem(name1,data1);
//               document.forms.ShoppingList.data.value = localStorage.getItem(name1);
//             }

//     doShowAll();
// }
function RemoveItem()
{
var name=document.forms.ShoppingList.name.value;
document.forms.ShoppingList.data.value=localStorage.removeItem(name);
doShowAll();
}




function ClearAll() {
    localStorage.clear();
    doShowAll();
}



    // function box() {
    //     var tblFruits = document.getElementById("tblFruits");
    //     var chks = tblFruits.getElementsByTagName("INPUT");
    //     for (var i = 0; i < chks.length; i++) {
    //         chks[i].onclick = function () {
    //             for (var i = 0; i < chks.length; i++) {
    //                 if (chks[i] != this && this.checked) {
    //                     chks[i].checked = false;
    //                 }
    //             }
    //         };
    //     }
    // };
