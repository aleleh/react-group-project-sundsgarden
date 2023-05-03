import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import Account from './Account';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn/>}/>
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;