import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Signup from "./Signup";
import Login from "./Login";
import Game from "./Game";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" exact element={<Game />} />
        </Routes>
        <DisplayCode/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
