import React from "react";
import classes from "../../styles/Home/ReviewsSection.module.css";

const ReviewsSection = () => {
	return (
		<section className={classes.reviewsSection}>
			<div className={classes.info}>
				<h1>
					Our Consistent <br /> 5 Star Reviews
				</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
					distinctio enim eveniet ratione, impedit perspiciatis nostrum. Ea ex
					magnam temporibus perferendis, illum obcaecati ut vero ratione
					repellendus commodi ipsa voluptates!
				</p>
			</div>
			<div className={classes.carousel}>Carousel</div>
		</section>
	);
};

export default ReviewsSection;
