import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Wareef  Real Estate</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/search" style={{ 
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px' 
                }}>Search</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;