import React from 'react';
import PlatformInfo from 'src/modules/PlatformTrial/PlatformInfo/PlatformInfo';
import PlatformImage from 'src/modules/PlatformTrial/PlatformImage/PlatformImage';
import 'src/modules/PlatformTrial/PlatformTrial.scss';

const PlatformTrial = (): React.ReactElement => {
  return (
  <div>
      <PlatformInfo
        title = 'Plataforma'
        text = 'Todo lo que necesitas para tu empresa en un sólo lugar.'
        list1 = 'Todas tus facturas en un solo lugar.'
        list2 = 'Genera Reportes personalizados.'
        list3 = 'Impuestos controlados.'
        boton = '14 DÍAS GRATIS'
        link = 'https://listo.mx/registro?cobranding_id=6'
      />
      <PlatformImage
        image= 'https://cdn.pixabay.com/photo/2021/05/09/19/21/honda-6241835_960_720.jpg'
      />
  </div>
  );
};

export default PlatformTrial;
