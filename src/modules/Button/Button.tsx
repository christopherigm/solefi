import React from 'react';
import 'src/modules/Button/Button.scss';

const Button = (props: any): React.ReactElement => {
  return (
    <div
        className='Button z-depth-4 btn-floating pulse'
        style = {{backgroundColor: `${props.color}`}}
      >
      <a href='https://www.listo.mx/entrar'
      target='_blank'
      rel='noreferrer'>
        <div className='Button__container container row'>
          <div className={`Button__text col s8 m8 l8 ${props.textcolor}`}>{props.text}</div>
          <i className={`material-icons col s4 m4 l4 ${props.textcolor}`}>{props.icon}</i>
        </div>
      </a>
    </div>
  );
};

export default Button;
