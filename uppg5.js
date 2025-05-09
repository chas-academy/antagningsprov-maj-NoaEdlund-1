
function uppg5() {
    // skriv en if-sats som jämför två tal
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    // annars skriv ut "Det andra talet är större än det första"

    let x = 5;
    let y = 8;
    let svar1 = "Det första talet är större än det andra";
    let svar2 = "Det andra talet är större än det första";

    if (x > y) {
        return console.log (svar1);
    } else {
        return console.log (svar2);
    }



}

uppg5();

module.exports = { uppg5 };