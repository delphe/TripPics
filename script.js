document.addEventListener('DOMContentLoaded', (event) => {
    toggleAlbums(); // Hides private albums by default
});

function toggleAlbums() {
    var button = document.getElementById("toggleButton");
    var albumList = document.getElementById("albumList");
    var publicAlbums = albumList.getElementsByClassName("public");
    var privateAlbums = albumList.getElementsByClassName("private");

    if (button.innerText === "Show Public Albums") {
        for (var i = 0; i < privateAlbums.length; i++) {
            privateAlbums[i].style.display = "none";
        }
        for (var j = 0; j < publicAlbums.length; j++) {
            publicAlbums[j].style.display = "list-item";
        }
        button.innerText = "Show Private Albums";
    } else {
        for (var i = 0; i < privateAlbums.length; i++) {
            privateAlbums[i].style.display = "list-item";
        }
        for (var j = 0; j < publicAlbums.length; j++) {
            publicAlbums[j].style.display = "none";
        }
        button.innerText = "Show Public Albums";
    }
}
