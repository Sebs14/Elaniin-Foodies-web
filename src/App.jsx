import {BrowserRouter} from "react-router-dom";
import AppRouter from './components/appRouter/AppRouter';

// <Route path="/*" element={<Navigato to="/"/>}/>

function App() {

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
