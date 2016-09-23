function calcularFuncion1() {
    var muestraproceso = document.getElementById('muestraproceso')

  /*  var CELDA = 'F_n=' + a + ' + ' + b + '*f_(n/2)';
    CELDA += '<br></br> Considerando que: n= 2^i';
    CELDA += '<br></br> F_2^i = ' + a + ' + ' + b + '* f_2^(i-1) ';
    b = b * i
    CELDA += '<br></br> F_2^i ' + b + '* f_2^(i-1) = ' + a;
    CELDA += '<br></br> Cambiando los subindices en función i, tenemos';
    CELDA += '<br></br> F_i  ' + b + ' *f_(i-1) = ' + a;
    CELDA += '<br></br> Reemplazando i por i-1, y multiplicando por (-1) tenemos:';
    c = a * i
    d = b * i
    CELDA += '<br></br>' + i + ' F_(i-1) + ' + d + ' f_(i-2) = ' + c;
    CELDA += '<br></br> Sumando la ecuaciones se convierte en homogenea:';
    k1 = (b + i)
    k2 = 0 //a+c
    CELDA += '<br></br> F_i ' + k1 + ' f_(i-1) + ' + d + ' f_(i-2) = ' + k2;
    dios=1
    coeficientes=new Array[dios,k1,d]
    var raices = Raices.calcular(coeficientes)
    console.log(raices);
    muestraproceso.innerHTML = CELDA*/

    muestraproceso.innerHTML = ""

    var diccionario = {
      "A": document.getElementById('A').value,
      "B": document.getElementById('B').value,
    }

    function listener(htmlParseado) {
        muestraproceso.innerHTML = htmlParseado
    }

    leerPlantilla(diccionario, listener)
}

function leerPlantilla(diccionario, listener) {
  // Part 3 - Creating and setting up the XHR object
  var xhr = new XMLHttpRequest() //elemento de js no en todos esta

  xhr.open('GET', "template1.html")

  // Part 4 - Defining callbacks that XHR object will call for us
  xhr.onload = function(){
  if (xhr.status === 200) {
          reemplazarVariables(xhr.response, diccionario, listener)
      }
  }

  xhr.onerror = function() {
      console.log("Unable to load RSS")
  }

  // Part 5 - Starting the process
  xhr.send()
}

function reemplazarVariables(respuestaHTML, diccionario, listener) {
  var htmlParseado = respuestaHTML
  for (var i in diccionario) {
    var expresionRegular = new RegExp("{{" + i + "}}", 'g')
    htmlParseado = htmlParseado.replace(expresionRegular, diccionario[i]);
  }
  listener(htmlParseado)
}
