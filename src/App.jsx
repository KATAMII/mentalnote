import './App.css'
import Header from './components/header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Symptomchecker from './pages/symptomchecker/symptomchecker.jsx';
import MoodTracker from './pages/moodTracker/moodTracker.jsx';
import Chatbot from './pages/chatbot/chatbot.jsx';
import Therapist from './pages/Therapist/therapist.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symptom-checker" element={<Symptomchecker />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/therapist" element={<Therapist />} />
      </Routes>
    </Router>
  );
}

export default App
