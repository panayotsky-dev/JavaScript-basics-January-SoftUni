function examTri(input){
    let days = Number(input[0]);
    let pomeshtenie = input[1];
    let ocenka = input[2];
    const apart = 25.00;
    const onePerson = 18.00;
    const presApart = 35.00;
    let noshtuvki = days - 1;
    let sum = 0;
    let final = 0;
    let afterScore = 0;
    
    switch (pomeshtenie){
        case `room for one person`:
            final = noshtuvki * onePerson;
            break;
        case `apartment` :
            sum = apart * noshtuvki;
             if ( days < 10){
                final = sum * 0.7;
                ;break;
            }else if (days<= 15 && days >= 10){
                final= sum * 0.65;
                ;break;
            }else if (days > 15){
                final = sum * 0.5;
                ;break;
            }
        case `president apartment`:
            sum = noshtuvki * presApart;
                if(days < 10){
                    final = sum *  0.9;
                }else if (days< 15 && days >= 10){
                    final = sum *  0.85;
                }else if (days > 15){
                    final = sum * 0.8;
                    ;break;  
    }
} switch (ocenka){
    case `positive`:        
        afterScore = final * 1.25;
        console.log(afterScore.toFixed(2));
        ;break;
    case `negative`:
        afterScore = final * 0.9;
        console.log(afterScore.toFixed(2));
        ;break;
}
}


// examTri([`14`,`apartment`,`positive`])
examTri(["30",
"president apartment",
"negative"])
// examTri([`2`,`apartment`,`positive`])
examTri(["12",
"room for one person",
"positive"])
