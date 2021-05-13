import React from 'react';
import 'src/modules/how-it-works-item/SquareImg.scss';
import { useSelector } from 'react-redux';

const SquareImg = (props: any): React.ReactElement => {
  const platformOptions = useSelector((state: any) => state.platformOptions);

  return (
    <div className='col s12 m6 l4'>
      <div className='SquareImg'>
        <div className='SquareImg__img'
          style = {{backgroundImage: `url(${props.image})`}}>
        </div>
        <div
          className='SquareImg__button'
          style={{
            backgroundColor: platformOptions.darkMode ? 'gray' : '#f44336'
          }}>
          <a
            href={props.link}
            className='SquareImg__number'
            style = {{color: 'white'}}
            >{props.number}</a>
        </div>
        <div className='SquareImg__title'>{props.title}</div>
        <div className='SquareImg__text'>{props.text}</div>
      </div>
    </div>
  );
};

export default SquareImg;
