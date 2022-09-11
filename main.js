/* Moralis init code */
const serverUrl = "https://na9xpnhehmew.usemoralis.com:2053/server";
const appId = "RRA42KNb8t818QjsYE8qbnOgeeIEGeuSNEVLuUZg";
Moralis.start({ serverUrl, appId });

/* Authentication code */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate({
            signingMessage: "Tee2dWhy Tells you to Authenticate",
        })
            .then(function (user) {
                console.log("logged in user:", user);
                document.getElementById("btn-login").innerHTML = (user.get("ethAddress"));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

async function logOut() {
    await Moralis.User.logOut();
    console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;


// Footer's Year
const year = new Date().getFullYear()

document.getElementById("year").innerHTML = year