var file = document.querySelector('#file');
var upload = document.querySelector('#upload');
var xhr = new XMLHttpRequest();
upload.addEventListener('click', uploadFile, false);
function uploadFile(){
	var formData = new FormData();
	formData.append('file',file.files[0]);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			console.log(xhr.responseText);
		}
	}
	xhr.open('post','/upload',true);
	xhr.send(formData);
}
