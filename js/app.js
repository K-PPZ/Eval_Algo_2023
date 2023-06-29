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

function Exo_3 (str) {
    let result_exo3 = "";
    for (let i = str.length-1; i >= 0; i--) {
        result_exo3 += str[i];
    }
    return str == result_exo3;
}
console.log("Exo_3 : \n" + Exo_3("kayak"));


// EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
// f(5) retourne 120

function Exo_4 (num) {
    let result_exo4 = 1;
    for (let i = 1; i <= 5; i++) {
        result_exo4 *= i;
    }
    return result_exo4;
}
console.log("Exo_4 : \n" + Exo_4(5));


// EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
// f(11) retourne true
// f(20) retourne false

function Exo_5 (num) {
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
        }
    }
    return flag;
}
console.log("Exo_5 : \n" + Exo_5(11));

// EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle

function Exo_6 (arr) {
    let i = 1;
    let best_num = arr[0];

    // if (i <= arr.length-1) {
    //     i+=1;
    //     console.log(i);
    // }

    // if (best_num < arr[i] && i < arr.length-1) {
    //     best_num = arr[i];
    //     i++;
    //     console.log(best_num);
    // } else {
    //     i++;
    // }


    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > best_num) {
    //         best_num = arr[i];
    //     }
    // }
}
console.log("Exo_6 : \n" + Exo_6([5, 3, 8, 4, 6, 75]));


// EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
// https://fr.wikipedia.org/wiki/Anagramme

function Exo_7 (str1, str2) {
    // for (let i = 0; i < str1.length; i++) {
    //     if (str1.includes(str2[i])) {
    //         console.log(true);
    //     }
    // }
}
console.log("Exo_7 : \n" + Exo_7("La crise économique", "Le scénario comique"));


// EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
// f("test") retourne faux car le caractère t est présente 2 fois
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)

function Exo_8 (str) {
    let num_exo8 = 0;
    let occurence = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[num_exo8] == str[i]) {
            occurence++;
            if (i == str.length && num_exo8 < str.length-1) {
                num_exo8++;
                i = 0;
            }
        }
    }

    return occurence > 1;
}
console.log("Exo_8 : \n" + Exo_8("Test"));


// EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand

function Exo_9 (arr) {
    let best_num = arr[0];
    let second_best_num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > best_num) {
            best_num = arr[i];
            i = 0;
        }
    }

    for (let y = 1; y < arr.length; y++) {
        if (arr[y] > second_best_num && arr[y] < best_num) {
            second_best_num = arr[y];
        }
    }

    return second_best_num;
}
console.log("Exo_9 : \n" + Exo_9([5, 6, 2, 9, 23]));


// EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
// f([3,2,6]) retoune 8 (2+6)

function Exo_10 (arr) {
    let result_exo10 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result_exo10 += arr[i];
        }
    }
    return result_exo10;
}
console.log("Exo_10 : \n" + Exo_10([3, 2, 6]));


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