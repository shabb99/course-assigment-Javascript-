const submit = document.querySelector('#submit');

const firstNameError = document.querySelector('.firstNameError');
const lastNameError = document.querySelector('.lastnameError');
const emailError = document.querySelector('.emailError');


submit.onclick = function (event) {

	event.preventDefault();

	const firstName = document.querySelector('#firstname').value.trim();
	const lastName = document.querySelector('#lastname').value.trim();
	const email = document.querySelector('#email').value.trim();

	if (testLen(firstName, 2)) {
		firstNameError.classList.add('hide');
		firstNameError.classList.remove('show');
	} else {
		firstNameError.classList.add('show');
		firstNameError.classList.remove('hide');
	}

	if (lastName.length > 5) {
		lastNameError.classList.add('hide');
		lastNameError.classList.remove('show');
	} else {
		lastNameError.classList.add('show');
		lastNameError.classList.remove('hide');
	}

	if (validateEmail(email)) {
		emailError.classList.add('hide');
		emailError.classList.remove('show');
	} else {
		emailError.classList.add('show');
		emailError.classList.remove('hide');
	}
};

function validateEmail(emailAddy) {
	const emailExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const isEmailValid = emailExpression.test(emailAddy);
	return isEmailValid;
}

function testLen(elm, len) {
	if (elm.length > len) {
		return true;
	} else {
		return false;
	}
}