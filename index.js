// let a = 0;
// if(a>0) 
// { 
// a++;
// console.log(a);}
// else console.log(a);

// 2


// if (a > 0) {
//     a++;
//     console.log(a);
// }
// else 
// { a-=2;
//     console.log(a);}

// 3

// if (a > 0) {
//     a++;
//     console.log(a);
// }
// else if(a<0)
// { a-=2;
//     console.log(a);}
//     else
//     {
//         a=10;
//         console.log(a);
//     }

// 4

// let x=1,y=0,z=1,sum=0;
// if (x>0) {
//     sum++;
//     if(y>0){
//         sum++;
//         if(z>0){
//             sum++;
//             console.log(sum);
//         }
//         else console.log(sum);

//     }

//     else if(z>0){
//         sum++;
//         console.log(sum);
//     }
//     else
//     console.log(sum);

// }

// else 
// {
//     if(y>0){
//         sum++;
//         if(z>0){
//             sum++;
//             console.log(sum);
//         }
//         else console.log(sum);

//     }

//     else if(z>0){
//         sum++;
//         console.log(sum);
//     }
//     else
//     console.log(sum);
// }

// 5/=============================

// let x = -1, y = 0, z = 1, sum = 0, min = 0;

// if(x>0){
//     sum++
// }
// else if(x<0)
// {
//     min++;
// }
// if(y>0){
//     sum++
// }
// else if(y<0)
// {
//     min++;
// }
// if(z>0){
//     sum++
    
// }
// else if(z<0)
// {
//     min++;
// }
// console.log("musbat=",sum);
// console.log("manfiy=",min);


// 6===========================

// let a=5,b=6;
// if(a>b) console.log(a);
// else if(b>a) console.log(b);
// else console.log("a=b");


// 7=======================


let a1=5,a2=6;
// if(a1>a2) console.log(2);
// else if(a2>a1) console.log(1);
// else console.log("a1=a2");

// 8

// if(a1>a2) console.log(a1,a2);
// else if(a2>a1) console.log(a2,a1);
// else console.log("a1=a2");

// 9
// let A=a1,B=a2;
//  if(A<B) console.log(A,B);
 
// else if(A>B) 
// { A=a2;
//     B=a1;
//     console.log(A,B);}
//     else console.log("A=B");

// 10
// if(A!=B){
//     A=A+B;
//     B=A;
//     console.log(A,B);
    
// }
// else{
//     A=0;
//     B=0;
//     console.log(A,B);
// }

// 11

a1=1;a2=1;
let A=a1,B=a2;

    // if(A>B)
    // {
    //     A=a1;
    //     B=a1;
    //     console.log(A,B);
    // }
    // else if(A<B) {
    //     A=a2;
    //     B=a2;
    //     console.log(A,B);
    // }

    // else  {
    //     A=0;
    //     B=0;
    //     console.log(A,B);
    // }

    // 12
    let b1=1,b2=2,b3=3,min;
min=b1;

//     if(min>b2 && min>b3){
//         if(b2>b3){
//             min=b3;
//         }
//         else{
//             min=b2;
//         }
//     }
//     else if (min>b2 && min<b3){
//         min=b2;
//     }
//     else if (min>b3 && min<b2){
//         min=b3;
//     }
//     console.log(min);


let avg=0;
// 13
// if(min>b2 && min>b3){
//     if(b2>b3){
//        avg=b2;
//     }
//     else{
//         avg=b3;
//     }
// }
// else if (min>b2 && min<b3){
//     avg=b1;
// }

// console.log(avg);

let max=b2;
// 14

if(min>b2 && min>b3){
    max=b1;
            if(b2>b3){
                min=b3;
            }
            else{
                min=b2;
            }
        }
        else if (min>b2 && min<b3){
            min=b2;
            max=b3;
            
        }
        else if (min>b3 && min<b2){
            min=b3;
            max=b2
        }
        console.log("min",min);
        console.log("max",max);
    
