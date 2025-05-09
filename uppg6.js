

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen
    const names = ["Noa", "Per", "Holden", "Rick"];
    let i = 0;
    let text = " ";
    for (let i = 0; i < names.length; i++) {
        text += names[i] + ", ";
    }
    return console.log(text);

}

uppg6();

module.exports = { uppg6 };