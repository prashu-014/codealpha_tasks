window.addEventListener("load", () => {
    document.getElementById('uname').value = ""
    document.getElementById('uemail').value = ""
    document.getElementById('upassword').value = ""
    document.getElementById('lemail').value = ""
    document.getElementById('lpassword').value = ""
    let radioBox = document.querySelectorAll(".radio_check");

    for (i = 0; i <= radioBox.length; i++) {
        radioBox[i].checked = false

    }


})


const loginform = document.querySelector("form.login")
const signform = document.querySelector("form.signup")
const signbtn = document.querySelector("label.signup")
const loginbtn = document.querySelector("label.login")
const signupLink = document.querySelector(".signup-link")
const signupText = document.querySelector(".title-text .signup")
const loginText = document.querySelector(".title-text .login")


signbtn.addEventListener("click", () => {
    loginform.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";

})


loginbtn.addEventListener("click", () => {
    loginform.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";

})
signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    signbtn.click()
    return true
})
