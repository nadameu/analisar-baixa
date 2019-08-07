import { getLocalizadores } from '../src/getLocalizadores';

test('0 opção', () => {
	document.body.innerHTML = /*html*/ `
		<div>teste</div>
	`;
	const localizadores = getLocalizadores(document);
	expect(localizadores).toEqual([]);
});

test('1 opção', () => {
	document.body.innerHTML = /*html*/ `
		<div id="AbreLocalizadores">teste</div>
	`;
	const localizadores = getLocalizadores(document);
	expect(localizadores).toEqual(['teste']);
});

test('múltiplas opções', () => {
	document.body.innerHTML = /*html*/ `
<div id="AbreLocalizadores">teste 1</div>
<div id="AbreLocalizadores">teste 2</div>
<div id="AbreLocalizadores">teste 3</div>
`;
	const localizadores = getLocalizadores(document);
	expect(localizadores).toEqual(['teste 1', 'teste 2', 'teste 3']);
});

test('inválido', () => {
	document.body.innerHTML = /*html*/ `
<div id="AbreLocalizadores"></div>
<div id="AbreLocalizadores">      </div>
`;
	const localizadores = getLocalizadores(document);
	expect(localizadores).toEqual([]);
});
