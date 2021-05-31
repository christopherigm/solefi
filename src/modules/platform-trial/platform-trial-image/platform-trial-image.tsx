import React from 'react';

const PlatformImage = (props:any): React.ReactElement => {
  return (
    <div
      style = {{backgroundImage: `url(${props.image})`}}
      className='Platform'>
    </div>
  );
};

export default PlatformImage;
