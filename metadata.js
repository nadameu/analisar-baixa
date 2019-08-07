export default {
	name: 'Analisar baixa',
	namespace: 'http://nadameu.com.br/analisar-baixa',
	include: [
		/^https:\/\/eproc\.(jf(pr|rs|sc)|trf4)\.jus\.br\/eproc(V2|2trf4)\/controlador\.php\?acao\=processo_selecionar\&/,
	],
	grant: 'none',
};
