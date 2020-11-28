'use strict'; 
let temperature = process.argv[2];
console.log(temperature);
if (temperature<20) {
    console.log('Cold')
}else if (temperature>20){
    console.log('Hot')
}
