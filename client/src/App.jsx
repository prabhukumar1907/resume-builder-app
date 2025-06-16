import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ATSChecker from './components/ATSChecker';
import AuthForm from './components/AuthForm';
import Home from './components/Home';
import ResumeBuilder from './components/ResumeBuilder';

function App() {
  return (
    <Router>
     
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ats-checker" element={<ATSChecker />} />
          <Route path="/builder" element={<ResumeBuilder/>} />
          <Route path="/login" element={<AuthForm type="login" />} />
          <Route path="/signup" element={<AuthForm type="signup" />} />
        </Routes>
    </Router>
  );
}

export default App;
