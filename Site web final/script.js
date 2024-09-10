document.getElementById('submit-button').addEventListener('click', function() {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const password3 = document.getElementById('password3').value;

    if (password1 === 'Clermont-Ferrand' && password2 === 'Cambo-les-bains' && password3 === 'Bonifacio') {
        window.location.href = 'page2.html';
    } else {
        window.location.href = 'error.html';
    }
});
