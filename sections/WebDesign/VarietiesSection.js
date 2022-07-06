import React from "react";
import { BsLaptop } from "react-icons/bs";
import classes from "../../styles/WebDesign/WebDesign.module.css";

const Variety = ({ title, icon }) => (
	<div className={classes.variety}>
		<div className={classes.left}>
			<h1>{title}</h1>
			<p>
				A simple website to showcase your services or tell your clients what you
				do. A brochure website will be best for you.
			</p>
		</div>
		<div className={classes.icon}>{icon}</div>
	</div>
);

const VarietiesSection = () => {
	return (
		<section className={classes.varietiesSection}>
			<Variety title="Brochure Websites" icon={<BsLaptop />} />
			<Variety title="Portfolio & Catalogue" icon={<BsLaptop />} />
			<Variety title="eCommerceWebsites" icon={<BsLaptop />} />
			<Variety title="Blog & Magazine" icon={<BsLaptop />} />
			<Variety title="Booking & Reservation" icon={<BsLaptop />} />
			<Variety title="Custom Applications" icon={<BsLaptop />} />
		</section>
	);
};

export default VarietiesSection;
