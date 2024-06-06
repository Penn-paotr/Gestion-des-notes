// Récupérer des éléments du DOM 

const form = document.getElementById('form');
const matiereSelect = document.getElementById('matiere');
const classeMaxInput = document.getElementById('classeMax');
const classeMoyInput = document.getElementById('classeMoy');
const maNoteInput = document.getElementById('maNote');
const submitButton = document.getElementById('submit');
const cancelButton = document.getElementById('cancel');
const resultPre = document.getElementById('result');

const resultats = []; // Tableau pour stocker les données des utilisateurs

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche l'actualisation de la page
    //déclarer et assigner les variables aux valeurs de saisie du formulaire
  const matiere = matiereSelect.value;
  const classeMax = parseFloat(classeMaxInput.value);
  const classeMoy = parseFloat(classeMoyInput.value);
  const maNote = parseFloat(maNoteInput.value);

  // Vérifier que tous les champs sont remplis et construire l'objet résultat de ce tuple
  if (matiere && classeMax && classeMoy && maNote) {
    const objetResultat = {
      matiere: matiere,
      classeMax: classeMax,
      classeMoy: classeMoy,
      maNote: maNote
    };
    // console.log(objetResultat);
    // l' intégrer dans le tableau d'objets 
    resultats.push(objetResultat);
    // console.log(resultats);
    // Affiche le tableau d'objets JSON dans pre
    // pre.textContent = JSON.stringify(resultats); // ERREUR à corriger.
    console.log(JSON.stringify(resultats));


    // Vider le formulaire
    matiereSelect.value = '';
    classeMaxInput.value = '';
    classeMoyInput.value = '';
    maNoteInput.value = '';
    matiereSelect.textContent = '';
    classeMaxInput.textContent = '';
    classeMoyInput.textContent = '';
    maNoteInput.textContent = '';
  } else {
    alert('Veuillez remplir tous les champs.');
  }
});
