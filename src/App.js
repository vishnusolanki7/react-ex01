import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestForm from './Components/TestForm';
import SignupForm from './Components/SignupForm';

function App() {
  return (
   <React.Fragment>
   <Router>
      <Routes>
          <Route exact path='/test' element={<TestForm />} />
      </Routes>
      </Router>
   </React.Fragment>
  );
}

export default App;
