function updateContents(lang) {
	let iframeContents = document.getElementById("iframe-contents");
	let urlArray = iframeContents.src.split('/');
	let prevMenu = document.getElementById("menu-" + urlArray[3]);
	if (urlArray[3] != lang) {
		document.documentElement.lang = lang;
		let newTitle = lang == "pt-BR" ? "Celestino Analista Desenvolvedor" : "Celestino Developer Analyst";
		document.title = newTitle;
		urlArray.splice(3, 1, lang);
		let newUrl = urlArray.toString().replaceAll(',', '/');
		iframeContents.src = newUrl;
		prevMenu.style.display = "none";
		let menu = document.getElementById("menu-" + lang);
		menu.style.display = "inline-flex";
	}
}
