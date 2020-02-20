for(let i = 100;i <= 200;i++){
    if(i%3 === 0 && i%4 === 0){ //checks if the number is divisible by both numbers
        console.log('LoopyLighthouse');
    } else if(i%3 === 0){ //checks if the number is divisible by 3
        console.log('Loopy');
    } else if(i%4 === 0){ //checks if the number is divisible by 4
        console.log('Lighthouse');
    } else {    //result if number is not divisble by 3 or 4
        console.log(i);
    }
}