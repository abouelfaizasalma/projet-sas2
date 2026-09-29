const prompt = require('prompt-sync')();

const condidats = [{
         cin :"TT12345",
         nom : "salma",
         prenom : "safi",
         partiPolitique : "warda",
         age : 25,
         electeurs : [],
         },{
        cin :"HH78945" ,
        nom : "anas",
        prenom : "nafis",
        partiPolitique : "tagafa",
        age : 19,
        electeurs : [],
         },{
        cin :"gg45698" ,
        nom : "khawla",
        prenom : "nafis",
        partiPolitique : "",
        age : 21,
        electeurs : [],
         },{
        cin :"HH1245",
        nom : "mona",
        prenom : "samih",
        partiPolitique : "flour",
        age :45 ,
        electeurs : [],
         }
        ];

let choix = 0;

do{ 
afficherMenu();

choix = parseFloat(prompt(" choisisser un option : "));

switch(choix){
    case 1 :
       AjouterUnCandidat();
        break;
    case 2 :
       Ajouterplusieurscandidats();
        break;    
    case 3 :
         AficherLesCondidat();
        break;
    case 4 :
        VOTER();
        break;
    case 5 :
         Modifierlesinformationdescondidat();
        break;
    case 6 :
        SupprimerC();
        break;
    case 7 :
         RechercheCondidat();
        break; 
    case 8 :
        Statistique();
        break; 
    case 9:
       console.log("choix = 9");  
        break; 
  
    default :
        console.log("option invalide");

}
} while (choix !== 9);

function afficherMenu(){
    console.log("\n==================================="); 
    console.log("      MENU PRINCIPALE");
    console.log("=====================================");
    console.log("1.Ajouter un nouveau condidat ");
    console.log("2.Ajouter plusieurs condidat a la fois");
    console.log("3Aficher la lister des condidat");
    console.log("4.voter pour un condidat");
    console.log("5. Modifier les informations d'un candidat");
    console.log("6. Supprimer un candidat ");
    console.log("7. Rechercher des candidats ");
    console.log("8. Statistiques de l'élection");
    console.log("9.Quitter");
    console.log("=====================================");
}

function AjouterUnCandidat (){
    let CIN = prompt("Eentrer votre CIN :");
         for(let i = 0 ; i < condidats.length ; i++){
         if(condidats[i].cin ===CIN ){
         console.log("cette CIN exisete deja" );
         return;   
        }  
        }
        let nom = prompt("Entrer votre nom : ");
        let prenom = prompt("Entrer votre prenom :");
        let partiPolitique = prompt ("Entrer votre partiPolitique : ");
        let age = parseFloat(prompt("Entrer votre age : "));

    let nouveaucondidats = {
         cin : CIN,
         nom : nom ,
         prenom : prenom ,
         partiPolitique : partiPolitique ,
         age : age ,
         electeurs : [],
        }
        condidats.push(nouveaucondidats) 
        console.log(" condidat ajouter avec succes " )
    }
    function Ajouterplusieurscandidats(){
     let nombre =parseFloat(prompt("combier des condidat voules-vous ajouter : " ));
     for(let i = 0 ; i < nombre ; i++ ){
     let CIN = prompt("Eentrer votre CIN :");
         for(let j = 0 ; j < condidats.length ; j++){
         if(condidats[j].cin ===CIN ){
         console.log("cette CIN exisete deja" );
         return;   
        }  
    } 
       
        let nom = prompt("Entrer votre nom : ");
        let prenom = prompt("Entrer votre prenom :");
        let partiPolitique = prompt ("Entrer votre partiPolitique : ");
        let age = parseFloat(prompt("Entrer votre age : "));
        let nouveaucondidats = {
         cin : CIN,
         nom : nom ,
         prenom : prenom ,
         partiPolitique : partiPolitique ,
         age : age ,
         electeurs : [],
        }
        condidats.push(nouveaucondidats) ;
        console.log(" condidat ajouter avec succes " );
        }
        return;
      }
    function  AficherLesCondidat(){
    console.log("1.trier les condidat par nombre de votre");
    console.log("2.filter  les condidat par parti politique");
    const choix = parseFloat(prompt("entrer votre choix :"));
    if(condidats.length === 0){
    console.log(" aucun condidat enregistre ! ");
         
    }else{ if (choix === 1) {
         for(let i= 0 ; i<condidats.length ; i++){
            for(let j=0 ; j<condidats.length-i-1 ; j++){
               if (condidats[j].electeurs.length < condidats[j + 1].electeurs.length) {
               let nelecteur = condidats[j];
               condidats[j] =condidats[j + 1];
               condidats[j + 1] = nelecteur;
               }
            }
        }  
            for (let i = 0; i <condidats.length; i++) {
        console.log("-------------------------");
        for (let i = 0; i < condidats.length; i++) {
    console.log("CIN : "+ condidats[i].cin );
    console.log("nom : " + condidats[i].nom );
    console.log("prenom :" + condidats[i].prenom );
    console.log("PARTIpolitique:"+ condidats[i].partiPolitique);
    console.log("age: " +condidats[i].age);
    console.log("Nombre de votre :" + condidats[i].electeurs.length);
        }
        console.log("--------------------------");
    }      
    }else if ( choix===2){
        const POLITIQUE = prompt("Entrer le nom de parti politique : ");
        let trouve = false ;
        for (let i= 0 ; i<condidats.length ; i++){
        if(condidats[i].partiPolitique=== POLITIQUE  ){
         console.log(condidats[i]);
          trouve = true ;
        }
        }
    
    if (!trouve){
        console.log("le parti politique n'est existe pas!" );    
    }}

 }
};

function VOTER(){
       const CinElecteur = prompt("Entrer la CIN : ");
        for (let i = 0; i < condidats.length; i++) {

        for (let j = 0; j <  condidats[i].electeurs.length; j++) {

            if ( condidats[i].electeurs[j] === CinElecteur) {
        console.log("vous avez déjà voté et vous n'avez pas le droit de voter à nouveau. ");
        return;
           }
        }
    }
       const nomElecteur = prompt("Entrer le nom de l'électeur : ");
         console.log("=== LISTE DES CANDIDATS ===");
        for (let i = 0; i < condidats.length; i++) {
        console.log((i + 1) + ". " + condidats[i].prenom + " " + condidats[i].nom + " - " + condidats[i].partiPolitique);
    }
    const choix = Number(prompt("Choisir le numéro du candidat : "));

    if (choix < 1 || choix >condidats.length) {
        console.log("Choix invalide.");
        return;
    }

    const candidatChoisi =condidats[choix - 1];
    candidatChoisi.electeurs.push({
       cin: CinElecteur ,
       nom: nomElecteur,
    });
    console.log("votre votea ete enregestre. ")
}
function Modifierlesinformationdescondidat(){
  let CINcondidat= prompt("Enter un CIN :");
  let trouve =false ;
  for(i= 0 ; i < condidats.length ; i++){
    if(condidats[i]. cin === CINcondidat){
        trouve = true ;
        console.log("1. Modifier le parti politique d'un candidat");
        console.log("2.Modifier l'âge d'un candidat");
  let choix =parseFloat(prompt("entrer votre choix :"));
  if (choix === 1){
     condidats[i].partiPolitique= prompt ("Entrer un nouveau parti politique :");
     console.log(" parti politique modifie .") ;
    } else if (choix===2){
       condidats[i].age =Number(prompt("Entrer nouveau age :")) ;
       console.log("age modifie ." );
    }else{
        console.log(" choix invalide!");
        return;
    }

  }   
  }if(trouve=== false){
   console.log("le candidats est introuvable "); 
}
}

function SupprimerC() {
    let trouve = false;
    const CinSupprimer = prompt("Entrer CIN de candidat supprimer : ");
    for (let i = 0; i < condidats.length; i++){
    if (condidats[i].cin === CinSupprimer){
        condidats.splice(i,1);
        trouve = true;
    }  
    }console.log("Le candidat est supprimer");
    if(trouve === false){
       console.log("candidat introuvable!");
    }
}
function RechercheCondidat() {
    const nomRecherche = prompt("Entrer le nom du candidat : ");
    let trouve = false;
    for (let i = 0; i < condidats.length; i++) {
       if (condidats[i].nom === nomRecherche) {
            console.log("-----------------------------");
            console.log("CIN : "+ condidats[i].cin );
            console.log("nom : " + condidats[i].nom );
            console.log("prenom :" + condidats[i].prenom );
            console.log("PARTIpolitique:"+ condidats[i].partiPolitique);
            console.log("age: " +condidats[i].age);
            console.log("Nombre de votre :" + condidats[i].electeurs.length);
            console.log("-----------------------------");
            trouve = true;
        }
    }
    if (!trouve) {
        console.log("Aucun candidat trouvé avec ce nom !");
    }
}
function Statistique() {
    console.log("-----------------------------------------------------------");
    console.log("---------------Statistiques de l'élection :----------------");
    console.log("-----------------------------------------------------------");
        console.log("Le nombre total de candidats : " + condidats.length);

        let TotalVotes = 0;
        for(let i = 0; i< condidats.length; i++){
        TotalVotes +=  condidats[i].electeurs.length;
        } 
        console.log("Le nombre total de votes : " + TotalVotes);

        console.log("Le Top 3 des candidats ayant le plus de votes : "); 
        for (let i = 0; i< 3; i++){
            for (let j = 0; j<condidats.length-i-1; j++ ){
                if ( condidats[j].electeurs.length <  condidats[j + 1].electeurs.length) {
                    let Top3 =  condidats[j].electeurs.length;
                    condidats[j].electeurs.length =  condidats[j + 1].electeurs.length;
                    condidats[j + 1].electeurs.length = Top3;
                } 
            }
        console.log( condidats[i].nom + " " + condidats[i].prenom + " " + "->" + " " + condidats[i].electeurs.length + "votes");
        }


        console.log("Nombre de candidats par parti politique : ");
        obj = []
        for (let i = 0; i <  condidats.length; i++) {
        if(obj[condidats[i].partiPolitique])
        {
        obj[condidats[i].partiPolitique]++
        } else {
        obj[condidats[i].partiPolitique]=1
        }
    }
        console.log(obj);
};

>>>>>>> 4be0eb7 (projet sas2)
