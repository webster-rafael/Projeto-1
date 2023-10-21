function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")
    if (html.classList.contains('light')) {
        img.setAttribute("src", "Fotos/avatar-light.png")
    } else {
        img.setAttribute("src", "Fotos/avatar.png")
    }

    }

    function saudacaoDeAcordoComHora() {
        var agora = new Date();
        var hora = agora.getHours();
        var saudacao = "Olá!";
        var saudacaoDiv = document.getElementById("saudacao");
    
        if (hora >= 5 && hora < 12) {
            saudacao = "Bom dia!";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "Boa tarde!";
        } else if (hora >= 18) {
            saudacao = "Boa noite!";
        } else {
            saudacao = "Boa madrugada!";
        }
    
        saudacaoDiv.textContent = saudacao;
    }
    
    saudacaoDeAcordoComHora();
    
    