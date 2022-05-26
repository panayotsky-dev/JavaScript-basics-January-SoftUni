function excursion (input){

    let seaCount = Number(input[0]);
    let mountainCount = Number(input[1]);
    index = 1;
    let result = 0;

    for (let i = 2; i < input.length; i++) {
        if(input[i] === 'sea'){
            if(seaCount > 0){
                result += 680;
                seaCount--;
            }
        } 
        else if(input[i] === 'mountain'){
            if(mountainCount > 0){
                result += 499;
                mountainCount--;
            }
        }
        else if(input[i] === 'Stop'){
            i = input.length;
        }
    }

    if(seaCount === 0 && mountainCount === 0){
    console.log('Good job! Everything is sold.');
    }
        console.log(`Profit: ${result} leva.`);
}
excursion(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop" ] );
excursion (["2",
"2",
"sea",
"mountain",
"sea",
"sea",
"mountain"])