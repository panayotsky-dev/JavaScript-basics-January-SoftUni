function addMins(input){ //3ta zad
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let totalmins = hours * 60 + minutes + 15;
    let h = Math.floor(totalmins / 60);
    let m = totalmins % 60;
    if (m < 9){
        console.log(`${h}:0${m}`)
    } else {
}
 if ( h > 23 ){
     h = h - 24;
     console.log(`${h}:${m}`)
 }

}
addMins(["23","59"])