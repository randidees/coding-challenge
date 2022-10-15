var btnListenerId, varListenerId;

const varListener = () => {
	if(window.xgenVariable != undefined) {
		clearInterval(varListenerId);
		window.localStorage.setItem('value', window.xgenVariable);
		document.querySelector('.refresh_button').click();
	}
};

const btnListener = () => {
	let btn = document.querySelector('.xgen_button');
	if(btn != null) {
		btn.click();
		clearInterval(btnListenerId);
		varListenerId = setInterval(varListener, 100);
	}
};

if(window.localStorage.getItem('value')){
	document.querySelector('.xgen_answer').value = window.localStorage.getItem('value');
	window.localStorage.getItem('value');
	document.querySelector('.submit').click();
}

btnListenerId = setInterval(btnListener, 10);
