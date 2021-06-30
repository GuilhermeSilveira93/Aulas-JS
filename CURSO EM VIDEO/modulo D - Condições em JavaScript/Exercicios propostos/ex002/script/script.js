function verif(){
    var data = new Date()
    var ano = data.getFullYear()  //ANO ATUAL, PARA PODER SABER A IDADE SUBITRAINDO
    var fano = window.document.getElementById('textano')
    var res = window.document.querySelector('div#res')
        if (fano.value == 0 || Number(fano.value) > ano) {
            window.alert('[ERRO]: Verifique os dados e tente novamente !')
        } else {
            var fsex = window.document.getElementsByName('radsex')
            var idade = ano - Number(fano.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto') /*mesma coisa que fazer um <img id='foto'> no HTML*/
            if (fsex[0].checked) {
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/foto-bebe-m.png')
                } else if(idade < 21){
                    img.setAttribute('src', 'images/foto-jovem-m.png')
                } else if(idade < 50){
                    img.setAttribute('src', 'images/foto-adulto-m.png')
                } else {
                    img.setAttribute('src', 'images/foto-idoso-m.png')
                }
            } else if(fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/foto-bebe-f.png')
                } else if(idade < 21){
                    img.setAttribute('src', 'images/foto-jovem-f.png')
                } else if(idade < 50){
                    img.setAttribute('src', 'images/foto-adulto-f.png')
                } else {
                    img.setAttribute('src', 'images/foto-idoso-f.png')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
            /*res.appendChild FAZ COM QUE EU ADICIONE UM ELEMENTO FILHO*/
            res.appendChild(img)
        }
}