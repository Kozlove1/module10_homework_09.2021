arr=[2,'Creed',5,4,18,null,0]

let Chet = 0;
let neChet = 0;
let trash = 0;

for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "number" && !isNaN(arr[i])){
        if (arr[i] === 0) {
            trash++;
        } else if (arr[i] % 2 === 0) {
            Chet++;
        } else {
            neChet++
        }
    }
}
console.log("Chet : " + Chet);
console.log("neChet : " + neChet);
console.log("Trash: " + trash);
