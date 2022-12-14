import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./components/pages/Landing";
import Menu from "./components/pages/Menu"

// <Route path="/*" element={<Navigato to="/"/>}/>

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="menu" element={<Menu />}></Route> 
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
