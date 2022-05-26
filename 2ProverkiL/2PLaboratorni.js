function ocenqvane (input){  // 1va zadacha
    let a = Number(input[0]);
    if( a >= 5.50 ){
        console.log(`Excellent!`);
    }
    
}
ocenqvane([5.5])

function greaterNumber(input){  //2ra zadacha
    let a = Number(input[0]);
    let b = Number(input[1]);
    if ( a > b){
        console.log(a);
    } else {
        console.log(b);
    }
}
greaterNumber([3,5])

function chetnoIliNe(input){ //3ta zad
    let a = Number(input[0]);
    if(a % 2 === 0){
        console.log("even");
    } else {
        console.log("odd");
    }
}
chetnoIliNe([2])

function didYouGuessIt(input){   //4ta zad
    const a = "s3cr3t!P@ssw0rd";
    let b = input[0];
    if(b === a){
        console.log("Welcome");
    } else {console.log("Wrong password!")};
}
didYouGuessIt([`asd`])

function veselo(input){   //5ta zad
    let a = Number(input[0]);
    if( a < 100){
        console.log("Less than 100");
    }
        else if( a <= 200)
    { 
        console.log("Between 100 and 200");
    } else if (a > 200)
     { console.log("Greater than 200")};
}
veselo(["98"])


function fastAndFirious(input){ //6ta
    let a = Number(input[0]);
    if (a <= 10){
        console.log("slow")
    } else if ( a <= 50 ){
        console.log("average")
    } else if ( a <= 150){
        console.log("fast")
    } else if ( a <= 1000){
        console.log("ultra fast")
    } else if (a > 1000){
        console.log("extremely fast")
    }
}
fastAndFirious([8])
fastAndFirious([49.5])
fastAndFirious([126])
fastAndFirious([160])
fastAndFirious([3500])


function licaNaFiguri (input){ //7ma zad
    let figura = input[0];
    if (figura === "square"){
        let a = Number(input[1]);
        let result = a * a;
        console.log(result)
    } else if ( figura === "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let result = a * b;
        console.log(result);
    } else if (figura === "circle"){
        let a = Number(input[1]);
        let result = (a * a) * Math.PI;
        console.log(result);
    } else if (figura === "triangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let result = a * b / 2;
        console.log(result)
    }
}
licaNaFiguri(["circle","5"])