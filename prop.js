// function equal(str1, str2) {

//     let sortedStr1 = str1.split('').sort().join('');
//     let sortedStr2 = str2.split('').sort().join('');
//     return sortedStr1 === sortedStr2;
//   }
  
//   console.log(equal("aziz", "ziza")); 

//!   =================2===============

// function polindr(str) {
//     let str1=str.split("").reverse().join("");
//     return str1===str;
//   }

//   console.log(polindr("atta"));

// function qosh(str) {
//     let result = '';
    
//     for (let i = 0; i < str.length; i++) {
//       let symbl = str[i];
//       result += symbl + symbl;
//     }
    
//     return result;
//   }
  
//   console.log(qosh("webbrain"));
//   console.log(qosh("12345"));



// // ===========================
// function ofNan(str) {
//     let numbers = [];
  
//     for (let i of str) {
//       let num = parseInt(i);
  
//       if (!isNaN(num)) {
//         numbers.push(num);
//       }
//     }
//     return numbers;
//   }
  
  
//   console.log(ofNan("web23rain ac3adem1y")); 


// ================================/

// function sabachka(str) {
//         let str1=str.split("@").join("a");
//         return str1;
//       }
    
//       console.log(sabachka("webbr@in @cademy"));


// ===========================

// function bigSymbl(str) {
//     let upStr=0,lowStr=0

// for (const i of str) {
//     if (i>="A" && i<="Z") {
//         upStr++;
//     }
//     else if (i>="a" && i<="z") {
//         lowStr++;
//     }
      
// }
// return `katta harflar-> ${upStr} ; kichik harflar-> ${lowStr}`;
// }
// console.log(bigSymbl("ASWDDFFDSSeeeerere"));
    // ========================



// function equalARR(a,b) {
//     str1=a.sort().join(""),
//     str2=b.sort().join("")
//      return str1===str2;
// }

// let a=["w","e","b",1]
// let b=["e","b","w",1]
// console.log(equalARR(a,b));

// function dubl(arr) {
//     return arr.filter(item=>Math.floor(item/10)>=10 && Math.floor(item/10)<=99)
//     }
// console.log(dubl([22,33,345,232,23,12]));