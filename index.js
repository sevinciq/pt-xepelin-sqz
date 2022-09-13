window.addEventListener('DOMContentLoaded', () => {
    let loginButton = document.getElementById('login');
    let logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click',handleLogout);
    loginButton.addEventListener('click', handleLogin); 
});

function toggleSpreadSheet() {
    let spreadSheetDiv = document.getElementById('spreadsheet');
    spreadSheetDiv.style.display = spreadSheetDiv.style.display === 'none' ? '' : 'none';
}

function toggleLogin() {
    let loginInput = document.getElementById('login-div');
    loginInput.style.display = loginInput.style.display === 'none' ? '' : 'none';
}


function handleLogin() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let invalid = document.getElementById('invalid');

    if (username == 'admin' && password == '123') {
        toggleSpreadSheet();
        toggleLogin();
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        invalid.style.display = 'none';
    } else {
        invalid.style.display = '';
    }  
}

function handleLogout() {
    toggleSpreadSheet();
    toggleLogin();
}



