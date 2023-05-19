import {Link} from "react-router-dom";
const Footer = () => {
    return (
      <footer>
                <div className="Footer">
                        <div className="footer" >
                            <Link to="/" className="home1" style={{ textDecoration: 'none' }}>Game</Link>
                            <Link to="/LogIn" className="log_in1" style={{ textDecoration: 'none' }}>Log in</Link>
                            <Link to="/SignIn" className="sign_in1" style={{ textDecoration: 'none' }}>Sign in</Link>
                        </div>
                    </div>
      </footer>
    );
  };
  
  export default Footer;
  