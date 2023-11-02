
const apiKey = 'd22ce59423e943ad83ec911781193e8c'; // Replace with your News API key

// Function to fetch and display news in a dynamic window
function displayNewsInWindow() {
    // Create an app window
    const appWindow = document.createElement('div');
    appWindow.className = 'app-window';
    document.body.appendChild(appWindow);

    // Create a title bar
    const titleBar = document.createElement('div');
    titleBar.className = 'title-bar';
    appWindow.appendChild(titleBar);

    // Create a title
    const titleSpan = document.createElement('span');
    titleSpan.className = 'title';
    titleSpan.textContent = 'Latest News';
    titleBar.appendChild(titleSpan);

    // Create a close button
    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.innerHTML = '<img height="18px" src="https://img.icons8.com/ios-filled/50/FA5252/cancel.png" alt="cancel"/>';
    closeButton.addEventListener('click', () => {
        document.body.removeChild(appWindow);
    });
    titleBar.appendChild(closeButton);

    // Create a content container
    const content = document.createElement('div');
    content.className = 'content';
    appWindow.appendChild(content);

    // Fetch news data from News API
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const newsData = data.articles;

                // Create a news container
                const newsContainer = document.createElement('div');
                newsContainer.className = 'news-container';
                content.appendChild(newsContainer);

                // Display news content in the app window
                newsData.forEach(article => {
                    const newsArticle = document.createElement('div');
                    newsArticle.className = 'news-article';

                    const title = document.createElement('h2');
                    title.textContent = article.title;

                    const description = document.createElement('p');
                    description.textContent = article.description;

                    const image = document.createElement('img');
                    image.className = 'news-image';
                    image.src = article.urlToImage;
                    image.alt = 'News Image';

                    const link = document.createElement('a');
                    link.href = article.url;
                    link.textContent = 'Read more';

                    newsArticle.appendChild(title);
                    newsArticle.appendChild(description);
                    newsArticle.appendChild(image);
                    newsArticle.appendChild(link);

                    newsContainer.appendChild(newsArticle);
                });
            } else {
                console.error('Error fetching news data');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

