
import './App.css';
import {
  BrowserRouter as 
  
  Route,
  
  BrowserRouter,
  Routes
} from "react-router-dom";
import Women from './Women';

import Men from './Men';
import Prodcut from './Product';


function App() {
  return (
    
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Women/>}/>
        <Route path='men' element={<Men/>}/>
        <Route path='product' element={<Prodcut/>}/>

        
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
