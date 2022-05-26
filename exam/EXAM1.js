function first(input){    
    let cpuPrice = Number(input[0]);        
    let gpuPrice = Number(input[1]);    
    let ramPrice = Number(input[2]);   
    let ramCount = Number(input[3]);   
    let discount = Number(input[4]);
    
    let cpu = cpuPrice * 1.57;
    let gpu = gpuPrice * 1.57;
    let ramCc = ramPrice * ramCount;
    let ram = ramCc * 1.57;
    let cpuD = cpu * discount;
    let gpuD = gpu * discount;
    let gpuX = gpu - gpuD;
    let cpuX = cpu - cpuD;
    let resul = cpuX + gpuX + ram;
    console.log(`Money needed - ${resul.toFixed(2)} leva.`)
    
}
first([`500`,`200`,`80`,`2`,`0.05`])