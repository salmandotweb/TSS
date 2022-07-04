import React from "react";
import classes from "../../styles/Global/Footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.left}>
				<img src="assets/logo.svg" alt="" />
				<p>0203 876 6726</p>
				<p>enquiries@thesitespace.com</p>
			</div>
			<div className={classes.middle}>
				<h2>Book A Free Consultation</h2>
			</div>
			<div className={classes.right}>
				<h2>Quick link</h2>
				<p>Home</p>
				<p>About Us</p>
				<p>Contact Us</p>
				<p>Blogs</p>
				<p>Terms & Conditions</p>
				<p>Privacy Policy</p>
			</div>
		</footer>
	);
};

export default Footer;
