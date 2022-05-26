function exc (input){
    let countSea = parseInt(input[0]);
    let countMountain = parseInt(input[1]);
    let result = 0;
    for (let i = 2; i < input.length; i++) {
        if(input[i] === 'sea'){
            if(countSea > 0){
                result += 680;
                countSea--;
            }
        } 
        else if(input[i] === 'mountain'){
            if(countMountain > 0){
                result += 499;
                countMountain--;
            }
        }
        else if(input[i] === 'Stop'){
            i = input.length;
        }
    }

    if(countSea === 0 && countMountain === 0){
        console.log('Good job! Everything is sold.');
    }
    console.log('Profit: '+ result +' leva.');
};

exc(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop" ] );
