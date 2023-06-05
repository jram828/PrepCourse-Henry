function EdadesGrupo(edades){
var mayores, menores, adumay, min, max, prom,prome,datosvalidos,n; //edades=[12,14,18,25,32,65,68,70,80]  

mayores=0; 
menores=0;
adumay=0;
prome=0;



datosvalidos=edades.every((edad)=>(edad>=0 && edad<=120))
//console.log(datosvalidos)
if (datosvalidos==true){
   n=edades.length;

   min=Math.min(...edades);
  // console.log(min)
   
   max=Math.max(...edades);
   //console.log(max)
   
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
   //console.log(mayores)
   //console.log(menores)
   //console.log(adumay)
   return "En los datos ingresados hay:\n "+mayores+" mayores, "+menores+" menores, "+adumay+" adultos mayores.\n La edad minima es: "+min+". La edad maxima es: "+max+".\n El promedio es: "+prom

} else{
   return "Los datos ingresados no se encuentran dentro del rango de edad. Ingreselos nuevamente"
}
}


//console.log(EdadesGrupo([12,14,18,25,32,65,68,70,80]))