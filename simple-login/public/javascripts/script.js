var xhr = new XMLHttpRequest();
var form = document.getElementById('form');
var btn = document.getElementById('login');
var resgister = document.getElementById('resgister');
var data = new FormData(form);

btn.addEventListener('click',log,false);
resgister.addEventListener('click',res,false)
function log(){
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			console.log(xhr.responseText);
		}
	}
	xhr.open('post','/login',true);
	xhr.send(data);
}

function res(){
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			console.log(xhr.responseText);
		}
	}
	xhr.open('post','/resgister',true);
	xhr.send(data);
}
