function fishiDelivery(input){
    const pileshko = 10.35 ;
    const fishi = 12.4;
    const blqks = 8.15;
    const delivery = 2.5 ;
    let pil = Number(input[0]);
    let fish = Number(input[1]);
    let blq = Number(input[2]);
    let sumPil = pil*pileshko ;
    let sumFish = fish*fishi;
    let sumBlqks = blqks*blq ;
    let desert = (sumPil + sumFish + sumBlqks) * 0.2;
    let result = desert + sumPil + sumFish + sumBlqks + delivery;
    console.log(result)
}
fishiDelivery(["2","4","3"])