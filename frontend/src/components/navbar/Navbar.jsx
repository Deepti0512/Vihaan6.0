import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const logout = () => {
		localStorage.removeItem("token");
		window.location = '/';
	}

	return (
		<header>
			<h3>Your Tour Companion</h3>
			<nav ref={navRef}>
				<a href="/#">Home</a>
				<a href="/#">Places</a>
				<a href="/#">Blog</a>
				<a href="/#">About us </a>
				<a href="/#">Contact us </a>
				<button className="logout" onClick={logout}> Logout</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;