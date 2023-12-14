
import './static/css/App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import PatientDashboard from './pages/patient/PatientDashboard';

function App() {
  return (
    
    <div className="App">
    <Router>
        <>
          <Routes>
            <Route path='/' element={<Landing/>} />
            <Route path='/patient' element={<PatientDashboard/>} />
            <Route path='*' element={<NotFound />} />
      
          </Routes>

        </>
    </Router>
    </div>

  );
}

export default App;
