//your JS code here. If required.
let nameInput = document.getElemenById("fname");


nameInput.addEventListener("blur" , ()=>{
	nameInput.value = nameInput.value.toUpperCase();
})