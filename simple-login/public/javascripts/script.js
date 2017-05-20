var xhr = new XMLHttpRequest();
var form = document.getElementById('form');
var btn = document.getElementById('login');
var resgister = document.getElementById('resgister');


btn.addEventListener('click',log,false);
resgister.addEventListener('click',res,false)
function log(){
	var data = new FormData(form);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			console.log(xhr.responseText);
		}
	}
	xhr.open('post','/login',true);
	xhr.send(data);
}

function res(){
	var data = new FormData(form);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			console.log(xhr.responseText);
		}
	}
	xhr.open('post','/resgister',true);
	xhr.send(data);
}
