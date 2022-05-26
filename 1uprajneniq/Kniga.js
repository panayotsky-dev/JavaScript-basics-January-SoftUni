function JoroTypoto(input){
    let stranici = Number(input[0]);
    let straniciPHour = Number(input[1]);
    let days = Number(input[2]);
    let hours = stranici / straniciPHour;
    let result = hours / days;
    console.log(result);
    
}
JoroTypoto(["212","20","2"])