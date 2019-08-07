export const getLocalizadores = (doc: HTMLDocument) =>
	Array.from(doc.querySelectorAll<HTMLAnchorElement>('[id="AbreLocalizadores"]'))
		.map(x => x.textContent!.trim())
		.filter(x => x !== '');
