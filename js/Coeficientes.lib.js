var Coeficientes = {


  calcular: function(a, b) {
  Coeficientes = new Array
      var coeficiente1=((b[2]*a[1])-(b[1]*a[2])) / ((b[0]*a[1])-(b[1]*a[0]))
      var coeficiente2=(a[2]-(a[0]*coeficiente1))/a[1]
      Coeficientes.push(coeficiente1,coeficiente2)
      return Coeficientes
  }


}
