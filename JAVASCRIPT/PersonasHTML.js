const onDOMLoad = () => {
 
var personas=[];

for(var l=0; l<6; l++) {
personas[l] = new Array(8);
} 

 for(var i=0;i<6;i++){
    alert(`Ingrese los datos de la ${i+1} persona`);
    
    for(var j=0;j<8;j++){
            switch (j){
              case 0:
                personas[i][j]=prompt(`Ingrese el Nombre:`)
                continue
              case 1: 
                personas[i][j]=prompt(`Ingrese la cedula:`)
                continue
            case 2: 
                personas[i][j]=prompt(`Ingrese la fecha de nacimiento:`)
                continue
            case 3: 
                personas[i][j]=prompt(`Ingrese el email:`)
                continue
            case 4:
                personas[i][j]=prompt(`Ingrese la ciudad de residencia:`)
                continue
            case 5:
                personas[i][j]=prompt(`Ingrese la ciudad de origen:`)
                continue
            case 6: 
                personas[i][j]=prompt(`Ingrese el artista:`)
                continue
            case 7:
                personas[i][j]=prompt(`Ingrese las canciones separadas por comas:`)
            default:
        
        }
    }
    //let Concurso=new Persona(nombre,cedula,fechaNac,email,ciuRes,ciuOri,artista,canciones)
 
}
p= parseInt(prompt(`Ingrese la posicion de la persona que desea verificar:`));
alert(`Los datos de la persona son: ${personas[p-1]}`);
}
window.addEventListener('DOMContentLoaded', onDOMLoad);