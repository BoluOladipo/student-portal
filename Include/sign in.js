document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    document.getElementById('matric').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    
    const matric = document.getElementById('matric').value;
    const password = document.getElementById('password').value;

    
    if (matric === "" || password === "") {
        
        if (matric === "") {
            document.getElementById('matric').classList.add('error');
        }
        if (password === "") {
            document.getElementById('password').classList.add('error');
        }
        alert("Please fill in all fields."); 
    } else {
        alert("Logged in successfully✔✔"); 
    }
});
