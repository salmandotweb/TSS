import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	let cursor = useRef(null);
	let posX1 = useRef(null);
	let posY1 = useRef(null);
	let mouseX1 = useRef(null);
	let mouseY1 = useRef(null);

	let tl = gsap.timeline();
	let tl2 = gsap.timeline();

	useEffect(() => {
		let posX = posX1.current;
		let posY = posY1.current;
		let mouseX = mouseX1.current;
		let mouseY = mouseY1.current;
		tl.to({}, 0.016, {
			repeat: -1,
			onRepeat: function () {
				posX += (mouseX - posX) / 10;
				posY += (mouseY - posY) / 10;
				tl.set(cursor, {
					css: {
						left: posX - 50,
						top: posY - 50,
					},
				});
			},
		});
		document.addEventListener("mousemove", function (e) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		});
		tl2.from(
			cursor,
			{
				duration: 0,
				delay: 0,
			},
			"-=1"
		);
	});
	return (
		<>
			<div className="cursor-follower" ref={(el) => (cursor = el)}>
				Start your project
			</div>
			<Component {...pageProps} ref={(el) => (cursor = el)} />
		</>
	);
}

export default MyApp;
