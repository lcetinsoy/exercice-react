

const data = [
    1, -2, 3, -5
]

//la fonction map applique une fonction sur une liste d'éléments 
//pour en créer une autre

console.log("avant le map")
const data2 = data.map(function (elementCourantDeLaListe){
    console.log("elementCourantDeLaListe", elementCourantDeLaListe, elementCourantDeLaListe * 10)
    return elementCourantDeLaListe * 10
})
console.log("fin du map")


console.log(data)
console.log(data2)