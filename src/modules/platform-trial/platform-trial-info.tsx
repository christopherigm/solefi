import React from 'react';
import Title from 'src/modules/title/title';

export const PlatformTrialContent = ( props: any ): React.ReactElement => {
  return (
    <div className='container PlatformTrial__info'>
      <Title
        text={props.title}
        color='white'
        fullWidth={true}
        align='left'
        shadow={true}/>
      <div className='PlatformTrial__text'>
        {props.text}
      </div>
      <a
        href= {props.link}
        target='_blank'
        rel='noreferrer'
        className='waves-effect waves-light btn white blue-text PlatformTrial__button'
      >{props.boton}</a>
    </div>
  );
};
