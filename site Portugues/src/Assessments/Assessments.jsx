import React from 'react';

import './Assessments.css';


function Assessments() {
  return (
    <div class="Assessments">
    <h1 id="h1Assessments">Avaliações</h1>
    <div id="textAssessments">
      Sobre o livro, eu gostei,ele tem algumas expressões angolanas mas seus
      significados estão no fim do livro, no glossário o que ajuda a
      compreender melhor a história, é uma leitura rápida e com um pouco de
      suspense.
    </div>
    <div class="stars">
      <img src="./img/star-fill.svg" alt="" />
      <img src="./img/star-fill.svg" alt="" />
      <img src="./img/star-fill.svg" alt="" />
      <img src="./img/star-fill.svg" alt="" />
      <img src="./img/star-fill.svg" alt="" class="imgStar" />
    </div>
    <div class="btns">
      <button id="3" onclick="comentario()"></button>
      <button id="4" onclick="comentario()"></button>
      <button id="5" onclick="comentario()"></button>
    </div>
  </div>
  );
}

export default Assessments;