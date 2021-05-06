import React from 'react';
import 'src/modules/square/square.scss';

const Square = (props: any): React.ReactElement => {
  return (
    <div className='col s12 m6 l4'>
      <div className='Square'>
        <i className={`material-icons ${props.color} Square__icon`}>{props.icon}</i>
        <div className='Square__title'>{props.title}</div>
        <div
          className='Square__text'
          dangerouslySetInnerHTML={{__html: props.text}}></div>
      </div>
    </div>
  );
};

export default Square;
