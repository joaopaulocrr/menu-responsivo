function clicar() {
  var clique = document.getElementById("display").style.display;

  if (clique == "none")
    document.getElementById("display").style.display = 'block';
  else
    document.getElementById("display").style.display = 'none';
};

function mudouTamanho() {
  if (window.innerWidth >= 700) {
    document.getElementById("display").style.display = 'block'
  } else {
    document.getElementById("display").style.display = 'none'
  }
};