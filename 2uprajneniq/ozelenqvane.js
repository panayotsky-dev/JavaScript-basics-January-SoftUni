function ozelenqavne (input){
    let plosht = Number(input[0]);
    let price = plosht * 7.61 ;
    let discount = price * 0.18 ;
    let result = `The final price is: ${price - discount} lv.`
    let discoutResult = `The discount is: ${discount} lv.`
    console.log(result);
    console.log (discoutResult);
}

ozelenqavne([550]);