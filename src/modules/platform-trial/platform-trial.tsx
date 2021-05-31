import React from 'react';
import PlatformInfo from 'src/modules/platform-trial/platform-trial-info/platform-trial-info';
import PlatformImage from 'src/modules/platform-trial/platform-trial-image/platform-trial-image';
import 'src/modules/platform-trial/platform-trial.scss';

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
