let login = prompt('Введите логин');

if (login == 'odmen') {

  let password = prompt('Введите пароль'); 

	if (password == 'root'){
	  alert('welcome');
	} else if (password == null || password == '') {
	  alert('fail');
	} else {
	  alert('cancel');   
	}
} else if (login == null || login == '') {
	alert('cancel');
} else {
	alert('fail');
}

