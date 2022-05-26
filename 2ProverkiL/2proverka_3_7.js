function pazaruvane(input){
    let budjet = Number(input[0]);
    let videoBr = Number(input[1]);
    let cpuBr = Number(input[2]);
    let ramBr = Number(input[3]);
    const video = 250 ;
    let videos = videoBr * video ;
    let resultCart = (videos + (videos*0.35)*cpuBr + (videos*0.1)*ramBr);
    let result = budjet - resultCart;
    if (videoBr > cpuBr){
    resultCart = resultCart * 0.85;
     if (result >= 0){
         console.log(`You have ${(budjet - resultCart).toFixed(2)} leva left!`)
     }else if (result <= 0) {
         console.log(`Not enough money! You need ${Math.abs(budjet - resultCart).toFixed(2)} leva more!`)
     }
    }
}
pazaruvane(["900","2","1","3"])
pazaruvane(["920.45","3","1","1"])


function launchbreak(input){
    let ime = input[0];
    let episode = Number(input[1]);
    let pochivka = Number(input[2]);
    let obqd = pochivka * 0.125 ;
    let otdih = pochivka * 0.25;
    let freetime = pochivka - otdih - obqd;
    let result = episode - freetime;
    if ( freetime >= episode){
        console.log(`You have enough time to watch ${ime} and left with ${Math.abs(episode - freetime)} minutes free time.`)
    }else {
        console.log(`You don't have enough time to watch ${ime}, you need ${Math.ceil(result)} more minutes.`)
    }
 
}