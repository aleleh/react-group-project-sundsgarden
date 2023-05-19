import {Link} from "react-router-dom";
const Header = () => {
    return (
      <header>
                <nav>
                <div className="navbar">
                        <div>
                            <Link to="/" className="logo">Home</Link>
                            <Link to="/" className="home">Game</Link>
                        </div>
                        <div>
                        <Link to="/LogIn" className="log_in" style={{ textDecoration: "underline" }}>Log in</Link>
                         <Link to="/SignIn" className="sign_in" style={{ textDecoration: "underline" }}>Sign in</Link>

                        </div>
                    </div>
                </nav>
            </header>
    );
  };
  
  export default Header;
  