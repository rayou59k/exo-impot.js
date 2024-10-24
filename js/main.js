// lié l'nput avec id age
const age = document.getElementById('age');
// lié l'input avec id genre, on doit préciser que c'est un id avec le # car on utilise queryselector
const genre = document.querySelector('#genre');
// on recommande d'utiliser querySelector mais tu peux tjrs utiliser getElementById
// lié le bouton par son id a la variable bouton qui est une constante
const bouton = document.getElementById('bouton');
// lié la div resultat avec son id
//const resultat = document.querySelector('#resultat');

// on ajoute un ecouteur d'evenement au click qui appelera la fonction verifierImposition
bouton.addEventListener("click", verifierImposition);


function verifierImposition(){
    if( (age.value > 20 && genre.value == "Homme") || (age.value > 18 && genre.value == "Femme" && age.value < 35) )
    {
       Swal.fire("imposable !");
    }else
    {
         Swal.fire("non imposable");
    }
}

