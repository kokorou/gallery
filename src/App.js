import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TrackPage from './pages/Track';
import VlogPage from './pages/Vlog';
import AboutPage from './pages/About';
import TimelinePage from './pages/Timeline';
import Gallery from './pages/Gallery';
import MainNavbar from './components/MainNavBar';
import Footer from './components/Footer'
import CollectionPage from './pages/Collection';
import Copyright from './components/copyright';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <MainNavbar/>
        <Routes>
          <Route path="/" element={<Gallery />} exact/>
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/vlog" element={<VlogPage />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
      <Footer/>
      <Copyright />
    </Router>
  );
}

export default App;
