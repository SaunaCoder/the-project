let cookies = localStorage.getItem("cookies") || 0;
const cookieCountElement = document.getElementById("cookie-count");
cookieCountElement.textContent = cookies;
user = document.getElementById("user");
// localStorage.clear();

function addCookie() {
    cookies = parseInt(cookies) + 1;
    localStorage.setItem("cookies", cookies);
    cookieCountElement.textContent = cookies;
    if (cookies == 10) {
        getUserName().then(name => {
            user.textContent = `The user of today: ${name}`;
        });
    }
}

async function getUserName() {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    const userName = data.results[0].name.first + " " + data.results[0].name.last;
    return userName;
}
