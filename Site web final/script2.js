document.getElementById('submit-button2').addEventListener('click', function() {
    const password4 = document.getElementById('password4').value;

    if (password4 === 'Forêt de Montbazin') {
        window.location.href = 'page3.html';
    } else {
        window.location.href = 'error.html';
    }
});
