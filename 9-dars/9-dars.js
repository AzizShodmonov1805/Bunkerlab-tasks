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
function sign(a) {
    if(parseFloat(a)>0)
    return 1;
   else if(parseFloat(a)<0)
    return -1;
    else return 0;
}
console.log(sign("12w"));