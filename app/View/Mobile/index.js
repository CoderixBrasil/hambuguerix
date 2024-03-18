document.getElementById("bottomButton").addEventListener("click", function() {
    document.getElementById("topButton").style.display = "none"; // Esconde o botão superior
    document.querySelector(".top-section").style.height = "20vh"; // Define a altura da top-section para 30vh
    document.querySelector(".bottom-section").style.height = "80vh"; // Define a altura da bottom-section para 70vh
    document.querySelector(".top-section h1").style.marginBottom = "10%";
    document.getElementById("bottomButton").style.height = "12%";
});
