import React from 'react'
import './PersonalInfo.css'

function PersonalInfo() {
  return (
    <div>
      <div className="formcontainer">
      {/* Form Area */}
    <div className="signupform">
      <div><h3>Greate Choice to help people!</h3>
      <p>Tesll us few details about you & your expertise..</p>
      </div>

      <div className="fetch">
      <div className="buttongoogle">
        <button>Fetch it from</button>
      </div>
      <div className="por"><p>or</p></div>
      <div className="buttongoogle">
        <img src="" alt="img" />


        <button>Upload Photo</button>
      </div>
      </div>

{/* Input Area */}
<div className="inputarea">
  <div className="name">
  <p>Job Title</p>
  <div className="sliderinput">
      <input list="data" placeholder="Eg: Product designer , Graphic designer"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>  </div>
  <div className="name">
  <p>Company</p>
  <div className="sliderinput">
      <input list="data" placeholder="Eg: Amazon ,"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>  </div>
  <div className="twoname">
  <p>Experience</p>
  <div className="shortButton">
  <div className="sliderinput">
      <input list="data" placeholder="Y"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>
    <div className="sliderinput">
      <input list="data" placeholder="M"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>  </div>
</div>
<div className="bigName">
<p>Bio</p>
<textarea id="bio" name="bio" rows="4" cols="60">
</textarea>
</div>

  


    </div>
    </div>
    {/* Image Area */}
    <div className="signupimage">
      <img src="/assets/coworking.png" alt="" />
     </div>
    </div>
    </div>
  )
}

export default PersonalInfo