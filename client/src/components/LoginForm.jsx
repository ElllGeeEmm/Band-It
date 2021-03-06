import React from 'react';

function LoginForm(props){
  const {
    email,
    password,
    handleChange,
    handleLogin,
    } = props;



  return(
    <div className='login-form-container'>
      <form onSubmit={handleLogin}>

        <input
        onChange={handleChange}
        type='text'
        placeholder='Email'
        name='email'
        value={email} />

        <input
        onChange={handleChange}
        minLength={3}
        type='password'
        placeholder='Password'
        name='password'
        value={password} />

        <input type='submit' />

        </form>
      </div>
)}

export default LoginForm;
