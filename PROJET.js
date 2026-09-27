const prompt = require('prompt-sync')();

const candidats = [];
let choix = 0 ;

do{
   console.log("\n==============================");
   console.log("        MENU PRINCIPALE ");
   console.log("=================================");
   console.log("1.Ajouter un nouveau candidat");
   console.log("2.Ajouter plusieurs candidats");
   console.log("3.Afficher la liste des candidats");
   console.log("4.Voter pour un candidat");
   console.log("5.Modifier les informations d'un candidat");
   console.log("6.Supprimer un candidat");
   console.log("7.Rechercher des candidats");
   console.log("8. Statistiques de election");
   console.log("0.Quitter");
   console.log("===================================");


   choix = parseInt(prompt("Choisissez une option : "));

    switch (choix) {
        case 1:
            ajouterunCandidat();
           break;

        case 2:
           console.log("ajouter un candidas");
           break;

        case 3:
            console.log("ajouter un candidas");
            break;

        case 4:
            console.log("ajouter un candidas");
            break;

        case 5:
            console.log("ajouter un candidas");
            break;

        case 6:
            console.log("ajouter un candidas");
            break;

        case 7:
            console.log("ajouter un candidas");
            break;

        case 8:
            console.log("ajouter un candidas");
            break;

        case 0:
            console.log("Au revoir !");
            break;

        default:
            console.log("Option invalide !");
    }
 
}while(choix !== 0);

function ajouterunCandidat(){
    const CIN = prompt("Entrez le CIN  : ");
    for(let i = 0; i < candidats.length; i++){
        if(candidats[i].CIN === CIN){
            console.log("cette CIN existe déjà !");
            return;
        }
    }
        let nom = prompt("Entrez le nom : ");
        let prenom = prompt("Entrez le prénom : ");
        let partipolitique = prompt("Entrez le parti politique : ");
        let age = parseInt(prompt("Entrez l'âge : "));

    let noveauCandidat = {
    CIN: CIN,
    nom: nom,
    prenom: prenom,
    partipolitique: partipolitique,
    age: age,
    electeurs: [] ,
    };
candidats.push( noveauCandidat);
console.log("Candidat ajouté avec succès !");  

} 



