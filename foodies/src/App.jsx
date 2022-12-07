import { useState } from "react";
import Navbar from "./components/common/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WhoIsF from "./components/whoisf/WhoIsF";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <Navbar />
      <Hero />
      <WhoIsF />
    </div>
  );
}

export default App;
