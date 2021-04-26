import React from 'react';
import 'src/modules/text-white-box/TextWhiteBox.scss';

const TextBox = (props: any): React.ReactElement => {
  return (
    <div className='Box row'>
      <em className='col s1 m3 l3 hid-on-small-only Box__space'></em>
        <div className='col s12 m6 l6 Box__text'>{props.text}</div>
      <em className='col s1 m3 l3 hid-on-small-only Box__space'></em>
    </div>

  );
};

export default TextBox;
