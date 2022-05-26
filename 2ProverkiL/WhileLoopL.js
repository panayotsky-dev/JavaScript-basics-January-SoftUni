// function words(input){ //1va
//   let index = 0;
//   let str = input[index];
//   index++;
//   while (str !== `Stop`){
//       console.log(str);
//       str = input[index];
//       index++;
          
//       }
//   }

// words(["Nakov",
// "SoftUni",
// "Sofia",
// "Bulgaria",
// "SomeText",
// "Stop",
// "AfterStop",
// "Europe",
// "HelloWorld"])

// function usernamePassword(input){2ра
//   let index = 0;
//   let username = input[index];
//   index++;
//   let password = input[index];
//   index++;
//   let inputed = input[index];
//   index++;
  
//   while (inputed !== password){
    
//     inputed = input[index];
    
//     index++;
//   }console.log(`Welcome ${username}!`);
  
// }
// usernamePassword(["Nakov",
// "1234",
// "Pass",
// "1324",
// "1234"])
// usernamePassword(["Gosho",
// "secret",
// "secret"])
// function sumNumbers(input){//3ta
//   let first = Number(input[0]);
//   let index = 1;
//   let count = 0;
  
  
  
//   while (first > count){
//     let sum = Number(input[index]);
//   index++;
//     count += sum;
    
    
//     if ( first <= count){
//       console.log(count)
//       break;
      
//     }
//   }
// }
// sumNumbers(["100",
// "10",
// "20",
// "30",
// "40"])

// function twoK(input){
//   let number = Number(input[0]);
//   let k = 1;
//   while (k <= number){
//     console.log(k);
//     k=k*2+1;
//   }
// }
// twoK([`3`])

// function smetka(input){//5ta
//   let deposit = input[0];
//   let balance = 0;
//   let index = 1;
//     while (deposit !== `NoMoreMoney`){
//       let amount = Number(deposit);
//       if (amount < 0 ){
//         console.log ( `Invalid operation!`);
//         break;
//         }
//         balance += amount;
//   console.log(`Increase: ${amount}`);
//   deposit = input[index];
//   index++;
//   }console.log(`Total: ${balance}`)
// }
// smetka([`5.51`,`69.42`,`100`,`NoMoreMoney`])

// function bigger(input){ //6ta
//   let inputElement = input[0];
//   let index = 1;
//   let max = Number.MIN_SAFE_INTEGER;
//   while(inputElement!== `Stop`){
//     let num = Number(inputElement);
//     if (num>max){
//       max = num;
//     }
//     inputElement = input[index];
//     index++;
//   }console.log(max);
// }
// bigger(["100",
// "99",
// "80",
// "70",
// "Stop"])

// function smaller(input){ //7ma
//   let inputElement = input[0];
//   let index = 1;
//   let max = Number.MAX_SAFE_INTEGER;
//   while(inputElement!== `Stop`){
//     let num = Number(inputElement);
//     if (num<max){
//       max = num;
//     }
//     inputElement = input[index];
//     index++;
//   }console.log(max);
// }

// smaller(["100",
// "99",
// "80",
// "70",
// "Stop"])

function graduation(input){ //8ma
  let index = 0;
  let name = input[index];
  index++;
  let niskaOcenka = 0;
  let clas = 1;
  let sbor = 0;
  
  
  while ( clas <= 12){
    let grade = Number(input[index])
    
    sbor += grade;
    index++;
    
    
      if (grade < 4.00){
        niskaOcenka++;
        if (niskaOcenka ===2){
          console.log(`Mimi has been excluded at ${clas} grade`);
          break;
          

        }
       continue;
     }
    clas++;
    
  }let resul = sbor / 12;
  if (niskaOcenka< 2){
    console.log(resul.toFixed(2));
  }
  

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

