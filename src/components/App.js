import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Signup from "./Signup";
import Login from "./Login";
import DisplayCode from "./DisplayCode";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Signup />
        <Login />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <DisplayCode/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
