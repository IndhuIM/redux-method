import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from './Create'
import Update from "./Update";



function App() {


  return (

 
    
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/Create"  element={<Create/>}/>
        <Route path="/edit/:id"  element={<Update/>}/>


      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
