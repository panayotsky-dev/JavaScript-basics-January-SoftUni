function oldLibary(input){ //1va
 let nameOfTheBook = input[0];
 let index = 1;
 let book = input[index]
 
 while(book !== `No More Books`){
     if(book === nameOfTheBook){
         console.log(`You checked ${index-2} books and found it.`)
        break;
     }else if (book === `No More Books`){
        ;break;
     }
     book = input[index];
     index++;
     

 }  if( book === "No More Books"){
 console.log(`The book you search is not here!`)
console.log(`You checked ${index-2} books.`)}
}
oldLibary(["Troy",
"Stronger",
"Life Style",
"Troy"])

oldLibary
(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
oldLibary
(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


