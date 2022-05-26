// function nevalid(input){  //10ta
//     let number = Number(input[0]);
//     if (number != 0 ){
//         if ((number >= 100) && (number <= 200)){
//             console.log()
//         }else {console.log(`invalid`)}
//     }
// }
// nevalid([])


// function workingTime(input){ //7ма
//     let hour = Number(input[0]);
//     let day = input[1];
//     switch (day){
//        case `Monday`:
//            case `Tuesday`:
//            case `Wednesday`:
//            case `Thursday`:
//            case `Friday`:
//            case `Saturday`:
//             if ((hour >=10) && (hour <= 18)){
//                 console.log("open");break;
//         }
//         else {console.log("closed");break;}
//         case `Sunday`:
//             console.log("closed");break;
//     }
// }

// function fruitShop(input){
//     let fruit = input[0];
//     let day = input[1];
//     let pieces = Number(input[2]);
//     switch(day){
//         case `Monday`:
//             case `Tuesday`:
//             case `Wednesday`:
//             case `Thursday`:
//             case `Friday`:
//                 switch (fruit){
//                     case `banana`:      console.log(pieces * 2.50);break;
//                     case `apple`:       console.log(pieces * 1.20);break;
//                     case `orange`:      console.log(pieces * 0.85);break;
//                     case `grapefruit`:  console.log(pieces * 1.45);break;
//                     case `kiwi`:        console.log(pieces * 2.70);break;
//                     case `pineapple`:   console.log(pieces * 5.50);break;
//                     case `grapes`:      console.log(pieces * 3.85);break;
//                 }  ;break;
//         case `Saturday`:
//         case `Sunday`:
//             switch (fruit){
//                     case `banana`:      console.log(pieces * 2.70);break;
//                     case `apple`:       console.log(pieces * 1.25);break;
//                     case `orange`:      console.log(pieces * 0.90);break;
//                     case `grapefruit`:  console.log(pieces * 1.60); break;
//                     case `kiwi`:        console.log(pieces * 3.00);break;
//                     case `pineapple`:   console.log(pieces * 5.60);break;
//                     case `grapes`:      console.log(pieces * 4.20);break;
//             }default: console.log(`error`);break;
//     }
// }




function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let pieces = Number(input[2]).toFixed(2);
    const fruitprice = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana': console.log(pieces * 2.50); break;
                case 'apple': console.log(pieces * 1.20); break;
                case 'orange': console.log(pieces * 0.85); break;
                case 'grapefruit': console.log(pieces * 1.45); break;
                case 'kiwi': console.log(pieces * 2.70); break;
                case 'pineapple': console.log(pieces * 5.50); break;
                case 'grapes': console.log(pieces * 3.85); break;
                default:console.log(`error`);break;
                }
        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana': console.log(pieces * 2.70); break;
                case 'apple': console.log(pieces * 1.25); break;
                case 'orange': console.log(pieces * 0.90); break;
                case 'grapefruit': console.log(pieces * 1.60); break;
                case 'kiwi': console.log(pieces * 3.00); break;
                case 'pineapple': console.log(pieces * 5.60); break;
                case 'grapes': console.log(pieces * 4.20); break;
                default: console.log(`error`); break;
            } default:console.log(`error`);break;
            
            
    }
}
fruitShop(["apple",
"Tuesday",
"2"])
fruitShop(["orange",
"Sunday",
"3"])
fruitShop(["kiwi",
"Monday",
"2.5"])
fruitShop(["grapes",
"Saturday",
"0.5"])
fruitShop
(["tomato",
"Monday",
"0.5"])


// // function fruitShop(input) {
// //     let fruit = input[0];
// //     let day = input[1];
// //     let pieces = Number(input[2]);
// //     let fruitprice = 0;
// //     switch (day) {
// //         case 'Monday':
// //         case 'Tuesday':
// //         case 'Wednesday':
// //         case 'Thursday':
// //         case 'Friday':
// //             switch (fruit) {
// //                 case 'banana': fruitprice = 2.50; break;
// //                 case 'apple': fruitprice= 1.20; break;
// //                 case 'orange': fruitprice = 0.85; break;
// //                 case 'grapefruit': fruitprice = 1.45; break;
// //                 case 'kiwi': fruitprice = 2.70; break;
// //                 case 'pineapple': fruitprice = 5.50; break;
// //                 case 'grapes': fruitprice = 3.85; break;
// //                 default: console.log(`err`);break;
// //                 }console.log(fruitprice * pieces);break;
                
// //         case 'Saturday':
// //         case 'Sunday':
// //             switch (fruit) {
// //                 case 'banana': fruitprice = 2.70; break;
// //                 case 'apple': fruitprice= 1.25; break;
// //                 case 'orange': fruitprice = 0.90; break;
// //                 case 'grapefruit': fruitprice = 1.60; break;
// //                 case 'kiwi': fruitprice = 3.00; break;
// //                 case 'pineapple': fruitprice = 5.60; break;
// //                 case 'grapes': fruitprice = 4.20; break;
// //                 default: console.log(`error`); break;
// //             } break;
            
            
// //     }
// // }



// function tradeComissions(input) {
//     let city = input[0];
//     let sales = Number(input[1]);
//     // komisionnata = prodajbite ako sa - 100 + 100 po 0.5 
//     // commission = sales + (sales * 0.5)
//     // let commission = ;
    
//     let finalSales = 0;
    
    
//          if (city === 'Sofia') {
//              switch (finalSales) {
//                 case '0': if ((sales >= 0) && (sales <= 500)) {
//                     finalSales = sales + (sales * 0.5);
//                       } break;
    
//                 case '1': if ((sales >= 500) && (sales <= 1000)) {
//                     finalSales = sales + (sales * 0.07);
//                     } break;
    
//                 case '2': if ((sales >= 1000) && (sales <= 10000)) {
//                     finalSales = sales + (sales * 0.08); 
//                     console.log('bla');
//                     } break;
    
//                 case '3': if (sales >= 10000) {
//                     finalSales = sales + (sales * 0.12);
//                     } break;
//                  default: console.log('unknown'); break; 
//               }
//         } else if (city === 'Plovdiv') {
//             switch (commission) {
//                 case '1': if ((sales >= 0) && (sales <= 500)) {
//                     finalSum === commission + (commission * 0.055);
//                       } break;
    
//                 case '2': if ((sales >= 500) && (sales <= 1000)) {
//                     finalSum === commission + (commission * 0.08);
//                     } break;
    
//                 case '3': if ((sales >= 1000) && (sales <= 10000)) {
//                     finalSum === commission + (commission * 0.12);
//                     } break;
    
//                 case '4': if (sales >= 10000) {
//                     finalSum === commission + (commission * 0.145);
//                     } break;
//               }
//         } else if (city === 'Varna') {
//             switch (commission) {
//                 case '1': if ((sales >= 0) && (sales <= 500)) {
//                     finalSum === commission + (commission * 0.045);
//                       } break;
    
//                 case '2': if ((sales >= 500) && (sales <= 1000)) {
//                     finalSum === commission + (commission * 0.075);
//                     } break;
    
//                 case '3': if ((sales >= 1000) && (sales <= 10000)) {
//                     finalSum === commission + (commission * 0.10);
//                     } break;
    
//                 case '4': if (sales >= 10000) {
//                     finalSum === commission + (commission * 0.13);
//                     } break;
//               }
//         } console.log(finalSales);
    
    
//     }
//     tradeComissions (["Sofia", "1500"])

// function commission(input){ //12ta
//     let town = input[0];
//     let sales = Number(input[1]);
//     let sum = 0;
//     switch (town){
//         case `Sofia`:
//             if (sales>= 0 && sales < 500 ){
//                 sum = sales * 0.05;
//                 console.log(sum.toFixed(2));
//             } else if (sales >= 500 && sales <= 1000){
//                 sum = sales * 0.07;
//                 console.log(sum.toFixed(2));
//             }else if (sales > 1000 && sales <= 10000){
//                 sum = sales * 0.08;
//                 console.log(sum.toFixed(2));
//             }else if (sales > 10000){
//                 sum = sales * 0.12 ;
//                 console.log(sum.toFixed(2));
//             }break;
//             case `Varna`:
//                 if (sales>= 0 && sales <= 500 ){
//                     sum = sales * 0.045;
//                     console.log(sum.toFixed(2));
//                 } else if (sales >= 500 && sales <= 1000){
//                     sum = sales * 0.075;
//                     console.log(sum.toFixed(2));
//                 }else if (sales > 1000 && sales <= 10000){
//                     sum = sales * 0.10;
//                     console.log(sum.toFixed(2));
//                 }else if (sales > 10000){
//                     sum = sales * 0.13 ;
//                     console.log(sum.toFixed(2));
//                 }break;
//                 case `Plovdiv`:
//                     if (sales>= 0 && sales < 500 ){
//                         sum = sales * 0.055;
//                         console.log(sum.toFixed(2));
//                     } else if (sales >= 500 && sales <= 1000){
//                         sum = sales * 0.08;
//                         console.log(sum.toFixed(2));
//                     }else if (sales > 1000 && sales <= 10000){
//                         sum = sales * 0.12;
//                         console.log(sum.toFixed(2));
//                     }else if (sales > 10000){
//                         sum = sales * 0.145 ;
//                         console.log(sum.toFixed(2));
//                     }else {console.log(error)
//                     }break;
//                     default:console.log(`error`)
//     }
// }
// commission([`Sofia`,`1500`])
// commission([`Plovdiv`,`499.99`])
// commission([`Varna`,`3874.5`])
// commission([`Kaspichan`,`-50`])