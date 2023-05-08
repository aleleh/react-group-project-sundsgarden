import {Link} from "react-router-dom";
const Header = () => {
    return (
      <header>
                <nav>
                <div className="navbar">
                        <div>
                            <Link to="/" className="logo">Typing Game</Link>
                        </div>
                        <div>
                        <Link to="/" className="home">Home</Link>
                            <Link to="/SignIn" className="sign_in">Sign in</Link>
                            <Link to="/LogIn" className="log_in">Log in</Link>
                            <Link to="/Account" className="Account">Account</Link>
                        </div>
                    </div>
                </nav>
            </header>
    );
  };
  
  export default Header;
  