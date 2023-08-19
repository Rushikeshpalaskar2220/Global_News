// New API key
const apikey = 'c30e81dece1104deb2b07da0f6f66453';
const category = 'general';
const url = 'https://gnews.io/api/v4/top-headlines?category=' + category + '&lang=en&country=us&max=10&apikey=' + apikey;

// Fetch data using the new API
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    articles = data.articles;

    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";  // Clear existing content

    for (i = 0; i < articles.length; i++) {
      const cardClone = newsCardTemplate.content.cloneNode(true);
      fillDataInCard(cardClone, articles[i]);
      cardsContainer.appendChild(cardClone);
    }
  });

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.image;  // Assuming 'image' property is provided by the API
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    newsSource.innerHTML = `${article.source} · ${article.publishedAt}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}
// Dark Mode Toggle Logic
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;
const mainNav = document.getElementById("main-nav");
const backgroundContainer = document.querySelector(".background-container"); // Add this line

modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    mainNav.classList.toggle("dark-mode-nav");
    
    if (body.classList.contains("dark-mode")) {
        backgroundContainer.style.backgroundImage = "url('/assets/Blue\ Modern\ Pitch\ Deck\ Presentation\ .png')";
    } else {
        backgroundContainer.style.backgroundImage = "url('/assets/Blue\ Modern\ Pitch\ Deck\ Presentation\ .png')";
    }
});

