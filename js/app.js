// EXO 1 :
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
// f(4,2) retourne true
// f(4,7) retourne false

function Exo_1 (num1, num2) {
    return num1 > num2;
}
console.log("Exo_1 : \n" + Exo_1(3, 2));


// EXO 2 :
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse
// f("test") retourne "tset"

function Exo_2 (str) {
    let result_exo2 = "";
    for (let i = str.length-1; i >= 0; i--) {
        result_exo2 += str[i];
    }
    return result_exo2;
}
console.log("Exo_2 : \n" + Exo_2("test"));


// EXO 3 :
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
// f("kayak") retourne true
// f("test") retourne false



// EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
// f(5) retourne 120



// EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
// f(11) retourne true
// f(20) retourne false



// EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle



// EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
// https://fr.wikipedia.org/wiki/Anagramme



// EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
// f("test") retourne faux car le caractère t est présente 2 fois
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)



// EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand



// EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
// f([3,2,6]) retoune 8 (2+6)



// EXO 11 :
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
// f("bonjour je vais bien") affiche "bien vais je bonjour"
// la fonction ne retourne rien



// EXO 12 :
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
// f([3,5,7,3,1,3,5], 3) retourne  [5,7,1,5] car on a supprimer tout les 3 (deuxieme argument)
// Vous devez utiliser la méthode filter()



// EXO 13
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
// f("bonjour") retourne 3 car il y 1 "a", 2 "o" et un "u"
// f("voyage") retourne 3 car il y a 1 "e", 1 "a" et 1 "o"



// EXO 14
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument
// ex: f([[1,2,3],[5,6,7],[39,-23,0]]) retourne -23



// EXO 15
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
// f(3,[3,5,3,6]) retourne [0,2] car le 3 est présent à l'index 0 et à l'index 2



// EXO 16
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
// f(102543) retourne 6 car 102543 contient 6 chiffres