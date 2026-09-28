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
            AjouterunCandidat();
           break;

        case 2:
            Ajouterplusieurscandidats();  
           break;
            
        case 3:
            AficherLesCondidat();
            break;

        case 4:
          
            break;

        case 5:
           
           break;
        case 6:
            
            break;

        case 7:
          
            break;

        case 8:
           
            break;

        case 0:
            console.log("Au revoir !");
            break;

        default:
            console.log("Option invalide !");
    }

}while(choix !== 0);


function AjouterunCandidat(){
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
function Ajouterplusieurscandidats(){
     let nombre =parseFloat(prompt("combier des condidat voules-vous ajouter : " ));
     for(let i = 0 ; i < nombre ; i++ ){
     console.log("ajoutr condidat " + (i+1));
     AjouterunCandidat ();
     }
    
} 
function  AficherLesCondidat(){
    if(candidats.length === 0){
        console.log(" aucun condidat enregistre ! ");
         return;     
    }
    for (let i = 0; i <candidats.length; i++) {
        console.log("-------------------------");
       AficherUnCondidat(candidats[i]);
        console.log("--------------------------");
    }                  
  console.log("1.trier les condidat par nombre de votre");
    console.log("2.filter  les condidat par parti politique");
    
    const choix = parseFloat(prompt("entrer votre choix :"));
    if (choix === 1) {
        
        for(let i= 0 ; i<candidats.length-1 ; i++){
            for(let j=0 ; j< candidats.length-1-i ; j++){
               if (candidats[j].electeurs.length < candidats[j + 1].electeurs.length) {
            let nelecteur = candidats[j];
            candidats[j] =candidats[j + 1];
            candidats[j + 1] = nelecteur;
            }
         }
    console.log("-----------------------------");
     AficherUnCondidat(candidats[i]);
     
        }
         } else if ( choix===2){
    const POLITIQUE = prompt("Entrer le nom de parti politique : ");
    let trouve = false ;
    for (let i= 0 ; i< candidats.length ; i++){
        if(candidats[i].partiPolitique=== POLITIQUE  ){
         console.log(candidats[i]);
     trouve = true ;
        }
    console.log("-------------------");
    AficherUnCondidat(candidats)
    }
    
    if (!trouve){
        console.log("le parti politique n'est existe pas!" );    
    }
}

} 
function  AficherUnCondidat(candidats){
    console.log("CIN : "+ candidats.CIN );
    console.log("nom : " + candidats.nom );
    console.log("prenom :" + candidats.prenom );
    console.log("partipolitique:"+ candidats.partiPolitique);
    console.log("age: " + candidats.age);
    console.log("Nombre de votre :" + candidats.electeurs.length);
} 
