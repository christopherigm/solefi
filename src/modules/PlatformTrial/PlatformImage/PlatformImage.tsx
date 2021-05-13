import React from 'react';
import 'src/modules/PlatformTrial/PlatformTrial.scss';

const PlatformImage = (props:any): React.ReactElement => {
  return (
    <div
      style = {{backgroundImage: `url(${props.image})`}}
      className='Platform'>
    </div>
  );
};

export default PlatformImage;
