// TODO :: gebruik const waar mogelijk
function gooi(){
    console.log('Er is gegooid');
    let getal = Math.ceil(Math.random()*6);
    console.log('JavaScript genereerde als random nummer: ' + getal);
    let getalArray =[];
    for(let counter = 0; counter < 8; counter++){
        getalArray[counter] = Math.ceil(Math.random()*6);        
    }
    console.log('Array met getallen = ' + getalArray);
    sortArray = getalArray.sort();
    console.log('gesorteerd Array = ' + sortArray);
    
    // TODO :: gebruik hier een Object voor. Dat is netter dan twee array's
    let aantallen = [1,2,3,4,5,6];
    let frequenties = [0,0,0,0,0,0];
    for(aantalOgen = 1; aantalOgen < 7; aantalOgen++){
        for(i=0;i<8;i++){
            if(sortArray[i] === aantalOgen){
                frequenties[aantalOgen - 1]++;
            }
        };
    };
    console.log('Aantallen: ' + aantallen)
    console.log('Frequenties: ' + frequenties);    
     
    const worp = [];
    for(j = 0; j < 6; j++){
        worp.push(`${j+1} => ${frequenties[j]}`);
    }
    console.log('Frequenties als key-value paren: ' + worp);   
    // TODO :: probeer dit ook in een for loop te doen
    document.getElementById("eenO").innerHTML = frequenties[0];
    document.getElementById("tweeO").innerHTML = frequenties[1];
    document.getElementById("drieO").innerHTML = frequenties[2];
    document.getElementById("vierO").innerHTML = frequenties[3];
    document.getElementById("vijfO").innerHTML = frequenties[4];
    document.getElementById("zesO").innerHTML = frequenties[5];
};


