function carregar(){
    var imagem = window.document.getElementById('img')
    var periodo = window.document.getElementById('horas')
    var conteudo2 = window.document.getElementById('conteudo2')
    //var horario = new Date()
    //var relogio = horario.getHours()
    var relogio = 22
        periodo.innerHTML = `<p>Agora são ${relogio}horas</p>`
            if(relogio >= 0 && relogio < 12){
                periodo.style.color = 'black'
                imagem.src = 'image/manha.jpg'
                conteudo2.style.background = 'white'
                document.body.style.background = "linear-gradient(5deg, #FCB85F, #798388, blue)"
            } else if (relogio >= 12 && relogio < 18){
                periodo.style.color = 'black'
                imagem.src = 'image/tarde.jpg'
                conteudo2.style.background = 'gray'
                document.body.style.background = "linear-gradient(45deg, #743C29, #D64516, #733B2A)"
            } else{
                periodo.style.color = 'white'
                imagem.src = 'image/noite.jpg'
                conteudo2.style.background = 'black'
                document.body.style.background = "linear-gradient(45deg, black, gray, white)"
            }

}
