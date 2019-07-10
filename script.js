var moving = document.getElementsByClassName("moving");


setInterval(function(){
  for (var i = 0; i<moving.length; i++) {
    var e = moving[i];
    if (e.classList.contains("left")) {
      e.classList.remove("left");
      e.classList.add("right");
    } else {
      e.classList.remove("right");
      e.classList.add("left");
    }
  }


}, 1000);

