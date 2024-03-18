// For the title
const title = document.querySelector('#title');
// For reg form
const regForm = document.querySelector('.regForm');

// For reg form fields
const usernameReg = document.getElementById('usernameReg');
const passwordReg = document.getElementById('passwordReg');

// For login form
const logForm = document.querySelector('.logForm');

// For login form fields
const username = document.getElementById('username');
const password = document.getElementById('password');

// For username and passwords
const usernameAndPasswords = {}

// For getting the date and time today
const time = new Date().toLocaleString();

// For checking if a username already exists
function checkIfUserExists(username, usernameAndPasswords) {
    if (usernameAndPasswords.hasOwnProperty(username)) {
        return true
    }
}

// For validating username and passwords stored 
function validateUserNameAndPassword(username, password, usernameAndPasswords,) {
    if(usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
        return true;
    }
}

// Toggle between registration and login forms
function toggleForms() {
    regForm.style.display = regForm.style.display === "none" ? "block" : "none";
    logForm.style.display = logForm.style.display === "none" ? "block" : "none";
}

// Show greeting panel
function showGreeting(username) {
    const greetingPanel = document.querySelector('.welcomePanel');
    const greetingText = document.querySelector('#greeting');
    greetingText.textContent = "Good day! " + username + ". It's currently " + time;
    greetingPanel.style.display = "block";
}

// Hide greeting panel
function hideGreeting() {
    const greetingPanel = document.querySelector('.welcomePanel');
    greetingPanel.style.display = "none";
}

document.getElementById('loginButton').addEventListener('click', toggleForms);
document.getElementById('loginLink').addEventListener('click', toggleForms);
document.getElementById('registerLink').addEventListener('click', toggleForms);

regForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate if one of the fields are empty
    if(usernameReg.value.length == 0 || passwordReg.value.length == 0) {
        alert("Fill out all the forms first");
    } else {
        // Password validation checks
        const passwordValue = passwordReg.value;

        
        if (passwordValue.length < 8) {
            alert('Password must be at least 8 characters long');
        } else if (!/\d/.test(passwordValue)) { 
            alert('Password must contain at least one digit');
        } else if (!/[a-z]/.test(passwordValue) || !/[A-Z]/.test(passwordValue)) { 
            alert('Password must contain at least one uppercase and one lowercase letter');
        } else {
           
            usernameAndPasswords[usernameReg.value] = passwordReg.value;
            console.log(usernameAndPasswords);

         
            logForm.style.display = "block";
            regForm.style.display = "none";
        }
    }
});

logForm.addEventListener('submit', function (e) {
    e.preventDefault();


    const usernameValue = username.value;
    const passwordValue = password.value;

    if (validateUserNameAndPassword(usernameValue, passwordValue, usernameAndPasswords)) {
       
        logForm.style.display = "none";
        title.style.display = "none";


        showGreeting(usernameValue);
    } else {
   
        alert("Username and password don't exist");
    }
});

document.getElementById('backToLogin').addEventListener('click', function() {

    hideGreeting();
    toggleForms();
});
