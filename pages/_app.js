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

		let customCursor = document.querySelector(".custom-cursor");

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
		document.querySelectorAll(".circleBtn").forEach((btn) => {
			btn.addEventListener(
				"mouseenter",
				function () {
					tl2.to(cursor, { duration: 0.2, opacity: 0 });
					btn.classList.add("hover");
				},
				false
			);
		});
		document.querySelectorAll(".circleBtn").forEach((btn) => {
			btn.addEventListener(
				"mouseleave",
				function () {
					tl2.to(cursor, { duration: 0, opacity: 1 });
					btn.classList.remove("hover");
				},
				false
			);
		});
	});
	return (
		<>
			<div className="custom-cursor" ref={(e) => (cursor = e)}>
				Start your project
			</div>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
