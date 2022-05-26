function secondExam(input){
    let djobni = Number(input[0]);
    let specheleni = Number(input[1]);
    let razhodi = Number(input[2]);
    let giftPrice = Number(input[3]);
    let spesteni = djobni * 5;
    let spech = specheleni * 5;
    let sumOne = spesteni + spech;
    let razhodiOne = sumOne - razhodi;
    let smetka = Math.abs(razhodiOne - giftPrice);
    if ( razhodiOne > giftPrice){
        console.log(`Profit: ${razhodiOne.toFixed(2)} BGN, the gift has been purchased.`)

    }else{ console.log(`Insufficient money: ${smetka.toFixed(2)} BGN.`)}
}

secondExam([`5.12`,`32.05`,`15`,`150`])