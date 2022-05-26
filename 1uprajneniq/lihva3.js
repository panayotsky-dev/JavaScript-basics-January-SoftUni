function lihva (input){
    let depozit = Number(input[0]);
    let lihva = Number(input[1]);
    let meseci = Number(input[2]);
    const lihvaGod = (depozit * lihva)/100;
    let lihvaM = lihvaGod /12 ;
    let result = depozit + (meseci*lihvaM);
        console.log(result);
}
lihva(["200","3","5.7"]);