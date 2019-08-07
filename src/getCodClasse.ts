export const getCodClasse = (doc: HTMLDocument) => {
	const fieldset = doc.querySelector('#fldCapa');
	return fieldset === null ? null : fieldset.getAttribute('data-classe');
};
