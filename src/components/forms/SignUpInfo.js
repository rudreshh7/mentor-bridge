import React from 'react';
import './SignUpInfo.css';

function SignUpInfo() {
  return (

    <div className="formcontainer">
      {/* Form Area */}
    <div className="signupform">
      <div><h3>Greate Choice to help people!</h3>
      <p>Tesll us few details about you & your expertise..</p>
      </div>

      <div className="oneclicklogin">
      <div className="buttongoogle">
        <button>Continue with Google</button>
      </div>
      <div className="or"><p>or</p></div>
      <div className="buttongoogle">
        <button>Continue with Linkedin</button>
      </div>
      </div>

{/* Input Area */}
<div className="inputarea">
  <div className="name">
  <p>Full Name</p>
<input type="text" />
  </div>
  <div className="name">
  <p>Email</p>
<input type="text" />
  </div>
  <div className="name">
  <p>Choose a Password</p>
<input type="text" />
  </div>


    </div>
    </div>
    {/* Image Area */}
    <div className="signupimage">
      <img src="/assets/teamworksign.png" alt="" />
     </div>
    </div>
  );
}

export default SignUpInfo;
