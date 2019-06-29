function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) >= ano || Number(fano.value) < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'menino.png')
            } 
            else if (idade >= 15 && idade <= 21) {
                img.setAttribute('src', 'homem.png')
            } 
            else if (idade > 21 && idade <= 60) {
                img.setAttribute('src', 'adulto.png')
            }
            else {
                img.setAttribute('src', 'velho.png')
            }
        } 
        else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'menina.png')
            }
            else if (idade >= 15 && idade <= 21) {
                img.setAttribute('src', 'mulher.png')
            }
            else if (idade > 21 && idade <= 60) {
                img.setAttribute('src', 'adulta.png')
            }
            else {
                img.setAttribute('src', 'velha.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}
