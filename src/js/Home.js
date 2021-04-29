import { key, cleanPageContent, showGames } from './utils';

const Home = () => {

  const welcome = () => {
    pageContent.innerHTML += `
      <h1>Welcome,</h1>
      <p>The Hyper Progame is the world's premier event for computer and video games and relates products. At The Hyper Progame, the video game industry's top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brighest, and most innovative entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and nerver-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, adns social influencers providing unprecedented exposure.</p>
    `;
  }

  
  const fetchHome = () => {

    const date = '2021-05-01,2025-05-01';
        
    fetch(`https://api.rawg.io/api/games?key=${key}&dates=${date}`)
    .then((response) => response.json())
    .then((response) => {

      pageContent.innerHTML += `<div class="space-20"><button class="btn">Platform : any </button></div>`
                  
      showGames(response.results)

    })
  }


  const render = () => {
    cleanPageContent()
    welcome()
    fetchHome()
  }

  render()

};

export { Home };