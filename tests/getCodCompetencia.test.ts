import { getCodCompetencia } from '../src/getCodCompetencia';

test('disponível', () => {
	document.body.innerHTML = /*html*/ `
<div id="fldCapa" data-competencia="123"></div>
`;
	const competencia = getCodCompetencia(document);
	expect(competencia).toBe('123');
});

test('sem atributo', () => {
	document.body.innerHTML = /*html*/ `
<div id="fldCapa"></div>
`;
	const competencia = getCodCompetencia(document);
	expect(competencia).toBe(null);
});

test('sem fieldset', () => {
	document.body.innerHTML = '';
	const competencia = getCodCompetencia(document);
	expect(competencia).toBe(null);
});
