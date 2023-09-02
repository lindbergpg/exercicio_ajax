document.addEventListener('DOMContentLoaded', function() {
    const xhttp = new XMLHttpRequest();
    const endpoint = "https://api.github.com/users/lindbergpg";

    const profileAvatar = document.getElementById('avatar');
    const nameElement = document.getElementById('name');
    const userNameElement = document.getElementById('username');
    const reposElement = document.getElementById('repos');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const linkElement = document.getElementById('link');

    xhttp.open('GET', endpoint);
    xhttp.send();

    fetch(endpoint)
    .then(function(resp) {
        return resp.json();
    })
    .then(function(json) {
        profileAvatar.src = json.avatar_url;
        nameElement.innerText = json.name;
        userNameElement.innerText = json.login;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
        console.log(json);
    })
})
