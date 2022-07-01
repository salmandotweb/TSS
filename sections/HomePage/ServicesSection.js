import React from "react";
import classes from "../../styles/Home/ServicesSection.module.css";

const Service = ({ title, subTitle }) => (
	<div className={classes.service}>
		<h1>{title}</h1>
		<p>{subTitle}</p>
	</div>
);

const ServicesSection = () => {
	return (
		<section className={classes.servicesSection}>
			<h1 className={`sectionTitle ${classes.title}`}>
				Our <br /> Services
			</h1>
			<div className={classes.info}>
				<div className={classes.imageContainer}>
					<img src="assets/serviceImage.png" alt="Services" />
				</div>
				<div className={classes.services}>
					<Service
						title="Custom Web Design."
						subTitle="WordPress, Laravel, React JS, WooCommerce, Shopify, Magento"
					/>
					<Service
						title="Digital Marketing."
						subTitle="Search Engine Optimization (SEO), Social Media, PPC, Video Marketing"
					/>
					<Service
						title="Branding & UI/UX Design."
						subTitle="UI/UX Design, Brand Identity, Social Media Designs"
					/>
					<Service
						title="Mobile App Development"
						subTitle="Wordpress, Laravel. Shopify, WooCommerce, Shopify, React JS, Magento"
					/>
					<Service
						title="Content Creation."
						subTitle="Website Content, Blog Posts, Article Writing, Guest Posts"
					/>
					<Service
						title="Web App Development"
						subTitle="UI/UX Design, Brand Identity, Social Media Designs"
					/>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
