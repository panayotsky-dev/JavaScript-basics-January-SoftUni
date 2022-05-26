function personalInfo (input){
    let firstName = input[0];
    let lastName = input[1];
    let age = (input[2]);
    let town = input[3];
    let result = `You are ${firstName} ${lastName}, a ${age}-year old person from ${town}.`;
    console.log(result);
}
personalInfo([`Panayot`,`Petkov`,`31`,`Yambol`]);

