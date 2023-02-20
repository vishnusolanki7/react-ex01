// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestComponent from './Components/TestComponent';
import First from './Components/First';
import SignupForm from './Components/Form';
import NavExample from './Components/Nav';
// import IncrementDecrement from './Components/incVsDec';
// import ValidationSchemaExample from './Components/FormExm';

function App() {
  return (
   <>
      <NavExample />
      <SignupForm />
      <TestComponent name='vishnu' Component={First} />
      {/* ValidationSchemaExample */}
      {/* <IncrementDecrement /> */}

   </>
  );
}

export default App;
