// 10 - savol 

// let n=4,S=0;
// for (let i = 1; i <=n; i++) {

//  S+=1/i;

// }
// console.log(S);

/// 11

let n=90,S=0;
for (let i = 0; i <=n; i++) {

 S+=(n+i)**2;

 console.log(S);
}


// 12===================

// let n = 2, i, S = 1;
// for (let i = 1.1; i <= n + 0.1; i = i + 0.1) {

//     S *= (i);
//     console.log(S);
// }


// 13/
// let n = 2, s = 0;
// for (let i = 1.1; i < n; i += 0.2) {
//     s += i-(i+0.1)



// } 
// console.log(s);

//=========    14   ==============================================

// let n=4,n2=0;

// for (let i = 1; i <= n; i++) {
// n2+=2*i-1

// }
// console.log(n2)


// =======    15       ==============================

// let n=4,a=2,a1=1;

// for (let i = 1; i <= n; i++) {
// a1*=a;
// }
// console.log(a1);


// ======================== 16 ==================



// let n=4,a=2,a1=1;

// for (let i = 1; i <= n; i++) {
// a1*=a;
// console.log(a1);
// }

// ===============   17 ===============

// let n=4,a=1,a1=2,a2;

// for (let i = 1; i <= n; i++) {
//     a+=((-1*a1)**i);

// console.log(a);
// }


// =============  18 ===========


// let n=4,a=1,a1=2;

// for (let i = 1; i <= n; i++) {
//     a+=((a1)**i);

// }
// console.log(a);


// ======== 19 ==============

// let n=5,fak=1;
// for (let i = 1; i <= n; i++) {
//    fak*=i;

// }
// console.log(fak);

// ================     20   ===============

// let n=3,fak=1 , SUM=0;
// for (let i = 1; i <= n; i++) {
//    fak*=i;
//     SUM+=fak;
// }
// console.log(SUM);

// ========== 21 ===============

// let n=3,fak=1 , SUM=1;

// for (let i = 1; i <= n; i++) {
//     fak*=i;
//      SUM+=1/fak;
//  }
//  console.log(SUM);

// ====================   22   =========


// let n=3,fak=1 ,x=3, SUM=1;

// for (let i = 1; i <= n; i++) {
//     fak*=i;
//      SUM+=(x**i)/fak;
//      console.log(SUM);
//  }


// ===============   23  ===========   !!!!!!!!!!!

// let n=3,f=1 ,x=3, SUM=0;

// for (let i = 0; i <= n; i++) {
//     f*=2*i+1;
//      SUM+=((-1)**i)*(x**(2*i+1))/f;
//      console.log("f",f);
//      console.log(SUM);
//  } 

// ==========24!!!!!!==============


// ===========25 =============

// let n=3,x=1, SUM=0;

// for (let i = 1; i <= n; i++) {

//      SUM+=((-1)**(i-1))*(x**i)/i;
//     }
//     console.log(SUM);


// ===============26 ====================

// let n=3,x=1, SUM=0;

// for (let i = 0; i <= n; i++) {

//      SUM+=((-1)**(i))*(x**(2*i+1))/(2*i+1);
//     }
//     console.log(SUM);


// ============== 27 ======


// let n=3,x=1, SUM=x,Fx,fx=1,gx=1;

// for (let i = 1; i <= n; i++) {


//     fx*=(2*i-1)*(x**(2*i+1))
//     gx*=(2*i)*(2*i+1);

//     Fx=(fx/gx);
//     SUM+=Fx;

//     console.log(SUM);
//     }

// ============ 28==========

// let n=3,x=1, SUM=1,Fx,fx=1,gx=1;

// for (let i = 1; i <= n; i++) {


//     fx*=((-1)**(i+1))*(2*i-3)*(x**(i))
//     gx*=(2*i);

//     Fx=(fx/gx);
//     SUM+=Fx;

// }
// console.log(SUM);


// // 29
// let n = 4, A = 0, B = 4;
// for (let i = A; i <= B; i = i + (B - A) / n) {
//     console.log(i);
// }


// 30

// // 31
// let n=3,A0=2,A;
// console.log(A0);
// for (let i = 1; i <=n; i++) {
    
//     A=2+1/A0;
//     A0=A;
    
//     console.log(A0);
// }


// 32


// let n=3,A0=1,A;
// console.log(A0);
// for (let i = 1; i <=n; i++) {
    
//     A=(A0+1)/i;
//     A0=A;
    
//     console.log(A0);
// }


// 33


// let n=6,f1=1,f2=2,f;
// console.log(f1);
// console.log(f2);

// for (let i = 3; i <=n; i++) {
    
//     f=f2+f1;
//     f1=f2;
//     f2=f;

    
//     console.log(f);
// }

// 34

// let n=5,A1=1,A2=2,A;
// console.log(A1);
// console.log(A2);
// for (let i = 3; i <=n; i++) {
    
//     A=(A1+2*A2)/i;
//     A1=A2;
//     A2=A;
//     console.log(A);
// }


// 35



// let n=5,A1=1,A2=2,A3=3,A;
// console.log(A1);
// console.log(A2);
// console.log(A3);
// for (let i = 3; i <=n; i++) {
    
//     A=A3+A2-2*A1;
//     A1=A2;
//     A2=A3;
//     A3=A;
//     console.log(A);
// }
