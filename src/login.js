export function login () {
	const $email_field = document.querySelector('.email_field')
	const $password_field = document.querySelector('.password_field')
	const $login_button = document.querySelector('.login_button')

	const $display_error = document.querySelector('.display_error_message')
	const $display_success = document.querySelector('.display_success_message')

	$login_button.addEventListener('click', function () {
		firebase.auth().signInWithEmailAndPassword($email_field.value, $password_field.value)
			.then(function (result) {
				console.log(result)
				const user = result.user

				$display_success.textContent = 'Connecté: ' + user.email
				$display_error.textContent = ''
			})
			.catch(function(error) {
				console.log(error)
				$display_error.textContent = error.message
			})
	})
}

