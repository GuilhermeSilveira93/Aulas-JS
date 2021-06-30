function verif(){
    var data = new Date()
    anoatual = data.getFullYear()
    var anodigitado = window.document.getElementById('textano')
    var res = window.document.getElementById('res')
        if(anodigitado.value == 0 || anodigitado.value > ano){
            window.alert(`[ERRO] - Algo deu errado, tente novamente`)
        } else {
            var sexselecionado = window.document.getElementsByName('radsex')
            var idade = anoatual - Number(anodigitado.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id','foto')
            if(sexselecionado[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'endereço da imagem')
            } else if(idade < 21){
                img.setAttribute('src','endereço da imagem')
            } else if (idade < 50){
                img.setAttribute('src', 'endereço da imagem')
            } else{
                img.setAttribute('src','endereço da imagem')
            }
            }
        } else if(sexodigitado[1].checked){
            genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'endereço da imagem')
            } else if(idade < 21){
                img.setAttribute('src','endereço da imagem')
            } else if (idade < 50){
                img.setAttribute('src', 'endereço da imagem')
            } else{
                img.setAttribute('src','endereço da imagem')
            }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade}`
        res.appendChild(img)
        }
}