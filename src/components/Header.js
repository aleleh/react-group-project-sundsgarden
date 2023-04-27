import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link className="links" to="/">
                Home</Link>
        </div>
    );
};

export default Header;