import React, { useState } from "react";
import {
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineLine,
} from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import classes from "../../styles/Global/Navbar.module.css";
import Link from "next/link";

const SubLinks = ({ link1, link2, link3, link4, link5, link6 }) => (
	<div className={classes.subLinks}>
		<Link href="/services/webDesign">
			<p>{link1}</p>
		</Link>
		<p>{link2}</p>
		<p>{link3}</p>
		<p>{link4}</p>
		<p>{link5}</p>
		<p>{link6}</p>
	</div>
);

const Navbar = () => {
	const [show, setShow] = useState(false);
	const [home, setHome] = useState(false);
	const [services, setServices] = useState(false);
	const [blogs, setBlogs] = useState(false);
	const [about, setAbout] = useState(false);
	const [contact, setContact] = useState(false);

	const handleShow = () => {
		setShow(!show);
	};
	const handleHome = () => {
		setHome(!home);
		setBlogs(false);
		setAbout(false);
		setContact(false);
		setServices(false);
		setShow(false);
	};
	const handleServices = () => {
		setHome(false);
		setBlogs(false);
		setAbout(false);
		setContact(false);
		setServices(!services);
	};
	const handleBlogs = () => {
		setHome(false);
		setServices(false);
		setAbout(false);
		setContact(false);
		setBlogs(!blogs);
		setShow(false);
	};
	const handleAbout = () => {
		setHome(false);
		setServices(false);
		setAbout(!about);
		setContact(false);
		setBlogs(false);
		setShow(false);
	};
	const handleContact = () => {
		setHome(false);
		setServices(false);
		setAbout(false);
		setContact(!contact);
		setBlogs(false);
		setShow(false);
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
				<img src="/assets/logo.svg" alt="logo" />
			</div>
			<div className={classes.right}>
				<p>0203 876 6726</p>
				<div className={classes.menu} onClick={handleShow}>
					<HiOutlineMenuAlt2 />
				</div>
			</div>
			{show && (
				<div className={classes.menuWrapper}>
					<div className={classes.overlay}></div>
					<div className={classes.blobs}>
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#4998C3"
								d="M56,-67C71.9,-53.4,83.7,-35.1,87,-15.5C90.3,4.2,85.1,25.2,74.8,43.3C64.5,61.4,49,76.7,30.3,83.8C11.6,90.8,-10.3,89.6,-29.8,82.4C-49.4,75.1,-66.5,61.7,-77,44.2C-87.5,26.6,-91.3,4.9,-86.9,-14.6C-82.6,-34.1,-70.1,-51.4,-54.3,-65C-38.4,-78.6,-19.2,-88.5,0.4,-89C20,-89.5,40.1,-80.5,56,-67Z"
								transform="translate(100 100)"
							/>
						</svg>
						<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
							<path
								fill="#EC4D37"
								d="M56,-67C71.9,-53.4,83.7,-35.1,87,-15.5C90.3,4.2,85.1,25.2,74.8,43.3C64.5,61.4,49,76.7,30.3,83.8C11.6,90.8,-10.3,89.6,-29.8,82.4C-49.4,75.1,-66.5,61.7,-77,44.2C-87.5,26.6,-91.3,4.9,-86.9,-14.6C-82.6,-34.1,-70.1,-51.4,-54.3,-65C-38.4,-78.6,-19.2,-88.5,0.4,-89C20,-89.5,40.1,-80.5,56,-67Z"
								transform="translate(100 100)"
							/>
						</svg>
					</div>
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
							<img src="/assets/footerLogo.svg" alt="logo" />
						</div>
						<div className={classes.right}>
							<p>0203 876 6726</p>
							<div className={classes.menu} onClick={handleShow}>
								<AiOutlineLine />
							</div>
						</div>
					</nav>
					<div className={classes.linksContainer}>
						<div className={classes.links}>
							<Link href="/">
								<h1
									onClick={handleHome}
									className={home ? classes.bold : classes.normal}>
									Home
								</h1>
							</Link>
							<h1
								onClick={handleServices}
								className={services ? classes.bold : classes.normal}>
								Services
							</h1>
							<div className={classes.mobileLinksContainer}>
								{services && (
									<SubLinks
										link1="Web Design"
										link2="Branding and UI/UX Design"
										link3="Digital Marketing"
										link4="Content Creation"
										link5="Mobile Application Development"
										link6="Web Application Development"
									/>
								)}
							</div>
							<h1
								onClick={handleBlogs}
								className={blogs ? classes.bold : classes.normal}>
								Blogs
							</h1>
							<h1
								onClick={handleAbout}
								className={about ? classes.bold : classes.normal}>
								About Us
							</h1>
							<h1
								onClick={handleContact}
								className={contact ? classes.bold : classes.normal}>
								Contact Us
							</h1>
						</div>
						<div className={classes.subLinksContainer}>
							{services && (
								<SubLinks
									link1="Web Design"
									link2="Branding and UI/UX Design"
									link3="Digital Marketing"
									link4="Content Creation"
									link5="Mobile Application Development"
									link6="Web Application Development"
								/>
							)}
						</div>
					</div>
					<div className={classes.contactInfo}>
						<p>{`Let's`} create something magical</p>
						<div className={classes.line}></div>
						<p>0203 876 6726</p>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
