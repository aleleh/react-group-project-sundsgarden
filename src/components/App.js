import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Signup from "./Signup";

import TextInput from "./TextInput";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Signup />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
      </div>
      {/* Transfer to Game.js before merging! */}
      <TextInput/>
    </BrowserRouter>
  );
}

export default App;
