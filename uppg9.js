function sort(numbers){
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            console.log("jämt " + numbers[i]);
        } else {
            console.log("udda " + numbers[i]);
        }
    }

}

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument
    
    const myNumbers = [2, 34, 123, 564, 900, 1034];
    
    sort(myNumbers)
  
}
uppg9();
module.exports = { uppg9 };