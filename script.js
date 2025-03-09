function formValidation() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let messageBox = document.querySelector(".message");

    
    messageBox.innerHTML = "";

    
    if (email === "") {
        messageBox.innerHTML = "<p class='wrong'>Email is required</p>";
        return false;
    } else if (!email.includes("@") || !email.includes(".")) {
        messageBox.innerHTML = "<p class='wrong'>Enter a valid email</p>";
        return false;
    }

    
    if (password === "") {
        messageBox.innerHTML = "<p class='wrong'>Password is required</p>";
        return false;
    } else if (password.length < 6) {
        messageBox.innerHTML = "<p class='wrong'>Password must be at least 6 characters</p>";
        return false;
    }

    messageBox.innerHTML = "<p class='success'>Login Successful!</p>";

    
    return false;
}
