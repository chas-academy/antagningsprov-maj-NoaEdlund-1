
function personsOver30(person) {

    for (let i = 0; i < person.length; i++) {
        if (person[i].age > 30) {
            console.log(person[i].name)
            
        }
    }
   
}

const persons = [
    {name: "Curt", age: 98},
    {name: "Isak", age: 12},
    {name: "Lucas", age: 32},
    {name: "Finn", age: 15},
    {name: "Howard", age: 55},
];

function uppg8(){

    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age

    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen

    // anropa funktionen och skicka med arrayen som argument
       
    personsOver30(persons)
}

uppg8();

module.exports = { uppg8 };