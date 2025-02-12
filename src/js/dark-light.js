function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector('.logo img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', "./src/imagens/logo-light.png")
    } else {
        img.setAttribute("src", "./src/imagens/logo-dark.png")
    }
}



