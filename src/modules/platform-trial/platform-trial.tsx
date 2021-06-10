import React from 'react';
import { PlatformTrialContent } from 'src/modules/platform-trial/platform-trial-info';
import PlatformImage from 'src/modules/platform-trial/platform-trial-image';
import 'src/modules/platform-trial/platform-trial.scss';

const PlatformTrial = (): React.ReactElement => {
  return (
  <div className='PlatformTrial'>
    <PlatformImage
      image='https://cdn.pixabay.com/photo/2021/05/09/19/21/honda-6241835_960_720.jpg'
    />
    <div className='hide-on-large-only PlatformTrialWrapper--mini'>
      <PlatformTrialContent
        title='Plataformas'
        text='Todo lo que necesitas para tu empresa en un sólo lu.'
        boton='15 MINI'
        link='https://listo.mx/registro?cobranding_id=6'
      />
    </div>
    <div className='hide-on-med-and-down PlatformTrialWrapper--desktop'>
      <PlatformTrialContent
        title='Plataformas'
        text='Todo lo que necesitas para tu empresa en un sólo lu.'
        boton='14 DÍAS GRATIS'
        link='https://listo.mx/registro?cobranding_id=6'
      />
    </div>
  </div>
  );
};

export default PlatformTrial;
