import React from 'react';
import 'src/modules/sub-title/sub-title.scss';

const SubTitle = (props: any): React.ReactElement => {
  return (
    <div className='SubTitle row'>
      <em className='col m2 l1 hide-on-small-only Title__space'></em>
      <div className='col s12 m8 l10 Title__text'>{props.text}</div>
      <em className='col m2 l1 hide-on-small-only Title__space'></em>
    </div>
  );
};

export default SubTitle;
