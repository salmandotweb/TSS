import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import classes from "../../styles/Global/Navbar.module.css";

const Navbar = () => {
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
				<div className={classes.menu}>
					<HiOutlineMenuAlt2 />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
