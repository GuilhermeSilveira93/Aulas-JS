function clicar(){
    var ini = window.document.getElementById('inicio').value
    var fi = window.document.getElementById('fim').value
    var soma = Number(ini) + Number(fi)
    window.alert(`seu resultado é ${soma}`)
}