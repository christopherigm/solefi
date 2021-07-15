import React from 'react';
import { useSelector } from 'react-redux';
import { PlatformTrialContent } from 'src/modules/platform-trial/platform-trial-info';
import PlatformImage from 'src/modules/platform-trial/platform-trial-image';
import 'src/modules/platform-trial/platform-trial.scss';

const link = 'https://listo.mx/registro?cobranding_id=6';
const imageFile = '/img-platform.jpg';

const PlatformTrial = (): React.ReactElement => {
  const system = useSelector((state: any) => state.system);
  const prefix = system.platform.prefix;
  const imageURL = `${prefix}${imageFile}`;

  return (
  <div className='PlatformTrial'>
    <PlatformImage image={imageURL} />
    <div className='hide-on-large-only PlatformTrial__background--mini white-text'>
      <PlatformTrialContent
        title='Plataforma'
        text='Todo lo que necesitas para tu empresa en un sólo lugar.'
        boton='14 DÍAS GRATIS'
        link={link} />
    </div>
    <div className='hide-on-med-and-down PlatformTrial__background--desktop'></div>
    <div className='hide-on-med-and-down white-text valign-wrapper PlatformTrial__desktop-info'>
      <PlatformTrialContent
        title='Plataforma'
        text='Todo lo que necesitas para tu empresa en un sólo lugar.'
        boton='14 DÍAS GRATIS'
        link={link} />
    </div>
  </div>
  );
};

export default PlatformTrial;
