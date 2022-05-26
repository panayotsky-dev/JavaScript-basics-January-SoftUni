function JesyPrycha(input){
    let taksa = Number(input[0]);
    let kec = taksa - (taksa*0.4);
    let ekip = kec - (kec*0.2);
    let ball = ekip * 0.25;
    let acc = ball * 0.2;
    let result = taksa + kec + ekip + ball + acc

    console.log(result)
}
JesyPrycha(["365"])