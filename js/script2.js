function convertirAregloATexto(arreglo) {
    var texto = '( '
    for (var i = 0; i < arreglo.length; i++) {
        texto += arreglo[i] + ", "
    }
    texto = texto.slice(0, -2) //quita los dos últimos caracteres
    texto += ' )'
}

function calcularFuncion2(rutaPlantilla) {
        var A = document.getElementById('A').value
        var B = document.getElementById('B').value
        if (B <= 0) {
            window.alert("No se puede calcular B menor o igual cero")
        } else {
          var divi= Math.pow(2,A)
          var c=divi*B
          var meB=B*(-1)
          var d=meB+divi*(-1)
          var d2=d*(-1)
          console.log(d);
          var coeficientesPolinomio = [1, d, c]
          var raices = Raices.calcular(coeficientesPolinomio)
          var exp1 = Math.log(raices[0]) / Math.log(2);
          var exp2 = Math.log(raices[1]) / Math.log(2);
          var arreglo1 = new Array
          var arreglo2 = new Array
          arreglo1 = [1, 1, 1]
          arreglo2 = [raices[0], raices[1], d2]
          console.log(arreglo2);
          var ValorCoef = Coeficientes.calcular(arreglo1, arreglo2)





            var diccionario = {
                'A': A,
                'B': B,
                'divi': divi,
                'cB': c,
                'd': d,
                'd2':d2,
                'raiz1': raices[0],
                'raiz2': raices[1],
                'c1': ValorCoef[0],
                'c2': ValorCoef[1],
                'exp1': exp1,
                'exp2': exp2,


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
