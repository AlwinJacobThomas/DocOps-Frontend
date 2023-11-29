import './App.css';
import Landing from './Landing';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import NotFound from './NotFound';

function App() {
  return (
    // <Router>
      <div className="App">
        <div className="container">
          {/* <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes> */}
          <Landing/>
        </div>
      </div>
    // </Router>
  );
}

export default App;
