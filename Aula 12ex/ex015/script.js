function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // Pega o ano completo (2023)
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamento!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //Criando um Elemento <tag> <img> atraves do JavaScript
        img.setAttribute('id','foto') // Adicionando atributo ao elemento criado via JavaScript
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','criancahomem.png')
            }else if (idade < 21){
                img.setAttribute('src','jovemhomem.png')
            }else if(idade < 50){
                img.setAttribute('src','adultohomem.png')
            }else{
                img.setAttribute('src','idosohomem.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','criancamulher.png')
            }else if (idade < 21){
                img.setAttribute('src','jovemmulher.png')
            }else if(idade < 50){
                img.setAttribute('src','adultomulher.png')
            }else{
                img.setAttribute('src','idosamulher.png')
            }
        }
        res.style.textAlign = 'center' //centralizando o texto por JavaScript ao inves de fazer por CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //Adiciona um conteúdo abaixo 
    }
}