
import { Link } from 'react-router-dom';
import 'style.css';


function Header() {
    return (
		<div className="header">
			<Link to="/">
				<img src={logo1} alt="logo" className="logo" />
			</Link>
			<nav className="navbar">
				<Link to="/">Accueil</Link>
				<Link to="/About">À propos</Link>
			</nav>
		</div>
	);
}

export default Header();