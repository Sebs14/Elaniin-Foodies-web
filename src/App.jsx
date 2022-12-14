import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Landing from "./components/pages/Landing";
import Menu from "./components/pages/Menu"

// <Route path="/*" element={<Navigato to="/"/>}/>

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Landing />}></Route>
          <Route path="menu" element={<Menu />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
