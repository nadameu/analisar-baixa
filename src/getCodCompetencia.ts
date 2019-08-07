export const getCodCompetencia = (doc: HTMLDocument) => {
	const fieldset = doc.querySelector('#fldCapa');
	return fieldset === null ? fieldset : fieldset.getAttribute('data-competencia');
};
