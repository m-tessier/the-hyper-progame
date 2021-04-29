const key = 'f33d3f2b30334242bc095b695e504fec';

const cleanPageContent = () => {
  document.querySelector('main > header').innerHTML = ``;
  pageContent.innerHTML = ``;
}


const showGames = (array) => {
  let i = 0;
  let count = 9;

  pageContent.innerHTML += `<div class="d-flex item-between flex-wrap"></div>`;

  const pagination = (array, i, count) => {   
    for (i; i < count; i++) {
      document.querySelector("div.flex-wrap").innerHTML += `
        <div class="cardGame col-30 space-20">
          <a href="#pagedetail/${array[i].id}">
            <img class="img-hover" src="${array[i].background_image}" alt=""></img>
          </a>
          <h2 class="text-white">${array[i].name}</h2>
          <div id="icon-${i}" class="d-flex">
          </div>
          
        </div>
      `;

      if (array[i].platforms !== null) {        
        array[i].parent_platforms.forEach(element => {
          if (element.platform.name === "PlayStation") {
            document.getElementById(`icon-${i}`).innerHTML += `<a class="link-intern" href=""><img class="icon-platform flex-wrap" src="./src/images/ps4.svg" alt=""></img></a>`;
          }
          if (element.platform.name === "PC") {
            document.getElementById(`icon-${i}`).innerHTML += `<a class="link-intern" href=""><img class="icon-platform flex-wrap" src="./src/images/windows.svg" alt=""></img></a>`;
          }
          if (element.platform.name === "Xbox") {
            document.getElementById(`icon-${i}`).innerHTML += `<a class="link-intern" href=""><img class="icon-platform flex-wrap" src="./src/images/xbox.svg" alt=""></img></a>`;
          }
          if (element.platform.name === "Nintendo") {
            document.getElementById(`icon-${i}`).innerHTML += `<a class="link-intern" href=""><img class="icon-platform flex-wrap" src="./src/images/switch.svg" alt=""></img></a>`;
          }
          if (element.platform.name === "Linux") {
            document.getElementById(`icon-${i}`).innerHTML += `<a class="link-intern" href=""><img class="icon-platform flex-wrap" src="./src/images/linux.svg" alt=""></img></a>`;
          }
          if (element.platform.name === "Android") {
            document.getElementById(`icon-${i}`).innerHTML += `<a class="link-intern" href=""><img class="icon-platform flex-wrap" src="./src/images/mobile.svg" alt=""></img></a>`;
          }
        });
      }

    }
  }
  pagination(array, i, count)

  pageContent.innerHTML += `
    <div class="item-center">
      <button id="show-more" class="btn">Show more</button>
    </div>
  `;

  document.getElementById('show-more').addEventListener('click', () => {
    if (count >= 18) {
      pagination(array, i+=9, count+=2)
      if (count >= 20) {
        document.querySelector('div.item-center').innerHTML = ``;
      }
    } else {
      pagination(array, i+=9, count+=9)
    }
  })  
  
}




export {key, cleanPageContent, showGames};