function convertirAregloATexto(arreglo) {
    var texto = '( '
    for (var i = 0; i < arreglo.length; i++) {
        texto += arreglo[i] + ", "
    }
    texto = texto.slice(0, -2) //quita los dos últimos caracteres
    texto += ' )'
}

function calcularFuncion(rutaPlantilla) {
    var A = document.getElementById('A').value
    var B = document.getElementById('B').value
    if (B <= 0) {
        window.alert("No se puede calcular B menor o igual cero")
    } else {
        //Plantilla 1
        var exp = Math.log(B) / Math.log(2);
        var num1 = B * (-1) + (-1)
        var coeficientesPolinomio = [1, num1, B]
        var raices = Raices.calcular(coeficientesPolinomio)
        var f2 = Number(A) + Number(B)
        var arreglo1 = new Array
        var arreglo2 = new Array
        arreglo1 = [1, 1, 1]
        arreglo2 = [B, 1, f2]
        var ValorCoef = Coeficientes.calcular(arreglo1, arreglo2)


        var diccionario = {
            'A': A,
            'B': B,
            'num1': num1,
            'F2': f2,
            'raiz1': raices[0],
            'raiz2': raices[1],
            'c1': ValorCoef[0],
            'c2': ValorCoef[1],
            'exp': exp,

        }

        function listener(htmlParseado) {
            var muestraproceso = document.getElementById('muestraproceso')
            muestraproceso.innerHTML = ''
            muestraproceso.innerHTML = htmlParseado
        }

        leerPlantilla(diccionario, listener, rutaPlantilla)
    }

}

function leerPlantilla(diccionario, listener, rutaPlantilla) {
    // Part 3 - Creating and setting up the XHR object
    var xhr = new XMLHttpRequest() //elemento de js no en todos esta

    xhr.open('GET', rutaPlantilla)

    // Part 4 - Defining callbacks that XHR object will call for us
    xhr.onload = function() {
        if (xhr.status === 200) {
            reemplazarVariables(xhr.response, diccionario, listener)
        }
    }

    xhr.onerror = function() {
        console.log('Unable to load RSS')
    }

    // Part 5 - Starting the process
    xhr.send()
}

function reemplazarVariables(respuestaHTML, diccionario, listener) {
    var htmlParseado = respuestaHTML
    for (var i in diccionario) {
        var expresionRegular = new RegExp('{{' + i + '}}', 'g')
        htmlParseado = htmlParseado.replace(expresionRegular, diccionario[i]);
    }
    listener(htmlParseado)
}
