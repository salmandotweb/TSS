import React from "react";
import classes from "../../styles/Global/Header.module.css";

const Header = ({
	bgText1,
	bgText2,
	text1,
	text2,
	gradient1,
	gradient2,
	description,
	bold,
	space,
}) => {
	return (
		<section className={classes.header}>
			<div className={classes.background_text}>
				<span>{bgText1}</span>
				<span>{bgText2}</span>
			</div>
			<div className={classes.content}>
				<h1>
					{text1}&nbsp;
					<span className={classes.gradient}>
						{gradient1}
						<br />
						{gradient2}
					</span>
					{space}
					{text2}
				</h1>
				<p>
					{description}&nbsp;
					<span className="bold">{bold}&nbsp;</span>
				</p>
			</div>
			<div className={classes.arrow}>
				<div className={classes.container}>
					<div className={classes.chevron}></div>
					<div className={classes.chevron}></div>
					<div className={classes.chevron}></div>
				</div>
			</div>
		</section>
	);
};

export default Header;
