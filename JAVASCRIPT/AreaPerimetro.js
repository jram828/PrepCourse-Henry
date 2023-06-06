
    const onDOMLoad = () => {
// Pedimos al usuario que seleccione el calculo a realizar
    calculo= prompt("Ingrese el calculo a realizar (Area, Perimetro):");

// Pedimos al usuario que seleccione una figura
    figura= prompt("Ingrese la figura (Triangulo, Rectangulo, Cuadrado, Circulo):");
    
    if (calculo=="Area") {
                            switch (figura){
                                case "Triangulo":
                                    baseT=parseFloat(prompt("Ingrese la base:"));
                                    alturaT=parseFloat(prompt("Ingrese la altura:"));
                                    areaT=(baseT*alturaT)/2
                                    alert(`El área del triángulo es: ${areaT.toFixed(2)}`);
                                    break
                                case "Cuadrado":
                                    lado=parseFloat(prompt("Ingrese el lado:"));
                                    areaC=lado**2
                                    alert(`El área del cuadrado es: ${areaC.toFixed(2)}`);    
                                    break
                                case "Rectangulo":
                                    base=parseFloat(prompt("Ingrese la base:"));
                                    altura=parseFloat(prompt("Ingrese la altura:"));
                                    area=(base*altura)
                                    alert(`El área del rectangulo es: ${area.toFixed(2)}`);
                                    break
                                case "Circulo":
                                    radio=parseFloat(prompt("Ingrese el radio:"));
                                    areaCi=3.1416*(radio**2)
                                    alert(`El área del circulo es: ${areaCi.toFixed(2)}`);     
                                    break
                                default:
                                    alert("La figura ingresada no es valida.");
                             }
                      
                        
    } else if (calculo=="Perimetro"){
                        switch (figura){
                            case "Triangulo":
                                baseT=parseFloat(prompt("Ingrese la base:"));
                                alturaT=parseFloat(prompt("Ingrese la altura:"));
                                perT = baseT + 2 * Math.sqrt(alturaT ** 2 + (baseT / 2) ** 2);
                                alert(`El perimetro del triángulo es: ${perT.toFixed(2)}`);
                                break
                            case "Cuadrado":
                                lado=parseFloat(prompt("Ingrese el lado:"));
                                perC=4*lado
                                alert(`El perimetro del cuadrado es: ${perC.toFixed(2)}`);    
                                break
                            case "Rectangulo":
                                base=parseFloat(prompt("Ingrese la base:"));
                                altura=parseFloat(prompt("Ingrese la altura:"));
                                per=2*(base+altura)
                                alert(`El perimetro del rectangulo es: ${per.toFixed(2)}`);
                                break
                            case "Circulo":
                                radio=parseFloat(prompt("Ingrese el radio:"));
                                perCi=2*3.1416*(radio)
                                alert(`El perimetro del circulo es: ${perCi.toFixed(2)}`);     
                                break
                            default:
                                alert("La figura ingresada no es valida.");
                    } 
    } else {alert("El calculo ingresado no es valido.");}
    }
window.addEventListener('DOMContentLoaded', onDOMLoad);

//console.log(AreaPerimetro("area","Cuadrado",0,0,5,0,0,4,0,0,));



