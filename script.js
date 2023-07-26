var message_valeur=document.querySelector(".information").children[1];
var prenom,nom,emaill;
var valeur;
window.onload=()=>{
    valeur="Aucune valeur";
    message_valeur.innerHTML=valeur;

}
var qr=new Qrious({
    Element:document.querySelector(".qrious"),
    size:250,
    value:valeur
})
function change(params){
    switch(params.name){
        case"prenom":
        pronom=params.value;
        break;
        case"nom":
        nom=params.value;
        break;
        case"emaill":
        emaill=params.value;
        break;



        default:
            break; 
    }
    valeur=prenom+'-'+nom+'-'+emaill;
    qr.value=valeur;
message_valeur.innerHTML=qr.value;
}