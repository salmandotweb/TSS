import React from "react";
import classes from "../../styles/Global/Header.module.css";

const Header = () => {
	return (
		<section className={classes.header}>
			<div className={classes.background_text}>
				<span>The Site</span>
				<span>Space</span>
			</div>
			<div className={classes.content}>
				<h1>
					Creative&nbsp;
					<span className={classes.gradient}>
						Web Design & <br /> Digital&nbsp;
					</span>
					Agency London.
				</h1>
				<p>
					Web Buds is a creative website design agency in London. A&nbsp;
					<span className="bold">team of talented web designers&nbsp;</span>
					in London.
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
