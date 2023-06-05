function AreaPerimetro(calculo,figura,baseT,alturaT,lado,base,altura,radio,a,c,) {
     // const readline = require('node:readline');
    // const { stdin: input, stdout: output } = require('node:process');
    // const rl = readline.createInterface({ input, output });
   
    // rl.question('Ingrese el calculo a realizar:', (answer1) => {
    //     var answer1
    //                 calculo= answer1;
                     
    //                  rl.close();
                     
    //                  });

    if (calculo=="area") {
                            switch (figura){
                            case "Triangulo":
                                return "El area del triangulo es:"+(baseT*alturaT)/2; 
                                
                            case "Cuadrado":
                                return "El area del cuadrado es:"+lado**2; 
                                
                            case "Rectangulo":
                                return "El area del rectangulo es:"+base*altura;
                           
                            case "Circulo":
                                return "El area del circulo es:"+3.1416*(radio**2);
                                
                            default:
                                return "La figura ingresada no es valida."
                        }
                      
                        
                    } else if (calculo=="perimetro"){
                        switch (figura){
                            case "Triangulo":
                                return "El perimetro del triangulo es:"+(a+baseT+c);
                                
                            case "Cuadrado":
                                return "El perimetro del cuadrado es:"+4*lado;
                                
                            case "Rectangulo":
                                return "El perimetro del rectangulo es:"+2*(base+altura);
                                break
                            case "Circulo":
                                return "El perimetro del circulo es:"+2*3.1416*(radio);
                            default:
                                return "La figura ingresada no es valida."
                           }
                                
                    } else{return "El calculo ingresado no es valido."}
                     
                     
    
}

console.log(AreaPerimetro("area","Circulo",0,0,0,0,0,4,0,0,));



