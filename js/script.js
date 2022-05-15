var accordin = document.getElementsByClassName("accordin");

var i;
for (i = 0; i < accordin.length; i++) {
    accordin[i].addEventListener("click", function() {
   
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    
  });
}

// var acc = document.getElementsByClassName("accordin");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
   
//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }