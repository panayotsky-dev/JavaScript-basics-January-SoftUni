// function laizaMineli(input){
// const roses = 5;
// const dahlias = 3.8;
// const tulips = 2.8;
// const narcissus = 3;
// const gladiolus = 2.5;
// let cvete = input[0];
// let brcvetq = Number(input[1]);
// let budjet = Number(input[2]);
// let roziots =  Math.abs(budjet - ((brcvetq * roses)*0.9)).toFixed(2);
// let roziotsDve =  Math.abs(budjet - ((brcvetq * roses)*0.9)).toFixed(2);
// let rozibezots = Math.abs(budjet - (brcvetq * roses)).toFixed(2);
// let rozibezotsDve = budjet - (brcvetq * roses).toFixed(2);
// let dahliasots = Math.abs(budjet - ((brcvetq * dahlias)* 0.85)).toFixed(2);
// let dahliasotsDve =budjet - ((brcvetq * dahlias)* 0.85).toFixed(2);

// let dahliasbez = Math.abs(budjet - (brcvetq * dahlias)).toFixed(2);

// let dahliasbezDve =budjet - (brcvetq * dahlias).toFixed(2);

// let tulipsots = Math.abs(budjet - ((brcvetq * tulips)*0.85)).toFixed(2);
// let tulipsotsDve = budjet - ((brcvetq * tulips)*0.85);
// let tulipsbez = Math.abs(budjet - (brcvetq * tulips)).toFixed(2);
// let tulipsbezDve = budjet - (brcvetq * tulips);

// let narcissusevt = Math.abs(budjet - (brcvetq * narcissus)).toFixed(2);
// let narcissusevtDve = budjet - (brcvetq * narcissus);
// let narcissusskpDve = budjet - (brcvetq * narcissus)* 1.15;
// let narcissusskp = Math.abs(budjet - (brcvetq * narcissus)* 1.15).toFixed(2);
// Съществуват следните отстъпки:
//  Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
//  Ако Нели купи повече от 90 Далии - 15% отстъпка от крайната цена
//  Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
//  Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
//  Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
// Функцията получава 3 аргумента:
//  Вид цветя - текст с възможности - &quot;Roses&quot;, &quot;Dahlias&quot;, &quot;Tulips&quot;, &quot;Narcissus&quot;, &quot;Gladiolus&quot;
//  Брой цветя - цяло число в интервала [10…1000]
//  Бюджет - цяло число в интервала [50…2500]
// switch (cvete){
//     case `Roses`:
//         if (brcvetq >= 80){
//             if (roziotsDve>= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${roziots} leva left.`);break;}
//                 else {console.log(`Not enough money, you need ${roziots} leva more.`)}
//         }else if (brcvetq < 80){
//             if (rozibezotsDve >= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${rozibezots} leva left.`);break;
//             } else  {console.log(`Not enough money, you need ${rozibezots} leva more.`)}
//         }
//         ;break;
//     case `Dahlias`: 
//         if (brcvetq > 90){
//             if (dahliasotsDve>= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${dahliasots} leva left.`);break;}
//                 else {console.log(`Not enough money, you need ${dahliasots} leva more.`)}
//         }else if (brcvetq < 90){
//             if (dahliasbezDve >= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${dahliasbez} leva left.`);break;
//             } else  {console.log(`Not enough money, you need ${dah} leva more.`)}
//         }
//         ;break;
//     case `Tulips` : 
//         if (brcvetq >= 80){
//             if (tulipsotsDve>= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${tulipsots} leva left.`);break;}
//                 else {console.log(`Not enough money, you need ${tulipsots} leva more.`)}
//         }else if (brcvetq < 80){
//             if (tulipsbezDve >= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${tulipsbez} leva left.`);break;
//             } else  {console.log(`Not enough money, you need ${tulipsbez} leva more.`)}
//         }
//         ;break;
//     case `Narcissus` :  
//         if (brcvetq > 120){
//             if (narcissusevtDve >= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${narcissusevt} leva left.`);break;}
//                 else {console.log(`Not enough money, you need ${narcissusevt} leva more.`)}
//         }else if (brcvetq < 120){
//             if (narcissusskpDve >= 0){
//                 console.log(`Hey, you have a great garden with ${brcvetq} ${cvete} and ${narcissusskp} leva left.`);break;
//             } else  {console.log(`Not enough money, you need ${narcissusskp} leva more.`)}
//         }
//         ;break;
//     case `Gladiolus` :


// }
// }

// laizaMineli([`Roses`,`55`,`250`])
// laizaMineli([`Tulips`,`88`,`260`])


// function cinema(input){          //1va
//     let projection = input[0];
//     let redove = Number(input[1]);
//     let koloni = Number(input[2]);
//     let premiera = (redove * koloni * 12).toFixed(2);
//     let normalen = (redove * koloni * 7.5).toFixed(2);
//     let namalenie = (redove * koloni * 5).toFixed(2);
//     switch (projection){
//         case `Premiere`:
//             console.log(`${premiera} leva`);break;
//         case `Normal` :
//             console.log(`${normalen} leva`);break;
//         case `Discount`:
//             console.log(`${namalenie} leva`);break;
//         default:console.log(`error`);break;
//     }
// }
// cinema([`Premiere`,`10`,`12`])
// cinema([`Normal`,`21`,`13`])
// cinema([`Discount`,`12`,`30`])

// function summerOutfit(input){        //2ra
//     let gradusi = Number(input[0]);
//     let chastOtdenq = input[1];
//     switch(chastOtdenq){
//         case `Morning`:
//             if (gradusi >= 10 && gradusi <= 18){
//                 console.log(`It's ${gradusi} degrees, get your Sweatshirt and Sneakers.`);
//             }else if (gradusi > 18 && gradusi <= 24){
//                 console.log(`It's ${gradusi} degrees, get your Shirt and Moccasins.`);
//             }else if (gradusi >=25 ){
//                 console.log(`It's ${gradusi} degrees, get your T-Shirt and Sandals.`);
//             };break;
//         case `Afternoon`:
//             if (gradusi >= 10 && gradusi <= 18){
//                 console.log(`It's ${gradusi} degrees, get your Shirt and Moccasins.`);
//             }else if (gradusi > 18 && gradusi <= 24){
//                 console.log(`It's ${gradusi} degrees, get your T-Shirt and Sandals.`);
//             }else if (gradusi >=25 ){
//                 console.log(`It's ${gradusi} degrees, get your Swim Suit and Barefoot.`);
//             };break;
//         case `Evening` :
//             if (gradusi >= 10 && gradusi <= 18){
//                 console.log(`It's ${gradusi} degrees, get your Shirt and Moccasins.`);
//             }else if (gradusi > 18 && gradusi <= 24){
//                 console.log(`It's ${gradusi} degrees, get your Shirt and Moccasins.`);
//             }else if (gradusi >=25 ){
//                 console.log(`It's ${gradusi} degrees, get your Shirt and Moccasins.`);
//             };break;
//     }
// } 
// summerOutfit([`16`,`Morning`])


function newHome(input){
const roses = 5;
const dahlias = 3.8;
const tulips = 2.8;
const narcissus = 3;
const gladiolus = 2.5;
const type = input[0];
const count = Number(input[1]);
const budget = Number(input[2]);
let finalprice = 0;
switch(type){
    case `Roses`:
        if (count > 80){
            finalprice = budget - ((roses * count) * 0.9);
        }else { finalprice = budget - roses * count}
        break;
    case `Dahlias`:
        if (count > 90){
            finalprice = budget - ((dahlias * count) * 0.85);
        }else { finalprice = budget - dahlias * count}
        break;
    case `Tulips`:
        if (count > 80){
            finalprice = budget - ((tulips * count) * 0.85);
        }else {budget - tulips * count};
        break;
    case `Narcissus`:
        if (count >= 120){
            finalprice = budget - narcissus * count;
        }else {finalprice = budget - ((narcissus * count) * 1.15)}
        break;
    case `Gladiolus`:
        if (count >= 80){
            finalprice = budget - gladiolus * count 
        }else {finalprice = budget - ((gladiolus * count) * 1.2)}
        break;
        }
        if (finalprice >= 0){
            console.log(`Hey, you have a great garden with ${count} ${type} and ${finalprice.toFixed(2)} leva left.`)
        }else {
            console.log(`Not enough money, you need ${Math.abs(finalprice).toFixed(2)} leva more.`)
        }
    }

newHome(["Roses",
"55",
"250"])
newHome(["Tulips",
"88",
"260"])
newHome(["Narcissus",
"119",
"360"])

