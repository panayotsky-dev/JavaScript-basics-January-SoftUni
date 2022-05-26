function trapecio(input){ // 1ва задача
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);
    let result = (b1 + b2) * h / 2;
    console.log(result.toFixed(2));

}
trapecio(["8","13","7"]);

function lovetriangle(input){     // 2ra zadacha
    let a = Number(input[0]);
    let h = Number(input[1]);
    let result = a * h / 2 ;
    console.log(result.toFixed(2));
}
lovetriangle(["20","30"])

function fanitozgradus (input){ //3ta zadacha
    let c = Number(input[0]);
    let result = (c * 1.8 ) + 32 ;
    console.log(result.toFixed(2))
}

fanitozgradus(["25"])

function bateBoko(input){     // 4ta zad
let zel = Number(input[0]).toFixed(4);
let plod = Number(input[1]).toFixed(4);
let kgZ = Number(input[2]);
let kgP = Number(input[3]);
let resultA = zel * kgZ ;
let resultB = plod * kgP ;
let result = (resultA + resultB) / 1.94;
console.log(result.toFixed(2))
}
bateBoko(["0.194","19.4","10","10"])


function zalamala(input){  //5ta zad
    const rabMasaShir = 0.7;
    const rabotnaMasaDylb = 1.2;
    const vrata = 1.6;
    const katedraDuljina = 1.6;
    const katedraDylbochina = 1.2;
    let staqDuljina = Number(input[0]);
    let staqVisochina = Number(input[1]);
    let staqVisochinaBezKatedra = (staqVisochina - 1);
    let resultHigh =staqVisochinaBezKatedra / rabMasaShir ; 
    let resultDuljina = staqVisochinaBezKatedra / rabMasaShir;
    console.log(resultDuljina.toFixed(0));
    let resultDylbochina = staqDuljina / rabotnaMasaDylb ;
    let resultD = Math.floor(resultDylbochina);
    let resultH = Math.floor(resultHigh)
    let result = resultD * resultH - 3
    //console.log(resultDylbochina)
    //console.log(resultD)
    //console.log(resultH)
    console.log(result)
}
zalamala(["15", "8.9"])


function ribnaBorsa (input){ //6ta zadacha
    let skumriqCena = Number(input[0]);
    let cacaCena = Number(input[1]);
    let palamud = Number(input[2]) * (skumriqCena * 1.6);
    let safrid = Number(input[3]) * (cacaCena * 1.8);
    let midi = Number(input[4]) * 7.5;
    let result = palamud + safrid + midi;
    console.log(result.toFixed(2));
}
ribnaBorsa(["6.9","4.2","1.5","2.5","1"])
    

function housePainting(input){ // 7ma zadacha

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    const door = 1.2*2;
    const fb = x * x;
    const greenPaint = 3.4;
    const whitePaint = 4.3;
    const window = (1.5 * 1.5)*2;
    let xY = x * y;
    let sK = (xY * 2) - window;
    let frontBack = (fb * 2) - door ;
    let resultHouse = sK + frontBack;
    let resultPaintH = resultHouse / greenPaint;
    //console.log(sK)
    //console.log(frontBack)
    //console.log(resultHouse)
    console.log(resultPaintH.toFixed(2))
    let sT = 2 * (x * y);
    let sTF = 2 * (x * h / 2);
    let resultT = (sTF + sT) / whitePaint ;
    //console.log(sTF.toFixed(1))
    console.log(resultT.toFixed(2))
}
housePainting(["6","10","5.2"])



