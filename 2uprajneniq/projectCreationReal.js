
function countProject (input){
    let name = input[0];
    let project = input[1];
    let pph = 3;
    let count = project * pph ;
    let result = ` The architect ${name} will need ${count} hours to complete ${project} project/s.`;
    console.log(result);
}
countProject([`Panayot`,`5`]);
