const onload = () => document.readyState !== 'complete'
	? new Promise(r => document.addEventListener('readystatechange', () => {
		switch (document.readyState) {
			case 'complete': r();break;
			default:
		}
	}))
	: Promise.resolve();

const highliting = () => {
	document.querySelectorAll('pre code').forEach(block => {
		hljs.highlightBlock(block)
	});
};

onload().then(() => {
	fetch('./README.md')
	.then(v => v.ok ? v.text() : Promise.reject())
	.then(v => marked(v))
	.then(v => document.getElementById('content').innerHTML = v)
	.then(highliting);
});



