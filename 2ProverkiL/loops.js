// function numbers1to100(i){               //1va
//         for (let i = 1; i <= 100; i++){
//         console.log(i);
        
//     }
// }
// numbers1to100();

// function backNumbers(input){             //2ra
//     let n = Number(input[0])
//     for (let a = n;a>0 ;a--){
//         console.log(a);
//     }
// }
// backNumbers([`5`]);


// function prezTri(input){                  //3ta
//     let a = Number(input[0]);
//     for(let i = 1; i <= a; i += 3){
//         console.log(i)
//     }
// }
// prezTri([`10`])

// function deeba(input){                   //4ta
//     let n = Number(input[0]);

//     for(let i = 0; i <= n; i+=2){
//         // MATH.POW POVDIGA CHISLO NA STEPEN - v skobite stepenta v sluchaq 2 i sled tova chisloto
//         console.log(Math.pow(2, i));
//     }
// }
// deeba([`3`])

// function blqks(input){
//     let text = input[0];
//     for (let i = 0; i < text.lenght;i++){
//         let letter = text[i];
//         console.log(letter);
//     }
// }
// blqks([`softuni`])


// function chatSequence1(input){
//     let text = input[0];

//     for(let i = 0; i < text.length; i++){
//         console.log(text[i]);
//     }
// }

// function sumiraneChisla(input){ //7ma
//     let sum = 0;
//     let number = input[0];
//     for (let i = 0; i < number.length; i++){
//         sum += Number(number[i])
//     }
//     console.log(`The sum of the digits is:${sum}`);

// }

// sumiraneChisla([`1234`])

// function solve(input){ //8ma
//     let n = Number(input[0]);
//     let m = Number(input[1]);
//     let sum = 0;
//     let outputNumbers = ``;
//     for (let i = n;i < m; i++){
//         if (i % 9 === 0 ){
//             sum += i;
           
//         }
//     }console.log(`The sum: ` + sum);
//     for (let i = n;i < m; i++){
//         if (i % 9 === 0 ){
//             sum += i;
            
//             console.log(i)
//         }}
// }
// solve([`100`,`200`])