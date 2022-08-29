import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Got Curls?</h1>
      <p>Welcome to Curl Power, a community centered around those with curly hair, looking to either share advice or gain knowledge from others with similar hair types. This is where you will learn to take care of your hair and yourself and learn to fully embrace the beauty you were born with.</p>
      <h4>Click the button below to login!</h4>
      <button type="button" className="btn btn-info btn-lg copy-btn" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
