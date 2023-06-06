const onDOMLoad = () => {

var mayores, menores, adumay, min, max, prom,prome,datosvalidos,n; //edades=[12,14,18,25,32,65,68,70,80]  

mayores=0; 
menores=0;
adumay=0;
prome=0;

n= parseInt(prompt(`Ingrese el numero de edades:`));
        var edades=[]
       
        for(var i=0;i<n;i++){
           edades [i]= parseFloat(prompt(`Ingrese la ${i+1} edad:`));
        }

datosvalidos=edades.every((edad)=>(edad>=0 && edad<=120))

if (datosvalidos==true){
   n=edades.length;
   min=Math.min(...edades);
   max=Math.max(...edades);
   prom=((edades.reduce((prome,edad)=>(prome+edad),0))/n);

   edades.forEach((edad) => {
   
      if (edad>=18){
       mayores++
   } else {
       menores++
   }    
   
   if (edad>=60){
       adumay++
      }
 });
   alert(`En los datos ingresados hay: ${mayores} mayores
   ${menores} menores
   ${adumay} adultos mayores
   La edad minima es: ${min}
   La edad maxima es: ${max}
   El promedio es:${prom}`);

} else{
   return "Los datos ingresados no se encuentran dentro del rango de edad. Ingreselos nuevamente"
}
}
window.addEventListener('DOMContentLoaded', onDOMLoad);

//console.log(EdadesGrupo([12,14,18,25,32,65,68,70,80]))