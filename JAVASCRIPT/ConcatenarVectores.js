function Vectores(Vec1,Vec2){
    var contA, contB,i,nuevovector;

    if(Vec1.length>5||Vec2.length>5) return "Se permiten maximo 5 numeros por vector"
    contA=1;
    contB=1;

    for(var i=1;i<Vec1.length;i++){
        if (Vec1[i]>=Vec1[i-1]) contA++;
    }
    //console.log("ContA:"+contA)
    for(var i=1;i<Vec2.length;i++){
        if (Vec2[i]>=Vec2[i-1]) contB++;
    }
    //console.log("ContB:"+contB)
    if (contA<Vec1.length) return "El vector 1 no está en orden ascendente"
    if (contB<Vec2.length) return "El vector 2 no está en orden ascendente"
    
    nuevovector=Vec1.concat(Vec2);
    nuevovector.sort((a, b) => a - b )
    return nuevovector;
    
}
//console.log(Vectores([1,2,3,4,5],[6,7,7,8,10]))