function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>= 0 && hora < 12){
        img.src = "fotomanhã.png"
        document.body.style.background = '#FFC28D'
    }else if(hora >= 12 && hora <= 18){
        img.src = "fototarde.png"
        document.body.style.background = '#EE8846'
    }else{
        img.src = "fotonoite.png"
        document.body.style.background = '#13233A'
    }
}
