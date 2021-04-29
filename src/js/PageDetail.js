import { key, cleanPageContent } from './utils';

const PageDetail = (argument) => {


  const foreachPlatform = (array) => {
    let result = ""
    array.forEach(element => {
      result +=  `<a class="link-intern" href="">${element.platform.name}</a>, `;
    });
    return result.slice(0, -2)
  }

  const foreach = (array) => {
    let result = ""
    array.forEach(element => {
      result +=  `<a class="link-intern" href="">${element.name}</a>, `;
    });
    return result.slice(0, -2)
  }


  
  const fetchDetail = () => {
        
    fetch(`https://api.rawg.io/api/games/${argument}?key=${key}`)
    .then((response) => response.json())
    .then((response) => {
      
      //console.log(response) // à enlever
      
      imgTop(response)
      infos(response)

      
      if (response.stores.length > 0) {
        buy(response)
      }

      
      fetchTrailer()
      fetchSreenshot()

    })
  }



  const buy = (game) => {
    pageContent.innerHTML += `
      <div class="space-40 section-buy">
        <h2>BUY</h2>
      </div>
    `;
    game.stores.forEach(element => {
      document.querySelector('div.section-buy').innerHTML +=  `<p><a class="link-extern" href="https://${element.store.domain}">${element.store.name}</a></p>`;
    });
  }


  
  const imgTop = (game) => {
    document.querySelector('main > header').innerHTML = `
      <div class="section-jumbotron">
        <img src="${game.background_image}" alt="image-game"></img>
        <button class="btn btn-img">
          <a class="btn" href="${game.website}">Check Website</a>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
        </button>
      </div>
      `;
  }


  
  const infos = (game) => {

    const titleAndRating = () => {
      pageContent.innerHTML += `
        <div id="title-rating" class="d-flex item-between">
          <h1>${game.name_original || game.name}</h1>
        </div>
      `;

      if (game.rating_top !== 0 && game.ratings_count !== 0) {
        document.getElementById('title-rating').innerHTML += `<h2>${game.rating}/${game.rating_top} - ${game.ratings_count} votes</h2>`;
      }
    }
    titleAndRating()

    const description = () => {
      if (game.description !== "" && game.description !== null) {
        pageContent.innerHTML += `${game.description}`;
      }
    }
    description()

    const dateDeveloperPlatformPuplisher = () => {
      pageContent.innerHTML += `<div id="date-developer-platform-puplisher" class="d-flex item-between"></div>`;
      if (game.released !== "" && game.released !== null) {
        document.getElementById('date-developer-platform-puplisher').innerHTML += `
          <div class="col-50">
            <h3>Release Date</h3>
            <p>${game.released}</p>
          </div>
        `;
      }
      if (game.developers.length > 0) {
        document.getElementById('date-developer-platform-puplisher').innerHTML += `
          <div class="col-50">
            <h3>Developer</h3>
            <p>${foreach(game.developers)}</p>
          </div>
        `;
      }
      if (game.platforms.length > 0) {
        document.getElementById('date-developer-platform-puplisher').innerHTML += `
          <div class="col-50">
            <h3>Platforms</h3>
            <p>${foreachPlatform(game.platforms)}</p>
          </div>
        `;
      }
      if (game.publishers.length > 0) {
        document.getElementById('date-developer-platform-puplisher').innerHTML += `
          <div class="col-50">
            <h3>Publishers</h3>
            <p>${foreach(game.publishers)}</p>
          </div>
        `;
      }
    }
    dateDeveloperPlatformPuplisher()

    const genreAndTag = () => {
      pageContent.innerHTML += `<div id="genre-tag" class="d-flex item-between"></div>`;
      if (game.genres.length > 0) {
        document.getElementById('genre-tag').innerHTML += `
          <div class="col-50">
            <h3>Genre</h3>
            <p>${foreach(game.genres)}</p>
          </div>
        `;
      }
      if (game.tags.length > 0) {
        document.getElementById('genre-tag').innerHTML += `
          <div class="col-50">
            <h3>Tags</h3>
            <p>${foreach(game.tags)}</p>
          </div>
        `;
      }
    }
    genreAndTag()
  }



  









  const fetchTrailer = () => {
    
    fetch(`https://api.rawg.io/api/games/${argument}/movies?key=${key}`)
    .then((response) => response.json())
    .then((response) => {

      if(response.results.length > 0) {
        pageContent.innerHTML += `
        <div class="space-40 section-trailer">
          <h2>TRAILER</h2>
          <video controls width="100%">
            <source src="${response.results[0].data.max}" type="video/mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        `;
      }
    })
  }



  const fetchSreenshot = () => {
    
    fetch(`https://api.rawg.io/api/games/${argument}/screenshots?key=${key}`)
    .then((response) => response.json())
    .then((response) => {
      
      const showImage = (array) => {
        for (let i = 0; i < 4; i++) {
          document.getElementById('img-screenshot').innerHTML +=  `
          <div class="imgDetail">
            <img src="${array[i].image}" alt=""></img>
          </div>`;
        }
      }
      
      if(response.results.length > 0) {
        pageContent.innerHTML += `
          <div class="space-0 section-screenshot">
            <h2>SCREENSHOTS</h2>
            <div id="img-screenshot" class="d-flex item-between flex-wrap"></div>
          </div>
        `;
        showImage(response.results)
      }
    })
  }



  const render = () => {
    cleanPageContent()
    fetchDetail()
  }

  render()
  
};

export {PageDetail};