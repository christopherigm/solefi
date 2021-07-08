import React from 'react';

const Button = (props: any): React.ReactElement => {
  return (
    <a
      href='https://www.listo.mx/entrar'
      target='_blanck'
      style={{backgroundColor: props.color}}
      className={`waves-effect btn pulse ${props.textcolor} Button`}>
        <i className={`material-icons right ${props.textcolor} Button__icon`}>{props.icon}</i>
        {props.text}
    </a>
  );
};

export default Button;
