function ope() {
  var x = document.getElementById("navbutton");
  var z = document.getElementById("top");

  if (x.style.width === "70vw") {
    x.style.width = "0";
    x.style.opacity = "0";
    z.style.right = "0";
  } else {
    x.style.width = "70vw";
    x.style.opacity = "100%";
    z.style.right = "70vw";
  }
}


function ord(n) {

  var drink = ["Short Black", "Macchiato", "Ristretto", "Long Black", "Americano", "Flat White",
"Cappuccino", "Latte", "Mochaccino", "Mocha Latte", "Hot Chocolate", "Deluxe Hot Chocolate", 
"Chai Latte", "Iced Coffee", "Iced Chocolate", "Iced Chai"];

  var x = document.getElementById("order-win");
  var z = document.getElementById("fade");

  if (x.style.opacity === "block"){
	x.style.display = "none";
	z.style.display = "none";
	x.style.opacity = "0";
	z.style.opacity = "0";
  } else{
	x.style.display = "block";
	z.style.display = "block";
	x.style.opacity = "100%";
	z.style.opacity = "50%";

	document.getElementById("zxcv").innerHTML = drink[n];
	}
}

function q(){
document.getElementById('order-win').style.display = 'none';
document.getElementById('fade').style.display = 'none';
}