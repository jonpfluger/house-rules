const createPost = document.getElementById('createPost')

const handleSubmit = (event) => {
  event.preventDefault()

  const {
    reviewTitle: reviewTitleInput,
    gameTitle: gameTitleInput,
    category: categorySelection,
    body: bodyInput,
    image: imageUpload
  } = event.target.elements

  const newPost = {
    title: reviewTitleInput.value,
    gameTitle: gameTitleInput.value,
    category_id: categorySelection.value,
    body: bodyInput.value,
    img: imageUpload.value
  }

  fetch('/api/review', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  })
  .then(response => {
    if (response.ok) {
      window.location.href = '/dashboard'
    }
  })
  .catch(err => console.log(err))

}

createPost.addEventListener('submit', handleSubmit)