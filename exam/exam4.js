function examFour(input){
    const students = Number(input[0]);
    index = 1;
    sum = 0;
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;
    for (i = 0; i< students;i++){
        let ocenkiCount = Number(input[index]);
        index++;
        if (ocenkiCount >= 5){
            group1 ++;
        }else if (ocenkiCount >= 4 && ocenkiCount <= 4.99){
            group2 ++;
        }else if (ocenkiCount >= 3 && ocenkiCount <= 3.99){
            group3 ++;
        }else if (ocenkiCount < 3){
            group4 ++;
        }
        sum += ocenkiCount;
        
    }let average = sum /students;
    let g1 = (group1 / students) * 100;
    let g2 = (group2 / students) * 100;
    let g3 = (group3 / students) * 100;
    let g4= (group4 / students) * 100;
    console.log(`Top students: ${g1.toFixed(2)}%`)
    console.log(`Between 4.00 and 4.99: ${g2.toFixed(2)}% `)
    console.log(`Between 3.00 and 3.99: ${g3.toFixed(2)}%`)
    console.log(`Fail: ${g4.toFixed(2)}%`)
    console.log(`Average: ${average.toFixed(2)}`);
}
examFour(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])

function iDontEvenKnow(input){
    // let a = Number(input[0]);


    let index = 0;

    let climberGroups = Number(input[index]); 
    index++;

    let peopleCount = Number(input[index]); 
    index++;
sum = 0;
    let mount1Counter = 0;
    let mount2Counter = 0;
    let mount3Counter = 0;
    let mount4Counter = 0;
    let mount5Counter = 0;

    for (let i = 0; i < climberGroups; i++){
        let peopleCount = Number(input[index++])
            sum += peopleCount;
        if (peopleCount < 5){
            sum++;
        } 
        else if (peopleCount > 6 && peopleCount < 12) {
            sum++;
        }
        else if (peopleCount > 13 && peopleCount < 25) {
            mount3Counter++;
        }
        else if (peopleCount > 26 && peopleCount < 40){
            mount4Counter++;
        } else{
            mount5Counter++;
        }
    }
    let mount1Proccentage = mount1Counter / sum * 100;
    let mount2Proccentage = mount2Counter / index * 100;
    let mount3Proccentage = mount3Counter / index * 100;
    let mount4Proccentage = mount4Counter / index * 100;
    let mount5Proccentage = mount5Counter / index * 100;

    console.log(`${mount1Proccentage.toFixed(2)}%`);
    console.log(`${mount2Proccentage.toFixed(2)}%`);
    console.log(`${mount3Proccentage.toFixed(2)}%`);
    console.log(`${mount4Proccentage.toFixed(2)}%`);
    console.log(`${mount5Proccentage.toFixed(2)}%`);
}
