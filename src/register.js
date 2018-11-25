export function register () {
	// EMAIL AND PASSWORD

	const $email_field = document.querySelector('.email_field')
	const $password_field = document.querySelector('.password_field')
	const $register_button = document.querySelector('.register_button')

	const $display_error = document.querySelector('.display_error_message')
	const $display_success = document.querySelector('.display_success_message')


	$register_button.addEventListener('click', function () {
		firebase.auth().createUserWithEmailAndPassword($email_field.value, $password_field.value)
			.then(function (result) {
				console.log(result)
				$display_success.textContent = result.message
				$display_error.textContent = ''
			})
			.catch(function(error) {
				console.log(error)
				$display_error.textContent = error.message
			})
	})


	// GOOGLE CONNECT

	const $google_connect_button = document.querySelector('.google_connect')

	$google_connect_button.addEventListener('click', function () {
		const provider = new firebase.auth.GoogleAuthProvider()
		console.log(provider)
		firebase.auth().signInWithPopup(provider).then(function(result) {
			const token = result.credential.accessToken;
			const user = result.user;

			console.log(user)
			document.querySelector('.display_name_google_connect').textContent = 'Bonjour, ' + user.displayName
		}).catch(function(error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.email;
			const credential = error.credential;
		});

		// firebase.auth().signInWithRedirect(provider);
	})
}


