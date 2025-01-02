const username = localStorage.getItem("username");
let header = (username === "null" || username === null)? "" : `&nbsp${username} |`
let button = (username === "null" || username === null) ? "login" : "Logout";
// document.getElementById("log").innerText = header;
document.getElementById("log").innerHTML = ` <div style="display: flex; flex-direction:row;"><a style="color: white;"
                                                href="https://toptop.network">TopTop </a>&nbsp| <div id="newLog">${header}</div></div>`;
document.getElementById("loginButton").innerText = button;

  // Add event listener for the change email button
const changeButtonEvent = document.getElementById("newLog");
changeButtonEvent.addEventListener("click", () => {
window.location.href = "./profile.html";
});

function clickLog() {

    if (username !== "null") {
        localStorage.setItem("username", null);
        localStorage.setItem("accesstoken", null);
        localStorage.setItem("pageNumber", 0);
        window.location.href = "./index.html";
    } else {
        window.location.href = "./login.html";
    }
}

function clickSubmit() {

    if (username !== "null") {
        window.location.href = "./submit.html";
    } else {
        window.location.href = "./login.html";
    }
}
