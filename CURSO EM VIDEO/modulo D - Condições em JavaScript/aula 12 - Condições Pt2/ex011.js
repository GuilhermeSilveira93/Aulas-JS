var txtvel = 61;
    if (txtvel < 30) {
        console.log(`Sua velociade é de: ${txtvel}, está abaixo da metade permitida, você foi Multado`)
    } else { if(txtvel > 30 && txtvel <= 60){
        console.log(`Sua velociade é de: ${txtvel}. Dirija com sinto de segurança e com cuidado`)
    } else {
        console.log(` Calma Vin Diesel, ${txtvel} km/h NÃO PODE ! MULTADO !`)
    }
}