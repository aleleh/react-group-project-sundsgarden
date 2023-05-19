import {Link} from "react-router-dom";
const Footer = () => {
    return (
      <footer>
                <div className="Footer">
                        <div className="footer" >
                            <Link to="/" className="home1" style={{ textDecoration: 'none', color: "green" }}>Game</Link>
                            <Link to="/LogIn" className="log_in1" style={{ textDecoration: 'none', color: 'blue' }}>Log in</Link>
                            <Link to="/SignIn" className="sign_in1" style={{ textDecoration: 'none', color: 'orange' }}>Sign in</Link>
                        </div>
                    </div>
      </footer>
    );
  };
  
  export default Footer;
  