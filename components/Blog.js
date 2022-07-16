import React from "react";
import Link from "next/link";
import classes from "../styles/BlogsSection.module.css";

const Blog = ({ img, date, year, description, link }) => {
	return (
		<Link href={`/blogs/${link}`}>
			<div className={classes.blogCard}>
				<div className={classes.circle}></div>
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
		</Link>
	);
};

export default Blog;
