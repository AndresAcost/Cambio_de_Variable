function calcularFuncion(rutaPlantilla) {

  var diccionario = {
    "A": document.getElementById('A').value,
    "B": document.getElementById('B').value,
  }

  function listener(htmlParseado) {
    var muestraproceso = document.getElementById('muestraproceso')
    muestraproceso.innerHTML = ""
    muestraproceso.innerHTML = htmlParseado
  }

  leerPlantilla(diccionario, listener, rutaPlantilla)
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
