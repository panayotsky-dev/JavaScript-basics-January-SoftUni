function svetovenRecord(input){
    let record = Number(input[0]); // v secundi
    let razstoqnie = Number(input[1]); // v metri
    let oneMS = Number(input[2]); // vremeto v sekundi pluvane 1 m
    let zabavqne = Math.floor(razstoqnie / 15);
    let zabavqnesek = zabavqne * 12.5;
    let all = (razstoqnie * oneMS) + zabavqnesek;
    
    
    
    if (all > record){
        console.log(`No, he failed! He was ${Math.abs(record - all).toFixed(2)} seconds slower.`)
    }else if (all <= record)
    console.log(`Yes, he succeeded! The new world record is ${all.toFixed(2)} seconds.`)
}

svetovenRecord(["10464","1500","20"])
svetovenRecord(["55555.67","3017","5.03"])