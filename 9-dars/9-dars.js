function rand(a,b) {
    let str=""+b;
    let len=str.length;
    let randNumber=(Math.random()*(10**len));

    if(randNumber>a && randNumber<b) return parseInt(randNumber);
     
    else return rand(a,b);
}

console.log( rand(3,30));
