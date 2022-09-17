/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        maxWidth: '500px',
        margin: '0 auto',
      }}
    >
      <img width={250} style={{ margin: '0 auto' }} src="/./images/CurlPowerLogo.png" alt="Hair Type Chart" />
      <p>Welcome to <b>Curl Power</b>, a community dedicated to those with naturally curly hair, looking to either share or seek advice on various hair types. Share routines and products that have worked for you, because if you have curly hair, you know it&#39;s difficult out here and we could all use the help. If you are not sure where to begin or want to spice up your curls, then you&#39;ve come to the right place! Learn to love your curls here.</p>
      <h3>Join <b>Curl Power</b> by clicking the button below!</h3>
      <button type="button" className="sign-in btn btn-lg copy-btn" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
