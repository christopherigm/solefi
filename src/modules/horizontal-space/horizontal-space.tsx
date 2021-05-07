import React from 'react';
import 'src/modules/horizontal-space/horizontal-space.scss';

const HorizontalSpace = (props: any): React.ReactElement => {
  return (
    <div
      className={`HorizontalSpace HorizontalSpace--${props.size}`}
    ></div>
  );
};

export default HorizontalSpace;
