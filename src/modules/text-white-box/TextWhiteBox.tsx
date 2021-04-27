import React from 'react';
import 'src/modules/text-white-box/TextWhiteBox.scss';

const TextBox = (props: any): React.ReactElement => {
  return (
    <div className='Box row'>
      <em className='col s0 m1 l0 hid-on-small-only Box__space'></em>
        <div className='col s12 m10 l12 Box__text'>{props.text}</div>
      <em className='col s0 m1 l0 hid-on-small-only Box__space'></em>
    </div>

  );
};

export default TextBox;
