import './App.css';
import Home from './components/home/Home.jsx'
import SignUpFormOne from './components/forms/SignUpFormOne.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/SignUp" element={<SignUpFormOne/>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
