function eleni(input) {
    let daysSantaGone = Number(input[0]);
    let foodKilos = Number(input[1]);
    let deer1PerDay = Number(input[2]);
    let deer2PerDay = Number(input[3]);
    let deer3PerDay = Number(input[4]);

    let food1 = daysSantaGone * deer1PerDay;
    let food2 = daysSantaGone * deer2PerDay;
    let food3 = daysSantaGone * deer3PerDay;

    let neededFood = food1 + food2 + food3;

    if (foodKilos >= neededFood) {
        let leftover = foodKilos - neededFood;
        let asd1 = Math.min(leftover);
        console.log(`${asd1} kilos of food left.`);
    } else {
        let neededLeftover = neededFood - foodKilos;
        let asd = Math.ceil(neededLeftover);
        console.log(`${asd} more kilos of food are needed.`);
    }

}


eleni(["2",
    "10",
    "1",
    "1",
    "2"])

eleni(["5",
    "10",
    "2.1",
    "0.8",
    "11"])