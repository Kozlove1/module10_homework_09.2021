let mass1 = ['Sisco', 2, 'banana'];
let mass1Item = '';
mass1.forEach(function (item, index){
    mass1Item = mass1Item + ` ${item}`;
});
console.log(`Длина массива = ${mass1.length};` + ` А его слагаемые ${mass1Item}`)