import React from 'react';
import 'src/modules/mosaic/mosaic.scss';

const MosaicItem = (props: any): React.ReactElement => {
  return (
    <div className='container'>
      <div className='Mosaic row'>
        <div className='Mosaic__Information col s12 m4 valign-wrapper'>
          <p className='Mosaic__text'>{props.text1}</p>
        </div>
        <div className='Mosaic__Image col s12 m8'
          style = {{backgroundImage: `url(${props.imagen1})`}}
        ></div>
      </div>
      <div className='Mosaic row'>
        <div className='Mosaic__Image col s12 m8'
          style = {{backgroundImage: `url(${props.imagen2})`}}
        ></div>
        <div className='Mosaic__Information2 col s12 m4 valign-wrapper'>
          <div className='Mosaic__text'>{props.text2}</div>
        </div>
      </div>
      <div className='Mosaic row'>
        <div className='Mosaic__Information col s12 m4 valign-wrapper'>
          <div className='Mosaic__text'>{props.text3}</div>
        </div>
        <div className='Mosaic__Image col s12 m8'
          style = {{backgroundImage: `url(${props.imagen3})`}}
        ></div>
      </div>
    </div>
  );
};

export default MosaicItem;

