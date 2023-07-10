// function rand(a,b) {
//     let str=""+b;
//     let len=str.length;
//     let randNumber=(Math.random()*(10**len));

//     if(randNumber>a && randNumber<b) return parseInt(randNumber);
     
//     else return rand(a,b);
// }

// console.log( rand(3,30));







//! function

// function toString(a) {
//     if (typeof(a)==="") {
//         return a;
//     }
//     else return ""+a;
// }
// console.log(toString("6"));


// ============== Objectis     ============


// function ObjectIS(a,b) {
//     if (typeof(a)==typeof(b)) {
//         return true;
//     }
//     else return false;
// }
// console.log(ObjectIS(2,null));

// ========= sqrt =============

// function sqrt(a) {
//     let m=a**(1/2)
//     return m;
       
// }
// console.log(sqrt(3));


// ===========  cbrt =============

// function cbrt(a) {
//     let m=a**(1/3)
//     return m;
       
// }
// console.log(cbrt(27));


// =============== ABS========

// function ABS(a) {
    
//     if(a>=0)return a;
//     else return-a;
// }
// console.log(ABS(0));



// function pow(a,b) {
//     if(a===0) return undefined;
//     else return a**b;
// }

// console.log(pow(2,0));

// console.log(parseFloat("12w"));
// function sign(a) {
//     if(parseFloat(a)>0)
//     return 1;
//    else if(parseFloat(a)<0)
//     return -1;
//     else return 0;
// }
// console.log(sign("12w"));





// number


// let a=1;
// et
console.log(Number());
console.log(Number("44"));
console.log(typeof(Number("44")));

console.log(typeof(Number("232")));

// parseFloat

console.log(parseFloat(1.2134));
console.log(parseFloat("a1.21aa34"));
console.log(typeof(parseFloat("1.2134")));

// parseInt

console.log(parseInt(1.3546));
console.log(parseInt("a1.35a46"));


// tofixed

console.log(0.3+0.35);
console.log((0.3+0.35).toFixed(3));
console.log(3.500000000.toFixed(5));
console.log((1.5653+0.5).toFixed(2));
console.log((0.3+0.55646).toFixed(2));


// Number.toPrecision/



console.log((1.3+1.52).toPrecision(2));
console.log((1.5653+0.5).toPrecision(2));
console.log((0.3+0.55646).toPrecision(2));

// eval

console.log(eval("2.4+2.4"));

// abs
console.log(Math.abs(-2));

// Object.is  === 
 let q=1,w=2,r="12"
 console.log(Object.is(r,w));
 //  
 console.log(Object.is(2,"2"));
 console.log(Object.is(2,2));
 console.log(Object.is(2,"2"));






//  Math.round
//  .1 .2 .3 .4 ==0  ! <> .5>= 1
console.log(Math.round(1.55));
console.log(Math.round(1.25));

// Math.floor
console.log(Math.floor(-7.56665));
console.log(Math.floor(2.56665));

// Math.ceil()

console.log(Math.ceil(-1.6566));
console.log(Math.ceil(2.0566));

// Math.trunc

console.log( Math.trunc(-2.566));
console.log( Math.trunc(2.566));
console.log( Math.trunc(8.566));


// Math.random => [0;1)

console.log(Math.random());
console.log(parseInt(Math.random()*10));