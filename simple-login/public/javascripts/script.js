var xhr = new XMLHttpRequest();
var form = document.getElementById('form');
var btn = document.getElementById('btn');
var data = new FormData(form);

btn.addEventListener('click',upload,false);

function upload(){
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			console.log(xhr.responseText);
		}
	}
	xhr.open('post','/login',true);
	xhr.send(data);
}


