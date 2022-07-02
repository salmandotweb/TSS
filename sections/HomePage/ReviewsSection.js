import React from "react";
import CarouselCard from "../../components/Home/CarouselCard";
import classes from "../../styles/Home/ReviewsSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewsSection = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
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
			<div className={classes.carousel}>
				<Slider {...settings}>
					<div>
						<CarouselCard />
					</div>
					<div>
						<CarouselCard />
					</div>
					<div>
						<CarouselCard />
					</div>
				</Slider>
			</div>
		</section>
	);
};

export default ReviewsSection;
