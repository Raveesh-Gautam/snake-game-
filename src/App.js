// import logo from './logo.svg';
import './App.css';

import Snake from './component/Snake';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div >
    <Router>
      <Routes>
     <Route path='/'element={<Snake/>}/> 
     </Routes>
     </Router>
       {/* <Snake/>  */}
    </div>
  );
}

export default App;
/* <Route path='/Navbar'element={<Navbar />}/> */
