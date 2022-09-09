function carregar() {
    let data = new Date()
    let ano = data.getFullYear()
    let datanasc = document.querySelector('#itxtnasce').value
    let sexo = document.querySelectorAll('#txtsex')
    let msg = document.querySelector('#resultado')
    let idade = ano - datanasc
    if(datanasc == '') {
        window.alert('[ERRO] Campo em branco')
    } else if ((idade < 10) && (sexo[0].checked)) {
        msg.innerHTML ='um bebe do sexo Masculino'
    } else if ((idade < 15) && (sexo[0].checked)) {
        msg.innerHTML='um adocelecente do sexo Masculino'
    } else if ((idade < 18) && (sexo[0].checked)) {
        msg.innerHTML='um jovem do sexo Masculino'
    } else if ((idade < 25) && (sexo[0].checked)) {
        msg.innerHTML='um jovem adulto do sexo Masculino'
    } else if ((idade < 45) && (sexo[0].checked)) {
        msg.innerHTML='um adulto do sexo Masculino'
    } else if ((idade > 45) && (sexo[0].checked)) {
        msg.innerHTML='um senhor do sexo Masculino'
    } else if ((idade < 10) && (sexo[1].checked)) {
        msg.innerHTML='um bebe do sexo Feminino'
    } else if ((idade < 15) && (sexo[1].checked)) {
        msg.innerHTML='um adocelecente do sexo Feminino'
    } else if ((idade < 18) && (sexo[1].checked)) {
        msg.innerHTML='um jovem do sexo Feminino'
    } else if ((idade < 25) && (sexo[1].checked)) {
        msg.innerHTML='um jovem adulto do sexo Feminino'
    } else if ((idade < 45) && (sexo[1].checked)) {
        msg.innerHTML='um adulto do sexo Feminino'
    } else if ((idade > 45) && (sexo[1].checked)) {
        msg.innerHTML='um senhor do sexo Feminino'
    } 
    
}