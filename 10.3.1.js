let myPrompt= +prompt('write her');

if (isNaN(myPrompt)){
    console.log('Упс кажеться вы ошиблись')
} else if (typeof myPrompt === 'number'){
    if (myPrompt % 2 === 0){
        console.log('число четное')
    }else{
        console.log('число Не четное')
    }
}