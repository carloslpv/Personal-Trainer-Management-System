document.addEventListener('DOMContentLoaded', function() {
    // Define the path to the header.html file relative to the current document
    const path = '../loaders/header.html';
    
    fetch(path)
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});
