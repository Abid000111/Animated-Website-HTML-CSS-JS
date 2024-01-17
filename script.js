let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
	cursor.style.left = dets.x + "px";
	cursor.style.top = dets.y + "px";
	cursorBlur.style.left = dets.x + "px";
	cursorBlur.style.top = dets.y + "px";
});

gsap.to("#nav", {
	backgroundColor: "black",
	height: "90px",
	duration: 0.8,
	scrollTrigger: {
		trigger: "#nav",
		scroller: "body",
		// markers: true,
		start: "top -10%",
		end: "top -11%",
		scrub: 1
	}
});

gsap.to("#main", {
	backgroundColor: "black",
	scrollTrigger: {
		trigger: "#main",
		scroll: "body",
		markers: true,
		start: "top -25%",
		end: "top -70%",
		scrub: 2
	}
});
