import React from 'react';
import BlockSquare from 'src/modules/blocksquare/BlockSquare';

const SolefiBlockSquare = ():React.ReactElement => {
  return (
    <div>
      <BlockSquare
        text1 = 'El mejor equipo multidiciplinario en Solefi'
        imagen1 = 'https://cdn.pixabay.com/photo/2021/04/13/06/59/woman-6174830_960_720.jpg'
        text2 = 'Más de 20 proyectos exitosos, más de 10 clientes satisfechos'
        imagen2 = 'https://cdn.pixabay.com/photo/2021/03/29/12/16/stairs-6133971_960_720.jpg'
        text3 = 'Tu puedes hacer esto, sin preocuparte por tus finanzas, basta con dar un click en nuestra Plataforma.'
        imagen3 = 'https://cdn.pixabay.com/photo/2019/04/26/15/33/child-4157865_960_720.jpg'
      />
    </div>
  );
};

export default SolefiBlockSquare;
