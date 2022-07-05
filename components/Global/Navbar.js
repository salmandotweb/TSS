import React, { useState } from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import classes from "../../styles/Global/Navbar.module.css";

const Navbar = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => {
		setShow(!show);
	};
	return (
		<nav className={classes.navbar}>
			<div className={classes.socialLinks}>
				<div className={classes.link}>
					<AiOutlineInstagram />
				</div>
				<div className={classes.link}>
					<FiLinkedin />
				</div>
				<div className={classes.link}>
					<AiOutlineTwitter />
				</div>
				<div className={classes.link}>
					<FaFacebookF />
				</div>
			</div>
			<div className={classes.logo}>
				<img src="assets/logo.svg" alt="logo" />
			</div>
			<div className={classes.right}>
				<p>0203 876 6726</p>
				<div className={classes.menu} onClick={handleShow}>
					<HiOutlineMenuAlt2 />
				</div>
			</div>
			{show && (
				<div className={classes.menuWrapper}>
					<nav className={classes.navbar}>
						<div className={classes.socialLinks}>
							<div className={`${classes.link} ${classes.mobileLink}`}>
								<AiOutlineInstagram />
							</div>
							<div className={`${classes.link} ${classes.mobileLink}`}>
								<FiLinkedin />
							</div>
							<div className={`${classes.link} ${classes.mobileLink}`}>
								<AiOutlineTwitter />
							</div>
							<div className={`${classes.link} ${classes.mobileLink}`}>
								<FaFacebookF />
							</div>
						</div>
						<div className={classes.logo}>
							<img src="assets/footerLogo.svg" alt="logo" />
						</div>
						<div className={classes.right}>
							<p>0203 876 6726</p>
							<div className={classes.menu} onClick={handleShow}>
								<HiOutlineMenuAlt2 />
							</div>
						</div>
					</nav>
					<div className={classes.linksContainer}>
						<div className={classes.links}>
							<h1>Home</h1>
							<h1>Services</h1>
							<h1>Blogs</h1>
							<h1>About Us</h1>
							<h1>Contact Us</h1>
						</div>
						<div className={classes.subLinks}></div>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
