import {BrowserRouter, Route, Routes, Link, NavLink} from "react-router-dom"
import './App.css';
import VendingMachine from "./VendingMachine";
import Twix from "./Twix";
import KitKat from "./KitKat";
import Starburst from "./Starburst";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>}/>
          <Route path="/twix" element={<Twix/>}/>
          <Route path="/kitkat" element={<KitKat/>}/>
          <Route path="/starburst" element={<Starburst/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
