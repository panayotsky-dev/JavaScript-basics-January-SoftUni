function mat(input){
    const himikalki = 5.8;
    const markeri = 7.2;
    const preparat = 1.2;
    let brhim = Number(input[0]) * himikalki;
    let brmarkeri = Number(input[1]) * markeri;
    let brprep = Number(input[2]) * preparat;
    let discount = Number(input[3]) / 100;
    let bezdisc = brhim + brmarkeri + brprep ;
    let result = bezdisc - (bezdisc * discount);

    console.log(result)
}
mat(["2","3","4","25"])