const liens = document.querySelectorAll("a") /* On séléctionne tous les liens soius forme de tableau */
const inputAugmentationNb = document.querySelector("#augmentationNb")
const inputAugmentationPourcentage = document.querySelector("#augmentation%")

const btnAugmentation = document.querySelector("#btnAugm")
btnAugmentation.addEventListener("click", function () {
    alert((inputAugmentationNb.value + inputAugmentationPourcentage.value))
})

liens.forEach(lien =>{ /* Pour chaque liens dans le tableau "liens" */
    lien.addEventListener("click", function () { /* On ajoute un EventListener click */
        liens.forEach(a=>a.classList.remove("active")) /* Ici on séléctionne tous les liens et on leur enlève la classe "active"  */
        this.classList.add("active") /* Puis sur l'élément actuellement cliqué on ajoute la classe "active" */
    })
})
