function shitcode(input){
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
 
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            for (let k = 1; k <= c; k++) {
                if(i % 2 === 0 && k % 2 === 0){
                   if (j === 2 || j === 3 || j === 5 || j == 7 ){
                    console.log(`${i} ${j} ${k}`);
                   }
                }
            }
        }
    }
}
 
shitcode(['8', '2', '8'])
shitcode([`8`,`2`,`8`])
 