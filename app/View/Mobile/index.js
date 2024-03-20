document.getElementById("bottomButton").addEventListener("click", function() {
    document.getElementById("topButton").style.display = "none";
    document.getElementById("topSection").style.height = "20vh";
    document.getElementById("bottomSection").style.height = "80vh";
    document.querySelector(".top-section h1").style.marginBottom = "10%";
    document.getElementById("bottomButton").style.height = "12%";
    document.getElementById("tablePicker").style.display = "inline";
    document.getElementById("buttonMenu").style.display = "inline";
});

document.getElementById("buttonMenu").addEventListener('click', function() {
    let tableChooser = document.getElementById("tablePicker").value;

    if (tableChooser === '') {
        showNotification('Por favor, escolha sua mesa');
        setTimeout(function() {
            hiddenNotification();
        }, 3000);
    } else {
        window.location.href = 'menu.php';
    }
});

function showNotification(message) {
    let notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = 'block'
};

function hiddenNotification() {
    let notification = document.getElementById("notification");
    notification.style.display = 'none';
};