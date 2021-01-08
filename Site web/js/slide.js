// Fonction créer en jquery le $ remplace le document.getElementById ceci est plus court. On utilise setInterval afin de "controler" le slide, donc on va faire bouger nos ul vers la gauche 
// Grace à une animation qui va appliquer une marge négative de *** en ** secondes car *** en miliseconde = *** en seconde.
// La fonction animate permet d'exécuter une fonction de callback, c'est à dire dés que la fonction animate() retourne complet, elle sera exécutée. Donc quand l'animation est terminée.
// Le callback, est déclarer juste après la durée. Une chainage à ete mis en place, le this représente chacun des .slideshow ul, à chaque défilement d'un slide, on prend le premier élément
// de la liste, on le place à la fin et on annule la marge négative donner à la liste
$(function(){
    setInterval(function(){
       $(".slideshowOne ul").animate(800,function(){
          $(this).css({marginRight:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 5200);
 });

 