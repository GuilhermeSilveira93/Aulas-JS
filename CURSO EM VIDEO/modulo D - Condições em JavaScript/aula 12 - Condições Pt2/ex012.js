var agora = new Date()
var hora = agora.getHours()
    if(hora > 0 && hora <= 5){
        console.log(`Agora são ${hora}hrs da madrugada`)}
         else{
            if(hora > 6 && hora < 11){
                console.log(`Agora são ${hora}hrs da manhã`)}
            else{
                if(hora == 12){
                    console.log(`Agora é meio dia ! ${hora}hrs`)}
                else{
                    if(hora >=13 && hora <= 18){
                        console.log(`Agora são ${hora}hrs da tarde`)}
                    else{
                        if(hora >= 19 && hora <= 23.59){
                            console.log(`Agora são ${hora}hrs da noite`)}
                    }
                }
            }
        }