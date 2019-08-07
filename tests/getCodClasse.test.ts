import { getCodClasse } from '../src/getCodClasse';

test('disponível', () => {
	document.body.innerHTML = /*html*/ `
<div id="fldCapa" data-classe="123"></div>
`;
	const classe = getCodClasse(document);
	expect(classe).toBe('123');
});

test('sem atributo', () => {
	document.body.innerHTML = /*html*/ `
<div id="fldCapa"></div>
`;
	const classe = getCodClasse(document);
	expect(classe).toBe(null);
});

test('sem fieldset', () => {
	document.body.innerHTML = '';
	const classe = getCodClasse(document);
	expect(classe).toBe(null);
});
