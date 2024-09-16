//your JS code here. If required.
 let nameInput = document.getElemenById("fname");


 nameInput.addEventListener("blur" , ()=>{
 	nameInput.value = nameInput.value.toUpperCase();
})


// // Get the input field by its ID
// const nameInput = document.getElementById('fname');

// // Add an event listener for 'blur' event (which occurs when the input loses focus)
// nameInput.addEventListener('blur', function() {
//     // Convert the input value to uppercase
//     nameInput.value = nameInput.value.toUpperCase();
// });
