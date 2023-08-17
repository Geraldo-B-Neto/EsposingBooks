
import React from 'react';

import './Presentation.css';


function Presentation() {
  return (
    <div class="containerPresentation">
    <div class="boxTextPresentation">
      <h1>Terra Negra</h1>
      <p>
      Cristiane Sobral nos desnuda com uma poesia cheia de personalidade, cores, aromas, enredos, densos enredos e escreve como tribo. Conhecedora. Caminha sem solidão porque traz as hordas dos povos em diáspora inebriados e entrelaçados em sua narrativa ética, estética e caudalosa.
      </p>
      <a href="#" target="_blank"> 
        <button type="button">
          <img src="./assets/img/shoppingCart.svg" alt="ShopIcon"></img><aside> Compre na Amazon</aside>
        </button>
      </a>
    </div>
    <a href="#" target="_blank">
      <img class="exampleImg" src="./assets/img/TerraNegraBook.svg" alt="LivroTerraNegra"></img>
    </a>
  </div>
  );
}

export default Presentation;
