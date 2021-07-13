import React from 'react';
import 'src/modules/title/title.scss';

const Title = (props: any): React.ReactElement => {
  return (
    <div className='Title row'>
      <em className='col m2 l1 hide-on-small-only Title__space'></em>
      <div
        className='col s12 m8 l10 Title__text'
        style={{color: `${props.color}`, textShadow: props.shadow ? '0px 0px 2px rgba(0, 0, 0, 0.6)' : ''}}>{props.text}</div>
      <em className='col m2 l1 hide-on-small-only Title__space'></em>
    </div>
  );
};

export default Title;
