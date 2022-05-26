function fishyfishy(input){
let dylj = Number(input[0]);
let shir = Number(input[1]);
let h = Number(input[2]);
let perc = Number(input[3]) / 100;
let v = dylj * shir * h;
let vLit = v * 0.001 ;
let result = vLit * (1 - perc);
console.log(result)

}
fishyfishy(["85","75","47","17"])