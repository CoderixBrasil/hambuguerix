document.getElementById("bottomButton").addEventListener("click", function() {
    document.getElementById("topButton").style.display = "none"; // Esconde o botão superior
    document.getElementById("topSection").style.height = "20vh"; // Define a altura da top-section para 30vh
    document.getElementById("bottomSection").style.height = "80vh"; // Define a altura da bottom-section para 70vh
    document.querySelector(".top-section h1").style.marginBottom = "10%";
    document.getElementById("bottomButton").style.height = "12%";
    document.getElementById("tablePicker").style.display = "inline";
    document.getElementById("buttonMenu").style.display = "inline";
});

