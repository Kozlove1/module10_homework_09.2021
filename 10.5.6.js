let mass1 = ['Sisco', 2, 'banana', 4, 2];
let result = false
for (let i = 0; i<mass1.length; i++){
    for (let j = i-1; j>=0; j--){
        if (mass1[i] === mass1[j]){
            result = true
        }
    }
}
console.log(result)