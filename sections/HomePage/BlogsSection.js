import React from "react";
import BlogCard from "../../components/Home/BlogCard";
import classes from "../../styles/Home/BlogsSection.module.css";

const BlogsSection = () => {
	return (
		<section className={classes.blogSection}>
			<div className={classes.header}>
				<h1 className="sectionTitle">
					Our Latest <br />
					Blogs
				</h1>
				<button className={`circleBtn ${classes.blogBtn}`}>
					View All Blogs
				</button>
			</div>
			<div className={classes.container}>
				<BlogCard
					img="assets/blogImage.png"
					date="19.03"
					year="2022"
					description="7 Key Benefits of Pay Monthly Website : Your business doesn’t get the representation it needs in today’s world without a website."
				/>
				<BlogCard
					img="assets/blogImage2.png"
					date="15.10"
					year="2021"
					description="Bad Website Design: Are You Making These Web Design Mistakes? You spend hours designing the perfect website."
				/>
			</div>
		</section>
	);
};

export default BlogsSection;
