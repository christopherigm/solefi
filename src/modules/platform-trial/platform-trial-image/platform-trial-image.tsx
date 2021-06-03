import React from 'react';

const PlatformImage = (props:any): React.ReactElement => {
  return (
    <div
      style = {{backgroundImage: `url(${props.image})`}}
      className='Platform z-depth-4'>
    </div>
  );
};

export default PlatformImage;
