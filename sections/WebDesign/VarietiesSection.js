import React from "react";
import { BsLaptop } from "react-icons/bs";
import Variety from "../../components/WebDesign/Variety";
import classes from "../../styles/WebDesign/WebDesign.module.css";

const VarietiesSection = () => {
	return (
		<section className={classes.varietiesSection}>
			<Variety
				title="Brochure Websites"
				icon={<BsLaptop />}
				description="	A simple website to showcase your services or tell your clients what
					you do. A brochure website will be best for you."
			/>
			<Variety
				title="Portfolio & Catalogue"
				icon={<BsLaptop />}
				description="	A simple website to showcase your services or tell your clients what
					you do. A brochure website will be best for you."
			/>
			<Variety
				title="eCommerceWebsites"
				icon={<BsLaptop />}
				description="	A simple website to showcase your services or tell your clients what
					you do. A brochure website will be best for you."
			/>
			<Variety
				title="Blog & Magazine"
				icon={<BsLaptop />}
				description="	A simple website to showcase your services or tell your clients what
					you do. A brochure website will be best for you."
			/>
			<Variety
				title="Booking & Reservation"
				icon={<BsLaptop />}
				description="	A simple website to showcase your services or tell your clients what
					you do. A brochure website will be best for you."
			/>
			<Variety
				title="Custom Applications"
				icon={<BsLaptop />}
				description="	A simple website to showcase your services or tell your clients what
					you do. A brochure website will be best for you."
			/>
		</section>
	);
};

export default VarietiesSection;
