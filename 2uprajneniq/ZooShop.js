
function zoo (input){
    dogPrice = 2.5;
    catPrice = 4;
    let dog = Number(input[0]) * dogPrice ;
    let cat = Number(input[1]) * catPrice ;
    let result = `${dog+cat} lv.` ;
    console.log(result)
}

zoo([`5`,`2`]);