import React from "react";
import { RiBookletLine, RiFolderSettingsLine } from "react-icons/ri";
import { BsLaptop } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { AiOutlineMobile } from "react-icons/ai";
import classes from "../styles/WebDesign.module.css";
import Type from "../components/Type";
import Content from "../components/Content";

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
			<Content
				title="We make all type of websites."
				description="An extremely knowledgeable team that understands your requirements well and work as part of your team to produce high quality website."
			/>
		</section>
	);
};

export default TypesSection;
