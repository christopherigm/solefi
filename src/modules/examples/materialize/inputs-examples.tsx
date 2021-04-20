import { useEffect, useRef } from 'react';
import * as M from 'materialize-css';

const InputExamples = () => {
  const inputRef: any = useRef(null);

  const showWindowProperty = ( ) => {
    const w: any = window;
    M.toast({html: `${inputRef.current.value}: ${w.cordova[inputRef.current.value]}`});
    M.toast({html: `${inputRef.current.value}: ${w.cordova.device[inputRef.current.value]}`});
  };

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <div className='input-field col s6'>
        <input id='input_txt' type='text' className='validate' ref={inputRef}/>
        <label htmlFor='input_txt'>Property</label>
      </div>

      <a className='waves-effect waves-light btn' onClick={showWindowProperty}>
        <i className='material-icons left'>cloud</i>
        <span>Check</span>
      </a>

      <br /><br /><br />
      <div className='switch'>
        <label>
          Off
          <input type='checkbox' />
          <span className='lever'></span>
          On
        </label>
      </div>

      <br /><br /><br />
      <div className='input-field col s12'>
        <select>
          <option value='' disabled defaultValue=''>Choose your option</option>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>

      <div className="fixed-action-btn">
        <a href='/static/app.apk' target='_blank'
          className="btn-floating btn-large waves-effect waves-light green darken-1">
          <i className="material-icons">adb</i>
        </a>
      </div>
    </>
  );
};

export default InputExamples;
