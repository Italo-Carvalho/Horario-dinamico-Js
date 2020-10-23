function carregar() {
    document.getElementById("msg").innerHTML = `Agora são ${hora} horas.`
    switch(true) {
            case(data.getHours() >= 8 && data.getHours() < 12):
                img.src = "manha.png";
                document.body.style.background = "#00b8b4";
            break;
            case(data.getHours() >= 12 && data.getHours() <= 18):
                img.src = "tarde.png"
                document.body.style.background = "#fcaf51"
            break;
            case(data.getHours() >= 18 && data.getHours() < 7):
                img.src = 'noite.png'
                document.body.style.background = '#001f4d'
            break;
    }
}
