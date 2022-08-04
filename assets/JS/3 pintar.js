
function pintar(backColor, color = 'pink') {
    backColor.style.backgroundColor = color;
  }
clickColor = document.getElementById("ele1")
clickColor.addEventListener("click", ()=> pintar(clickColor, ('green')));