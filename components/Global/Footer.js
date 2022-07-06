import React from "react";
import {
	AiOutlineInstagram,
	AiOutlinePhone,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoChevronForwardCircle } from "react-icons/io5";
import classes from "../../styles/Global/Footer.module.css";

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<div className={classes.left}>
					<img src="/assets/footerLogo.svg" alt="" />
					<p className={classes.number}>0203 876 6726</p>
					<p>enquiries@thesitespace.com</p>
					<div className={classes.socialIcons}>
						<AiOutlineInstagram />
						<FiLinkedin />
						<AiOutlineTwitter />
						<FaFacebookF />
					</div>
					<h3>Book A Call Back</h3>
					<p className={classes.about}>
						HI, I am Kashi Shabbir and I would love to discuss your project.
					</p>
					<p className={classes.call}>
						<AiOutlinePhone />
						{`Let's`} Start
					</p>
				</div>
				<div className={classes.middle}>
					<h2>Book A Free Consultation</h2>
					<form className={classes.form}>
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Email" />
						<input type="text" placeholder="Contact Number" />
						<input type="text" placeholder="Business Name" />
						<p className={classes.submitBtn}>
							Submit <IoChevronForwardCircle />
						</p>
					</form>
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
			</div>
			<p className={classes.copyright}>
				© 2022 Web Buds Ltd. Registered In England And Wales Under Company
				Number: 11607956.
			</p>
		</footer>
	);
};

export default Footer;
