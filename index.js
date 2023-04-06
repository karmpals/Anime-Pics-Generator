const btnEl = document.getElementById("btn");
const animeImgEl = document.querySelector(".anime-img");
const animeContainerEl = document.getElementById("anime-container");
const animeNameEl = document.querySelector(".anime-name");


btnEl.addEventListener("click", async function () {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        animeNameEl.innerText = "Updating..."
        animeImgEl.src = "spinner.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Gat Anime";
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Gat Anime";
        animeNameEl.innerText = "An error happened, please try again";
    }
});