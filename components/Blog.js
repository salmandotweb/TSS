import React from "react";
import classes from "../styles/BlogsSection.module.css";

const Blog = ({ img, date, year, description }) => {
	return (
		<div className={classes.blogCard}>
			<div className={classes.imageContainer}>
				<img src={img} alt="blog" />
			</div>
			<div className={classes.details}>
				<div>
					<h2>{date}</h2>
					<p>{year}</p>
				</div>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Blog;
