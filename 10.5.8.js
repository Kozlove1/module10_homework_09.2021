let myCars = new Map();
myCars.set('porsh', 'yellow');
myCars.set('audi', 'grey');
myCars.set('landrover', 'beige');
myCars.set(0, NaN);
let choise
myCars.forEach((value, key, map) =>{
    choise = `Ключ - ${key}, Цвет - ${value}`
    console.log(choise)
} )
