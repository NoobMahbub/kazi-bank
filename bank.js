
document.getElementById('submit-btn').addEventListener('click',
function () {
        console.log("test");

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        if(email=='admin@kazibank.com' &&  password == 'takade' ){
        window.location.href = 'banking.html';
        }
    });