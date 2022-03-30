const liens = document.querySelectorAll("a") /* On séléctionne tous les liens soius forme de tableau */

liens.forEach(lien =>{ /* Pour chaque liens dans le tableau "liens" */
    lien.addEventListener("click", function () { /* On ajoute un EventListener click */
        liens.forEach(a=>a.classList.remove("active")) /* Ici on séléctionne tous les liens et on leur enlève la classe "active"  */
        this.classList.add("active") /* Puis sur l'élément actuellement cliqué on ajoute la classe "active" */
    })
})

/* -----------------------------Augmentation----------------------------------------- */
const inputAugmentationNb = document.querySelector(".augmentationNb")
const inputAugmentationPourc = document.querySelector(".augmentationPourc")
const bouttonAugmentation = document.querySelector("#btnAugm")
const inputResultatAugmentation = document.querySelector(".resultatAugmentation")


bouttonAugmentation.addEventListener("click", function (){
    inputResultatAugmentation.value = parseFloat(inputAugmentationNb.value) + (parseFloat(inputAugmentationPourc.value)/100 * parseInt(inputAugmentationNb.value))
})

/* ---------------------------------Baisse------------------------------------------------ */
const inputBaisseNb = document.querySelector(".baisseNb")
const inputBaissePourc = document.querySelector(".baissePourc")
const bouttonBaisse = document.querySelector("#btnBaisse")
const inputResultatBaisse = document.querySelector(".resultatBaisse")


bouttonBaisse.addEventListener("click", function (){
    inputResultatBaisse.value = parseFloat(inputBaisseNb.value) - (parseFloat(inputBaissePourc.value)/100 * parseInt(inputBaisseNb.value))
})
/* ------------------------------------------Variation------------------------------------- */
const inputVariationValeur1 = document.querySelector(".variationValeur1")
const inputVariationValeur2 = document.querySelector(".variationValeur2")
const inputResultatVariation = document.querySelector(".resultatVariation")
const bouttonVariation = document.querySelector("#btnVariation")

bouttonVariation.addEventListener("click", function(){
    inputResultatVariation.value = ((parseFloat(inputVariationValeur2.value) - parseFloat(inputVariationValeur1.value))/parseFloat(inputVariationValeur1.value))*100
})
/* -------------------------------------------Pourcentage en nombre---------------------------------- */
const inputPourcEnNbPourcentage = document.querySelector(".inputPourcEnNbPourcentage")
const inputPourcEnNbValeur = document.querySelector(".inputPourcEnNbValeur")
const bouttonPourcEnNb = document.querySelector("#btnPourcEnNb")
const resultatPourcEnNb = document.querySelector(".resultatPourcEnNb")
const paragrapheResultat = document.querySelector(".phraseResultatPourcEnNb")

bouttonPourcEnNb.addEventListener("click", function(){
    resultatPourcEnNb.value = (parseFloat(inputPourcEnNbPourcentage.value) * parseFloat(inputPourcEnNbValeur.value)/100)
    paragrapheResultat.innerHTML = `${inputPourcEnNbPourcentage.value}% de ${inputPourcEnNbValeur.value} est égal a ${resultatPourcEnNb.value}`
})
/* -------------------------------------------Nombre en pourcentage---------------------------------- */
const inputNbEnPourcValeur1 = document.querySelector(".inputNbEnPourcValeur1")
const inputNbEnPourcValeur2 = document.querySelector(".inputNbEnPourcValeur2")
const bouttonNombreEnPourcentages = document.querySelector("#btnNbEnPourc")
const phraseResultatNbEnPourc = document.querySelector(".phraseResultatNbEnPourc")
const resultatCalculNnEnPourc = ""

bouttonNombreEnPourcentages.addEventListener("click", function(){
    resultatCalculNnEnPourc = parseFloat(inputNbEnPourcValeur1.value) * 100 / parseFloat(inputNbEnPourcValeur2.value)
    phraseResultatNbEnPourc.innerHTML = "test" /* `${inputNbEnPourcValeur1.value} represente ${resultatCalculNnEnPourc}% de ${inputNbEnPourcValeur2.value}` */
})
