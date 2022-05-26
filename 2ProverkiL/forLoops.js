function first(){   //1va
for (let i= 7;i<=997;i++){
    if (i % 10 === 7){
        console.log(i);
    }
}
}
first()


function solve(input){ //8ma LOOPS
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;
    let outputNumbers = ``;
    for (let i = n;i < m; i++){
        if (i % 9 === 0 ){
            sum += i;
           
        }
    }console.log(`The sum: ` + sum);
    for (let i = n;i < m; i++){
        if (i % 9 === 0 ){
            sum += i;
            
            console.log(i)
        }}
}

function second(input){  //2ra
    let a = Number(input[0]);
    for (let i = 1; i<=10;i++){
        let sum = i * a;
        console.log(`${i} * ${a} = ${sum}` );
    }
}
second([5])

function histogram(input){ //3та
    let n = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;
    
    for(let i = 1;i <= n; i++){
        let num = Number(input[i]);

        if(num <200){
              p1Counter++;
        }else if (num >= 200 && num < 400){
            p2Counter++;
        }else if (num >= 400 && num < 600){
            p3Counter++;
        }else if(num >= 600 && num < 800){
            p4Counter++;
        }else { 
            p5Counter++;
        }  
        
    }
        let p1Pr = p1Counter / n * 100;
        let p2Pr = p2Counter / n * 100;
        let p3Pr = p3Counter / n * 100;
        let p4Pr = p4Counter / n * 100;
        let p5Pr = p5Counter / n * 100;
        
        console.log(`${p1Pr.toFixed(2)}%`);
        console.log(`${p2Pr.toFixed(2)}%`);
        console.log(`${p3Pr.toFixed(2)}%`);
        console.log(`${p4Pr.toFixed(2)}%`);
        console.log(`${p5Pr.toFixed(2)}%`);
       
}
histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])


function psychoLili(input){ //4ta
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let stolenMoney = Math.floor(age / 2);
    let startMoney = 10;
    let giftedMoney = 0;
    let toysTimes = age - stolenMoney;
        for(let i = 1;i <= stolenMoney;i++){
            giftedMoney += startMoney;
            startMoney += 10;}
    let money = giftedMoney - stolenMoney;
    let soldToys = toysTimes * toyPrice;
    let peralnqMoney = soldToys + money;
    let finalSum = Math.abs(peralnqMoney - washingMachinePrice).toFixed(2);
        if (washingMachinePrice <= peralnqMoney){
            console.log(`Yes! ${finalSum}`);
        }else{
            console.log(`No! ${finalSum} `)
        }
}
psychoLili([`10`,`170`,`6`])
psychoLili([`21`,`1570.98`,`3`])


function abv(input){
    let a = Number(input[0]);
    let sum = Math.floor(a/2)
    let sum2 = Math.pow(10, sum);
    console.log(sum2)
}
abv([5])

function av(){
    let a = 5;
    let money = 0;
    giftedstart = 10;
    for(let i = 1;i <= a;i++){
        money += giftedstart;
        giftedstart += 10;
        console.log(money)
    }
}
av()


function zaplata(input){
    let tabove = Number(input[0]);
    let solary = Number(input[1]);
    let finalSum = solary;
    // let tab1 = input[2];
    // let tab2 = input[3];
    // let tab3 = input[4];
    // let tab4 = input[5];
    // let tab5 = input[6];
    // let tab6 = input[7];
    // let tab7 = input[8];
    // let tab8 = input[9];
    // let tab9 = input[10];
    // let tab10 = input[11];
    for (let i = 2;i <= tabove - 2;i++){
        console.log(input[i]);
    }
}
zaplata(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])

function zaplata (input){ //5ta
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let isHaveSalary = true;

    for(let i = 0;i < openTabs; i++){
        let currentTab = input[index];
        index++;

    if(currentTab === `Facebook`){
        money -=150;
    }else if (currentTab ===`Instagram`){
        money -=100;
    }else if( currentTab === `Reddit`){
        money -= 50;
    }
    if (money <= 0 ){
       
        console.log(`You have lost your salary.`);
        isHaveSalary = false;
        break;
    }
    }if (isHaveSalary){
        console.log(money)
    }
    
}

function oskars(input){ //6ta
    let index = 0
    let nameActor = input[index];
    index++;
    let points = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;
        isNominee = false;
    for (let i = 0; i< juryCount;i++){
        let name = input[index];
        index++;
        let tempPoints =Number(input[index]);
        index++;

        points += name.length * tempPoints / 2;
        if (points > 1250.5){
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${points.toFixed(1)}!`);
            isNominee = true;
            break;
        }
        
            
            }if (!isNominee){
                let diff = Math.abs(points - 1250.5);
                console.log(`Sorry, ${nameActor} you need ${diff.toFixed(1)} more!`);
                
            }
}
oskars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

function tracking(input){ //7ma
        let index =0;
    let groups = Number(input[index++]);
        let count = 0;
            let Musala = 0;
            let Monblan = 0;
            let Kilimanjaro = 0;
            let k2 = 0;
            let Everest = 0;
            
    for ( i = 1;i <= groups;i++){
        let people = Number(input[index++]);
            count += people;        
       
    
    if (people <= 5)
    {
        Musala += people;
    }else if(people >=6 && people <= 12)
        {
            Monblan += people;
        }else if (people >= 13 && people<= 25)
            {
                Kilimanjaro += people;
            }else if (people >= 26 && people <=40)
                {
                    k2 += people;
                }else if (people >= 41)
                    {
                    Everest += people;
                    }
       
    }
    console.log(`${(Musala/count*100).toFixed(2)}%`);
    console.log(`${(Monblan/count*100).toFixed(2)}%`);
    console.log(`${(Kilimanjaro/count*100).toFixed(2)}%`);
    console.log(`${(k2/count*100).toFixed(2)}%`);
    console.log(`${(Everest/count*100).toFixed(2)}%`);
}
tracking(["10",
"10",
"5",
"1",
"100",
"12","26",
"17",
"37",
"40",
"78"
])

function machkaiGrisho(input){
    let tournaments = Number(input[0]);
    let ranklist = Number(input[1]);
        index = 0;
    let results = input[index++];
        for ( i = 0;i <= tournaments;i++){
            let sum = ranklist;
            switch (index){
                case `F`: sum += 1200;
                break;
                case `SF`: sum += 720;
               break;
                case `W`: sum += 2000;
                break;
                
                
            }console.log(sum)
        } 
    }
machkaiGrisho(["5",
"1400",
"F",
"SF",
"W",
"W",
// "SF"])

function tennis(input){ //8ma
    let index = 0;
    let tournamentCounts = Number(input[index]);
    index++;
    let startPoints = Number(input[index]);
    index++;
    let tempPoints = 0;
     let winCounter = 0;
        for(let i = 0; i < tournamentCounts ; i++){
            let sccore = input[index];
            index++;
                switch(sccore){
                    case `W`: tempPoints += 2000; 
                    winCounter++;
                    break;
                    case `F` : tempPoints += 1200; break;
                    case `SF` : tempPoints += 720; break;
                }
        }
        let finalPoints = tempPoints + startPoints;
        let avgPoints = Math.floor(tempPoints/tournamentCounts);
        let wonnedGames = winCounter/tournamentCounts*100;
   
        console.log(`Final points: ${finalPoints}`);
        console.log(`Average points: ${avgPoints}`);
        console.log(`${wonnedGames.toFixed(2)}%`)
}
tennis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
