import {login} from './login.js'
import {register} from './register.js'
import {firestore} from './firestore'

console.log(document.querySelector('#register_page'))

if (document.querySelector('#login_page')) {
	login()
}

if (document.querySelector('#register_page')) {
	register()
}

if (document.querySelector('#firestore_page')) {
	firestore()
}