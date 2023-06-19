

//  task polindrom va teskari sonlarni aniqlash
function polindrom(son) {
    
    function teskari(son) {
        
        let yangi=0,qoldiq=0;
        while (son!==0) {
            qoldiq=son%10;
            yangi=yangi*10+qoldiq
            son=(son-qoldiq)/10;
                   
        }
        return yangi;
    }
    if (teskari(son)===son){
        return"polindrom";
    }
    else
    return " not polindrom";

}




console.log(polindrom(123));
