let inputSearch = document.getElementById("inputSearch");
let searchIcon = document.getElementById("searchIcon");
let searchBottom = document.getElementById("searchBottom");
let isInputVisible = false;

searchIcon.addEventListener('click', function(event) {
    toggleInputVisibility();
    event.stopPropagation();
});

searchBottom.addEventListener('click', function(event) {
    toggleInputVisibility();
    event.stopPropagation();
});

document.addEventListener("click", function(event) {
    if (event.target !== searchIcon && event.target !== inputSearch && event.target !== searchBottom && event.target !== notification) {
        inputSearch.style.display = "none";
        isInputVisible = false;
        hiddenNotification();
    }
});

inputSearch.addEventListener("click", function(event) {
    event.stopPropagation();
});

function toggleInputVisibility() {
    if (!isInputVisible) {
        inputSearch.style.display = "inline";
        isInputVisible = true;
    } else {
        if (inputSearch.value.trim() === '') {
            showNotification('Por favor, adicione o nome de algum item');
            setTimeout(hiddenNotification, 3000);
        } else {
            searchItem(inputSearch.value);
        }
    }
}

function showNotification(message) {
    let notification = document.getElementById("notification");
    notification.textContent = message;
    notification.style.display = 'block';
}

function hiddenNotification() {
    let notification = document.getElementById("notification");
    notification.style.display = 'none';
}

function searchItem(item) {
    console.log("Pesquisando por: " + item);
}
