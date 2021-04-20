
const InputExamples = () => {

  return (
    <>
      <br /><br /><br />
      <a className='waves-effect waves-light btn'>
        <i className='material-icons left'>cloud</i>
        <span>button</span>
      </a>

      <br /><br /><br />
      <div className='input-field col s6'>
        <input id='first_name' type='text' className='validate' width='200px'/>
        <label htmlFor='first_name'>First Name</label>
      </div>

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
          <option value='' disabled selected>Choose your option</option>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>
    </>
  );
};

export default InputExamples;
