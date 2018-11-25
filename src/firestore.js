export function firestore () {
	firebase.initializeApp({
		apiKey: 'AIzaSyCKBM0adIIjLMm1I57-MvVgmmM_ePMC6Ds',
		authDomain: 'poc-firebase-f8910.firebaseapp.com',
		projectId: 'poc-firebase-f8910'
	})
	
	const $posts_list = document.querySelector('.posts_list')
	const $get_posts_button = document.querySelector('.get_posts_button')
	
	const db = firebase.firestore()
	
	
	db.settings({
		timestampsInSnapshots: true
	})
	
	$get_posts_button.addEventListener('click', function () {
		db.collection("posts").get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
						console.log(doc.id, doc.data())
	
						const single_post = doc.data()
						const $posts_list_element = document.createElement('li')
	
						$posts_list_element.textContent = single_post.title
	
						$posts_list.appendChild($posts_list_element)
	
						$get_posts_button.style.display = 'none'
				})
		})
	})
}
