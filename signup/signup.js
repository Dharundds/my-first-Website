function show(){
	let pswrd = document.getElementById('pswrd');
	let icon = document.querySelector('.fas');
	if(pswrd.type === "password") {
		pswrd.type = "text";
		pswrd.style.marginTop = "1px";
		icon.style.color = "Blue"; 
	}else{
		pswrd.type = "password";
		icon.style.color = "black"; 
	}
}

function sh(){
	let psw= document.getElementById('pswrd-repeat');
	let ico= document.querySelector('.fas');
	if(pswrd_1.type === "password") {
		psw.type = "text";
		psw.style.marginTop = "2px";
		ico.style.color = "Black"; 
	}else{
		psw.type = "password";
		ico.style.color = "black"; 
	}
}


const nam = document.getElementById('User_Name');
const password = document.getElementById('pswrd');
const con_password =  document.getElementById("pswrd-repeat");
const form =  document.getElementById("myForm");
const errorElement =  document.getElementById("error");


//form.addEventListener('submit',(e) => {
	//	let message = []
	//	if (nam.value === ''||nam.value == null){
	//		message.push('Name is required')
	//	}
	//	if (password.value.length<=6){
	//		message.push('Password must be greater than 6 character')
	//	}
	//	if(password.value === 'password'|| password.value ==='Password'|| password.value==='PASSWORD') {
	//		message.push('Password cannot be password ')
	//	}
	//	if (message.length >0) {
	//	e.preventDefault()
	//	errorElement.innerText = message.join(', ')
	//	}
//})


