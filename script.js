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
