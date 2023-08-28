import React from 'react'
import './OtherInfo.css'

function OtherInfo() {
  return (
    <div className="container">
      
      <div className="formcontainer">
        
      <div className="inputarea">
      <div>
          <h3>Great choice to help people!</h3>
          <p>Tell us few details about you & your expertiese..</p>
        </div>

  <div className="name">
  <p>Primary Expertise</p>
  <div className="sliderinput">
      <input list="data"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>
      </div>
      <div>
        <button className="secondary"> <span>+ </span>Add Secondary Expertise</button>
      </div>

      <div className="name">
  <p>Relevant disciplines</p>
  <div className="sliderinput">
      <input list="data"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>
      </div>
      <div className="name">
  <p>Tools you have experience in</p>
  <div className="sliderinput">
      <input list="data"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>
      </div>
      <div className="name">
  <p>Skills you have experience in</p>
  <div className="sliderinput">
      <input list="data"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>
      </div>
      <div className="name">
  <p>Your Target Mentees</p>
  <div className="sliderinput">
      <input list="data"/>
      <datalist id="data">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
        <option>Four</option>

      </datalist>

      
    </div>
      </div>


      </div>
      {/* Image Container */}
      <div className="imageContainer">
        <img src="/assets/otherinfo.png" alt="" />
      </div>
    </div>
 
  </div>
 )
}

export default OtherInfo