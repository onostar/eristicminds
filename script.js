function displayMenu(){
	let menu = document.getElementById('navigation');
	if(menu.style.display == 'block'){
		menu.style.display = 'none';
	}
	else{
		menu.style.display = 'block';
	}
}