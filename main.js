window.addEventListener("scroll", function(){
  var header = document.querySelector("header"); // on stock le header dans une variable.
  header.classList.toggle("sticky", window.scrollY > 0);
})

// Cette fonction permet au moment de scroll vers le bas d'ajouter une classe "sticky" au header et donc pouvoir modifié l'élément dans le css