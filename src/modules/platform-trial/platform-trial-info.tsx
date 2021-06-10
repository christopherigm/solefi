import React from 'react';

export const PlatformTrialContent = ( props: any ): React.ReactElement => {
  return (
    <div className='PlatformTrial container black-text'>
      <div className='PlatformTrial__title'>{props.title}</div>
      <div className='PlatformTrial__text'>{props.text}</div>
      <a
        href= {props.link}
        target='_blank'
        rel='noreferrer'
        className='PlatformTrial__button blue-text'
      >{props.boton}</a>
    </div>
  );
};
