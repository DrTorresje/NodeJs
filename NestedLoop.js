'use strict';

let AnimalTable = [
    ['Dog','cat'],
    ['Giraffe','Elephant','Hypo']
];
for(let i =0; i<AnimalTable.length; i++){
    let row =(AnimalTable[i]);
    for(let j = 0; j <row.length;j++){
        console.log(i,j, row[i]);
    }
}
