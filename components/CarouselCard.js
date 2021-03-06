import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import classes from "../styles/ReviewsSection.module.css";

const CarouselCard = () => {
	return (
		<div className={classes.carouselCard}>
			<ImQuotesLeft className={classes.quote} />
			<h2>Latoya Gabbidon</h2>
			<p>Owner - Candy Palazzo</p>
			<p>
				The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
				quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
				vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
				quick-jived waltz. Brick quiz whangs jumpy veldt fox Fox nymphs grab
				quick-jived waltz. Brick quiz whangs jumpy veldt fox
			</p>
		</div>
	);
};

export default CarouselCard;
