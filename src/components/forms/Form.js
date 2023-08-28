import React, { useState } from 'react'; // Import useState from 'react'
import OtherInfo from './OtherInfo';
import PersonalInfo from './PersonalInfo';
import SignUpInfo from './SignUpInfo';
import './Form.css';

function Form() {
  const [page, setPage] = useState(0);
  const FormTitles = ["Sign Up", "Personal Info", "Other"];

  function prevPage() {
    setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);
  }

  function PageDisplay() {
    if (page === 0) {
      return <SignUpInfo />;
    } else if (page === 1) {
      return <PersonalInfo />;
    } else if (page === 2) {
      return <OtherInfo />;
    }
  }

  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form-container">
        <div className="header">
        </div>
        <div className="body">
          <PageDisplay />
        </div>
        <div className="footer">
          <button className="footerprev" disabled={page === 0} onClick={prevPage}>
            Prev
          </button>
          <button className="footernext" disabled={page === FormTitles.length - 1} onClick={nextPage}>
            Next
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default Form;
