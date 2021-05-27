import React from 'react';
import 'src/modules/blocksquare/BlockSquare.scss';
import HorizontalSpace from 'src/modules/horizontal-space/horizontal-space';

const BlockSquare = (props: any): React.ReactElement => {
  return (
    <div className='container'>
      <HorizontalSpace size='large'/>
      <div className='Block row'>
        <div className='Block__Information col s12 m4'>
          <div className='Block__text'>{props.text1}</div>
        </div>
        <div className='Block__Image col s12 m8'
          style = {{backgroundImage: `url(${props.imagen1})`}}
        ></div>
      </div>
      <div className='Block row'>
        <div className='Block__Image col s12 m8'
          style = {{backgroundImage: `url(${props.imagen2})`}}
        ></div>
        <div className='Block__Information2 col s12 m4'>
          <div className='Block__text'>{props.text2}</div>
        </div>
      </div>
      <div className='Block row'>
        <div className='Block__Information col s12 m4'>
          <div className='Block__text'>{props.text3}</div>
        </div>
        <div className='Block__Image col s12 m8'
          style = {{backgroundImage: `url(${props.imagen3})`}}
        ></div>
      </div>
    </div>
  );
};

export default BlockSquare;

