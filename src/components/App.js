import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Game from "./Game";
import ProtectedRoutes from "./ProtectedRoutes";
import Modal from "./Modal";

import Button from "./Temporary";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/Game" element={<Game />} />
          </Route>
          <Route path="/Modal" element={<Modal />} />
        </Routes>
        <Button/>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
