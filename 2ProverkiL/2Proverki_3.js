// function trimaPotni(input){  //1va zad
//     let firstPoten = Number(input[0]);
//     let secondPoten = Number(input[1]);
//     let thirdMnouPoten = Number(input[2]);
//     let totalPotni = firstPoten + secondPoten + thirdMnouPoten;
//     let minutnoPotni = Math.floor(totalPotni / 60);
//     let seconds = totalPotni % 60;
//     if (seconds < 10){
//         console.log(`${minutnoPotni}:0${seconds}`);
//     } else {
//          console.log(`${minutnoPotni}:${seconds}`)
//         }
    
    
// }
//trimaPotni([35,45,44])


// function bonusZX(input){
//     let bonus100 = Number(input[0]);
//     if( bonus100 <= 100)
//     {
//         let smetka = bonus100 + 5;
     
//    } else if ( bonus100 >= 100)
//     {
//         let smetka = bonus100 * 1.2 ;
//     }else if ( bonus100 > 1000)
//     {
//       let smetka = bonus100 * 1.1 ;
//     } console.log(smetka)
    
//     if (smetka % 2 === 0)
//     {
//         let doubleB = smetka + 1;
//     }else if ( smetka % 5 === 0)
//     {
//         let fiveB = smetka + 2 ;
//     } 
//     let result = smetka + doubleB + fiveB;
//     console.log(result)
// }


function bonusPoints(input){ // 2ra zad 
    let score = Number(input[0]);
    let bonus = 0;
    if ( score <= 100){
        bonus = 5; 
    } else if (score > 1000 ){
        bonus = score * 1.1 ;
    } else {
        bonus = score * 1.2 ;
    } if ( score % 2 == 0) {
        bonus += 1;
    } else if (score % 10 === 5 ) {
        bonus += 2 ;
    }
    console.log(bonus);
    console.log(score + bonus);
}
bonusPoints([20])   

function addMins(input){ //3ta zad
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let totalmins = hours * 60 + minutes + 15;
    let h = Math.floor(totalmins / 60);
    let m = totalmins % 60;
    if (m < 10){
        console.log(`${h}:0${m}`)
    } else {
console.log(`${h}:${m}`)}

}
addMins([5,47])

// function petq(input){ // 4ta
//     let ekz = Number(input[0]);
//     let pyzel = Number(input[1]) * 2.6;
//     let talkDoll = Number(input[2]) * 3;
//     let mechoo = Number(input[3]) * 4.1;
//     let banana = Number(input[4]) * 8.2;
//     let traktora = Number(input[5]) * 2;
//     let broi = input[1] + input[2] + input[3] + input[4] + input[5];
//     let suma = pyzel + talkDoll + mechoo + banana + traktora;
//     let naem = 0;
//     let kurac = 0
//     if (broi >= 50){
//         suma = suma * 0.75;
//         naem = suma *0.9;
//         if (ekz < suma){
//         kurac = (naem - ekz).toFixed(2)
//         console.log(naem);
//         console.log(`Yes baby, otivame na eksurkziq ${kurac} lv ti ostavat `)
//         } else if (broi < 50 ){
//         naem = suma * 0.9;
//         if (ekz < suma ){
//             kurac = (naem - ekz).toFixed(2);
//             console.log(`Yes otivame ${kurac} lv ostavat`)
//         } else {
//             console.log(`Ne otivame`)
//         }}
//     }}
// //petq([40.8,20,25,30,50,10])
// petq([320,8,2,5,5,1])

// function petqToys(input){ // 4ta
//     let ekzCena = Number(input[0]).toFixed(2);
//     let pyzel = Number(input[1]) * 2.6;
//     let talkDoll = Number(input[2]) * 3;
//     let mechoo = Number(input[3]) * 4.1;
//     let banana = Number(input[4]) * 8.2;
//     let traktora = Number(input[5]) * 2;
//     let broi = input[1] + input[2] + input[3] + input[4] + input[5];
//     let suma = pyzel + talkDoll + mechoo + banana + traktora;
//     let sumaOts = suma * 0.75
//     let resultSuma = (suma * 0.9).toFixed(2);
//     let resultSumaSOts = (sumaOts * 0.9).toFixed(1);
    
//     if (broi >= 50){
//         if ( resultSumaSOts - ekzCena >= 0){
//             console.log(`Yes! ${(resultSumaSOts - ekzCena).toFixed(2) } lv left.`)
//         } else if (ekzCena - resultSumaSOts <= 0)
//         { console.log(`Not enough money! ${resultSumaSOts - ekzCena} lv needed.`)}
//     }else if(broi < 50){
//         if ( resultSuma - ekzCena >= 0){
//             console.log(`Yes! ${ekzCena - resultSuma } lv left.`);
//         } else 
//         { console.log(`Not enough money! ${(ekzCena - resultSuma).toFixed(2)} lv needed.`)}
//     }
// }
//     petqToys([40.8,20,25,30,50,10])
//     petqToys([320,8,2,5,5,1])


function toyStore(input){
    const puzzle = 2.6;
    const talkDoll = 3;
    const teddyBear = 4.1;
    const minion = 8.2;
    const truck = 2;
        let tripPrice = Number(input[0]);
        let pPuzzle = Number(input[1]) * puzzle;
        let pTalkDoll = Number(input[2]) * talkDoll;
        let pTeddyBear = Number(input[3]) * teddyBear;
        let pMinion = Number(input[4]) * minion;
        let pTruck = Number(input[5]) * truck;
        let profit = pPuzzle + pTalkDoll + pTeddyBear + pMinion + pTruck ;
        let Discount = profit * 0.75; // smqtane na otstypka ot 25% pri porychani nad 50br igrachki
        let profiWithDiscount = Discount * 0.9;  // 10% naem ot gornicata bez otstypka
        let profitWithoutDiscount = profit * 0.9; //  naem 10% ot gornicata s otstypka
        let broi = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]); // broi igrachki
        let result = 0;
        let result1 = 0;
            if (broi >= 50){
                result = profiWithDiscount - tripPrice
                if ( result > 0 ){
                 console.log(`Yes! ${result.toFixed(2)} lv left.`)
                  } else if (result <= 0 ){
                 result1 = tripPrice - profiWithDiscount;
                 console.log(`Not enough money! ${result1.toFixed(2)} lv needed.`);
                  }
                 }else if (broi < 50){
                  result = (profitWithoutDiscount - tripPrice);
                 if (result > 0){
                console.log(`Yes! ${result.toFixed(2)} lv left.`)
                }else if (result <= 0){
                 result1 = (tripPrice - profitWithoutDiscount);
                 console.log(`Not enough money! ${result1.toFixed(2)} lv needed.`)
               }
               }

         }

toyStore([320,8,2,5,5,1])
toyStore(["320","8","2","5","5","1"])


// function godzillaVsKong(input){
//     let budjet = Number(input[0]);
//     let decor = budjet * 0.1;
//     let broistatisti = Number(input[1]);
//     let cenastatist = Number(input[2]);
//     let obleklo = 0;
//     let result = budjet - decor - obleklo;
    

//     if ( broistatisti > 150){
//         let obleklo = (broistatisti * cenastatist) * 0.9;
        
//         console.log(`Action!`)
//         console.log(`Wingard starts filming with ${result} leva left.`)
        
        
//     }else
//     obleklo = cenastatist * broistatisti;
//     console.log(`Action!`)
//     console.log(`Wingard starts filming with ${result} leva left.`)
         

// }
// godzillaVsKong(["2000","120","55.5"])
// godzillaVsKong(["15437.62","186","57.99"])
// godzillaVsKong(["9587.88","222","55.68"])

function movie(input){
    let budjet = Number(input[0]);
    let decor = budjet * 0.1;
    let broiscenaristi = Number(input[1]);
    let cenaobleklo = Number(input[2]);
    let obleklo = broiscenaristi * cenaobleklo;
    let oblekloD = obleklo * 0.9;
    let result = budjet - decor - obleklo;
    let resultD = budjet - decor - oblekloD;
    let asd = obleklo + decor;
    
    if (broiscenaristi > 150){
        
        if (result > 0){

            console.log(`Action!`)
            console.log(`Wingard starts filming with ${resultD.toFixed(2)} leva left.`)
        } else if (result <= 0 ){
            let bvc = (oblekloD + decor) - budjet;
            console.log(`Not enough money!`);
            console.log(`Wingard needs ${bvc.toFixed(2)} leva more.`);
        }
    }else if (broiscenaristi < 150){
        if (result > 0){
            
            console.log(`Action!`)
            console.log(`Wingard starts filming with ${result.toFixed(2)} leva left.`)
        } else if (result <= 0 ){
            let bvc = asd - budjet;
            console.log(`Not enough money`)
            console.log(`Wingard needs ${bvc.toFixed(2)} leva more.`)
    }
}}

movie(["20000","120","55.5"])
movie(["15437.62","186","57.99"])
movie(["9587.88","222","55.68"])