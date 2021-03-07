function scrollToId(id) {
	if (!id || typeof id !== "string") {
		return;
	}
	const el = document.getElementById(id);
	if (!el) {
		return;
	}
	const y = el.offsetTop - 48 - document.documentElement.scrollTop;
	window.scrollBy(0, y);
	window.location.hash = id === "top" ? "" : id;
}
(() => {
	document.getElementById(
		"copyright-date"
	).innerText = new Date().getFullYear();
	window.addEventListener("hashchange", () => {
		const activeClass = "currentLink";
		const els = document.getElementsByClassName("options__link");
		for (let i = 0; i < els.length; ++i) {
			const el = els.item(i);
			if (
				el.getAttribute("href") === window.location.hash &&
				!el.classList.contains(activeClass)
			) {
				el.classList.add(activeClass);
			} else {
				el.classList.remove(activeClass);
			}
		}
	});
	window.addEventListener("wheel", () => {
		window.location.hash = "";
	});
	window.addEventListener("scroll", () => {
		const el = document.getElementById("progress-indicator");
		const docHtml = document.documentElement;
		const progress = Math.min(
			Math.round(
				(docHtml.scrollTop / (docHtml.offsetHeight - docHtml.clientHeight)) *
					100
			),
			100
		);
		el.setAttribute("style", `width: ${progress}%;`);
	});
	window.onload = () => {
		const el = document.getElementById("typewriter-content");
		const contents = [
			"Software engineer",
			"Full stack developer",
			"Tech passionate",
			"French",
			"Love this job!",
		];
		new TypeWriter({
			el,
			contents,
			pauseSpeed: 1000,
			writeSpeed: 100,
			deleteSpeed: 50,
		}).start();
	};
})();
