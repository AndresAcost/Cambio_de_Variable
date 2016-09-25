var Raices = {
    calcular: function(coefPolinomio) {
        var raices = this.esRaiz(coefPolinomio)
        return raices
    },
    esRaiz: function(coefPolinomio) {
        var raiz = new Array
        var imaginario = 'i'
        var discriminante = (Math.pow(coefPolinomio[1], 2) - 4 * (coefPolinomio[0]) * (coefPolinomio[2]))
        if (discriminante < 0) {
            discriminante = discriminante * (-1) + imaginario
            console.log(discriminante);
        }
        raiz.push(((-coefPolinomio[1] + Math.sqrt(discriminante)) / 2 * coefPolinomio[0]))
        raiz.push(((-coefPolinomio[1] - Math.sqrt(discriminante)) / 2 * coefPolinomio[0]))
        return raiz
    }
}
