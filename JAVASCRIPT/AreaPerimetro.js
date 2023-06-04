function AreaPerimetro() {
    var calculo= "area"; 
    var figura="Triangulo";
    
    if (calculo=="area") {
        
            switch (figura){
                case "Triangulo":
                    var base=2; //prompt("Ingrese la base:","");
                    var altura=4; //prompt("Ingrese la altura:","");
                    return "El area del triangulo es:"+(base*altura)/2;
                    break
                case "Cuadrado":
                    var lado=3; //prompt("Ingrese el lado:","")
                    console.log("El area del cuadrado es:"+lado**2);
                    break
                case "Rectangulo":
                    var base=5; //prompt("Ingrese la base:","");
                    var altura=4; //prompt("Ingrese la altura:","");
                    console.log("El area del rectangulo es:"+base*altura);
                    break
                case "Circulo":
                    
                default:
                    console.log("La figura ingresada no es valida.")
            }
        }
    else if (calculo=="perimetro"){

        switch (figura){
                case "Triangulo":
                    var a=2 //prompt("Ingrese a:","");
                    var b=3 //prompt("Ingrese b:","");
                    var c=4 // prompt("Ingrese c:","");
                    console.log("El perimetro del triangulo es:"+(a+b+c));
                    break
                case "Cuadrado":
                    var lado=6 //prompt("Ingrese el lado:","")
                    console.log("El perimetro del cuadrado es:"+4*lado);
                    break
                case "Rectangulo":
                    var base=7 //prompt("Ingrese la base:","");
                    var altura=4 //prompt("Ingrese la altura:","");
                    return "El perimetro del rectangulo es:"+2*(base+altura);
                    break
                case "Circulo":

                default:
        }
        
    }

}

//console.log(function AreaPerimetro())

