const onDOMLoad = () => {
    // Pedimos al usuario que ingrese los vectores

        n= parseInt(prompt(`Ingrese el numero de elementos del primer vector:`));
        var Vec1=[]
        var Vec2=[];

        for(var i=0;i<n;i++){
           Vec1 [i]= parseFloat(prompt(`Ingrese el ${i+1} elemento del vector:`));

        }

         k= parseInt(prompt(`Ingrese el numero de elementos del segundo vector:`));

        for(var j=0;j<k;j++){
            Vec2 [j]= parseFloat(prompt(`Ingrese el ${j+1} elemento del vector:`));

        }

    var contA, contB,i,nuevovector;

    if(Vec1.length>5||Vec2.length>5) {alert("Se permiten maximo 5 numeros por vector")}
    else{
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
        if (contA<Vec1.length||contB<Vec2.length) {alert("Al menos uno de los vectores no está en orden ascendente")}
        else{
            nuevovector=Vec1.concat(Vec2);
            nuevovector.sort((a, b) => a - b )
            alert(`El nuevo vector es: ${nuevovector}`);}
        
        
        
    };
    
    
}

window.addEventListener('DOMContentLoaded', onDOMLoad);
//console.log(Vectores([1,2,3,4,5],[6,7,7,8,10]))