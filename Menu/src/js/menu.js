document.addEventListener("DOMContentLoaded", function() {
    const sideItems = document.querySelectorAll("#side-items .side-item");
    const sections = document.querySelectorAll("main section");

    sideItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            // Oculta todas as seções
            sections.forEach(section => section.style.display = "none");

            // Exibe apenas a seção correspondente ao item clicado
            sections[index].style.display = "block";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sideItems = document.querySelectorAll("#side-items .side-item");
    const sections = document.querySelectorAll("main section");

    // Exibir a seção "Home" por padrão ao carregar a página
    sections.forEach(section => section.style.display = "none");
    document.getElementById("home").style.display = "block";

    sideItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            // Oculta todas as seções
            sections.forEach(section => section.style.display = "none");

            // Exibe apenas a seção correspondente ao item clicado
            sections[index].style.display = "block";
        });
    });
});
