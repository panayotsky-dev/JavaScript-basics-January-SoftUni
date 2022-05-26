function toyShop(input){
    let ExcursionPrice = Number(input[0]);
    let Puzzles = Number(input[1]);
    let TalkingDolls = Number(input[2]);
    let TeddyBears = Number(input[3]);
    let Minions = Number(input[4]);
    let Buses = Number(input[5]);

    let toysCount = Puzzles + TalkingDolls + TeddyBears + Minions + Buses;
    let money = Puzzles * 2.60 + TalkingDolls * 3 + TeddyBears * 4.10 + Minions * 8.20 + Buses * 2;

    console.log(toysCount);
    console.log(money);

    if (toysCount >= 5) {
        money = money * 0.75;
    }

    money = money * 0.90;
    // Math.abs ako chisloto e polojitelno nishto ne pravi, ako e otricatelno go pravi polojitelno VINAGI ABSOLUTNA POLOJITELNA STOINOST 
    let diff = Math.abs(money - ExcursionPrice);
    if (money > ExcursionPrice){
       console.log(`Yes! ${diff.toFixed(2)} lv left.`);
    }
    else {
        console.log('Not enough moeny. ${diff.toFixed(2)} lv needed.')
    }

} 
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])