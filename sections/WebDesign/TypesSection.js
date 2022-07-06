import React from "react";
import { RiBookletLine, RiFolderSettingsLine } from "react-icons/ri";
import { BsLaptop } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import classes from "../../styles/WebDesign/WebDesign.module.css";

const Type = ({ icon, name }) => (
	<div className={classes.type}>
		<div className={classes.iconContainer}>{icon}</div>
		<h3>{name}</h3>
	</div>
);

const TypesSection = () => {
	return (
		<section className={classes.typesSection}>
			<div className={classes.types}>
				<Type icon={<RiBookletLine />} name="Project" />
				<Type icon={<AiOutlineMobile />} name="Prototyping" />
				<Type icon={<BsLaptop />} name="Development" />
				<Type icon={<RiFolderSettingsLine />} name="Testing" />
				<Type icon={<BsBox />} name="Delivery" />
			</div>
			<div className={classes.content}>
				<h1>We make all types of websites.</h1>
				<p>
					An extremely knowledgeable team that understands your requirments well
					and word as part of your team to produce high quality website.
				</p>
			</div>
		</section>
	);
};

export default TypesSection;
