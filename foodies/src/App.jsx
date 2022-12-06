import { useState } from "react";
import Navbar from "./components/common/navbar/Navbar";
import Hero from "./components/hero/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="  custom-img bg-no-repeat bg-right-top h-screen md:bg-auto  bg-contain  ">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
