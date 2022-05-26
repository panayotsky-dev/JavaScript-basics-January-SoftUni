function mazalqk(input){
    const plikche = 1.5 ;
    const boq = 14.5 ;
    const razr = 5;
    let brPlikche = Number(input[0]) * plikche;
    let sumPl = brPlikche + 3;
    let prBoq = Number(input[1]) * 0.1;
    let brBoq = Number(input[1]);
    let sumBoq = (brBoq + prBoq) * boq ;
    let sumRaz = Number(input[2]) * razr;
    let resultMat = sumPl + sumBoq + sumRaz + 0.4 
    let maistoriH = Number(input[3])
    let resultMai = (resultMat * 0.30) * maistoriH
    let result = resultMai + resultMat
   
    console.log(result)
}
mazalqk(["10", "11", "4", "8"]);
mazalqk(["5", "10", "10", "1"]);