import { useState } from "react";
import Navbar from "./components/common/navbar/Navbar";
import Hero from "./components/hero/Hero";
import WhoIsF from "./components/whoisf/WhoIsF";
import Addresses from "./components/addresses/Addresses";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <WhoIsF />
      <Addresses />
    </div>
  );
}

export default App;
