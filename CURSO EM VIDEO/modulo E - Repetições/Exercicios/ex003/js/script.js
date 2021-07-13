function clicar(){
    let txti = window.document.getElementById('txti')
    let res = window.document.getElementById('seltab')
        if(txti.value.length == 0){
            window.alert('[ERRO] Favor colocar um número.')
        } else {
            let i = Number(txti.value)
            let c = 0
            res.innerHTML = ''
                while (c <= 10){
                    let item = document.createElement('option')
                    item.text = `${i} x ${c} = ${i*c}`
                    res.appendChild(item)
                    c++
                }

        }
}