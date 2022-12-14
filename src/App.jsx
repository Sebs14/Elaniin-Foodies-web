import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from "./components/pages/Landing";
import Menu from "./components/pages/Menu"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
