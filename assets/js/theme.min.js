const themeEvent = new CustomEvent("theme");
function getTheme() {
	return window.localStorage.getItem("theme");
}
function setTheme(theme) {
	window.localStorage.setItem("theme", theme);
	window.dispatchEvent(themeEvent);
}
function changeTheme() {
	const isThemeDark =
		document.documentElement.getAttribute("data-theme") === "dark";
	setTheme(isThemeDark ? "light" : "dark");
}
window.addEventListener("theme", () => {
	const theme = getTheme() || "light";
	const el = document.getElementById("switch-icon");
	const d =
		theme === "dark"
			? // sun
			  "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
			: // moon
			  "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";
	el.setAttribute("d", d);
	document.documentElement.setAttribute("data-theme", theme);
});
if (window.matchMedia) {
	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", (e) => {
			setTheme(e.matches ? "dark" : "light");
		});
}
(() => {
	let theme = getTheme();
	if (!theme) {
		const isThemeDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)")?.matches;
		theme = isThemeDark ? "dark" : "light";
	}
	setTheme(theme);
})();
