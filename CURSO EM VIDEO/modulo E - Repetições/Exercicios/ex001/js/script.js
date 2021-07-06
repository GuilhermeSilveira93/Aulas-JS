function clicar(){
    var ini = window.document.getElementById('inicio')
    var fi = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var res = window.document.getElementById('resultado')
        if(pas <= 0){
            window.alert('Uso Incorreto do Programa')
        }else{
        for( var ini ; ini <= 10 ; ini++)
        res.innerHTML = ini
    }
}