const onDOMLoad = () => {
// Pedimos al usuario que seleccione una figura
alert('Selecciona una de las siguientes figuras');
let figura = Number(
prompt(
`
1 = triángulo
2 = Cuadrado
3 = rectángulo
4 = círculo
`
)
);

// Creamos variables para almacenar las medidas de la figura
let base, altura, lado, radio;

switch (figura) {
    case 1:
        base = parseFloat(prompt('Introduce la base del triángulo:'));
        altura = parseFloat(prompt('Introduce la altura del triángulo:'));
        // Calculamos el área y el perímetro del triángulo
        let areaTriangulo = (base * altura) / 2;
        let perimetroTriangulo =
        base + 2 * Math.sqrt(altura ** 2 + (base / 2) ** 2);
        // Mostramos los resultados al usuario
        alert(`El área del triángulo es: ${areaTriangulo.toFixed(2)}`);
        alert(`El perímetro del triángulo es: ${perimetroTriangulo.toFixed(2)}`);
        break;
    case 2:
        lado = parseFloat(prompt('Introduce el lado del cuadrado:'));
        // Calculamos el área y el perímetro del cuadrado
        let areaCuadrado = lado ** 2;
        let perimetroCuadrado = lado * 4;
        // Mostramos los resultados al usuario
        alert(`El área del cuadrado es: ${areaCuadrado.toFixed(2)}`);
        alert(`El perímetro del cuadrado es: ${perimetroCuadrado.toFixed(2)}`);
        break;
    case 3:
        base = parseFloat(prompt('Introduce la base del rectángulo:'));
        altura = parseFloat(prompt('Introduce la altura del rectángulo:'));
        // Calculamos el área y el perímetro del rectángulo
        let areaRectangulo = base * altura;
        let perimetroRectangulo = 2 * base + 2 * altura;
        // Mostramos los resultados al usuario
        alert(`El área del rectángulo es: ${areaRectangulo.toFixed(2)}`);
        alert(`El perímetro del rectángulo es: ${perimetroRectangulo.toFixed(2)}`);
        break;
    case 4:
        radio = parseFloat(prompt('Introduce el radio del círculo:'));
        // Calculamos el área y el perímetro del círculo
        let areaCirculo = Math.PI * radio ** 2;
        let perimetroCirculo = 2 * Math.PI * radio;
        // Mostramos los resultados al usuario
        alert(`El área del círculo es: ${areaCirculo.toFixed(2)}`);
        alert(`El perímetro del círculo es: ${perimetroCirculo.toFixed(2)}`);
        break;
    default:
        alert('La figura seleccionada no es válida.');
}
};

window.addEventListener('DOMContentLoaded', onDOMLoad);