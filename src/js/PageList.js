import { key, cleanPageContent, showGames } from './utils';


const PageList = (argument) => {

  const fetchList = () => {

    fetch(`https://api.rawg.io/api/games?key=${key}&search=${argument}`)
    .then((response) => response.json())
    .then((response) => {

      showGames(response.results)

    });
  }



  const render = () => {
    cleanPageContent()
    fetchList()
  }

  render()

};

export {PageList};