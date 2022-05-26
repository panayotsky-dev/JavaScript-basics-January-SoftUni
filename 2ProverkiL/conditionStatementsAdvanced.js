// function littleShops (input){ //5ta
//     let product = input[0];
//     let town = input[1];
//     let piece = Number(input[2]);
//     if (town == `Sofia`){
//          switch(product){
//             case `coffee`: console.log((0.5 * piece).toFixed(2));break;
//             case `beer`: console.log((1.2 * piece).toFixed(2));break;
//             case `water`: console.log((0.8* piece).toFixed(2));break;
//             case `sweets`: console.log((1.45* piece).toFixed(2));break;
//             case `peanuts`: console.log((1.6 * piece).toFixed(2));break;
//             }
//     }else if (town == `Varna`){
//         switch(product){
//         case `coffee`: console.log((0.45 * piece).toFixed(2));break;
//         case `beer`: console.log((1.1*piece).toFixed(2));break;
//         case `water`: console.log((0.7* piece).toFixed(2));break;
//         case `sweets`: console.log((1.35* piece).toFixed(2));break;
//         case `peanuts`: console.log((1.55 * piece).toFixed(2));break;
//         }        
//     }else if(town == `Plovdiv`){
//         switch(product){
//             case `coffee`: console.log(0.4 * piece);break;
//             case `beer`: console.log(1.15*piece);break;
//             case `water`: console.log((0.7* piece).toFixed(2));break;
//             case `sweets`: console.log(1.3*piece);break;
//             case `peanuts`: console.log(1.5 * piece);break;
            
//         }
//     }

// }

function numberBetween(input){
    let chislo = Number(input[0]);
    if (chislo > -100){
        if(chislo < 100){
            if (chislo != 0){
                console.log(`Yes`)
            }else if (chislo = 0){
                console.log(`No`)
            }
        }else if (chislo > 100){
            console.log(`No`)
        }
    }else if (chislo < -100){
        console.log(`No`)
    }
}

function workingTime(input){ //7ma
    let hour = Number(input[0]);
    let day = input[1];
    switch (day){
       case `Monday`:
           case `Tuesday`:
           case `Wednesday`:
           case `Thursday`:
           case `Friday`:
           case `Saturday`:
            if (hour >10){
            if(hour < 18){
            console.log("open");break;
        }
        }else {console.log("closed");break;} ;
        case `Sunday`:
            console.log("closed");break;
    }
}

workingTime([`11`,`Monday`])
workingTime([`19`,`Friday`])
workingTime([`11`,`Sunday`])

// function cinemaTickets(input){ //8ma
//     let day = input[0];
//     switch(day){
//         case `Monday`: 
//         case `Tuesday`:
//         case `Friday`:console.log(`12`);break;
//             case `Wednesday`:
//             case `Thursday`: console.log(`14`);break;
//                 case `Saturday`:
//                 case `Sunday`: console.log(`16`);break;
//                 default: console.log(`error`);

//     }
// }
// cinemaTickets([`Monday`])
// cinemaTickets([`Friday`])
// cinemaTickets([`Sunday`])

function fruitOrVegetable(input){
    let kind = input[0];
    switch (kind){
        case `banana`:
        case `apple`:
        case `kiwi`:
        case `cherry`:
        case `lemon`:
        case `grapes`: console.log(`fruit`);break;
            case `tomato`:
            case `cucumber`:
            case `pepper`:
            case `carrot`:console.log(`vegetable`);break;
                default:console.log(`unknown`);break;
    }
    }
fruitOrVegetable([`banana`])