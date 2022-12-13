const editReview = document.getElementById('editPost')

const handleSubmit = (event) => {
  event.preventDefault()

  const {
    reviewTitle: reviewTitleInput,
    gameTitle: gameTitleInput,
    category: categorySelection,
    body: bodyInput,
    image: imageUpload
  } = event.target.elements

  const updatedPost = {
    title: reviewTitleInput.value,
    gameTitle: gameTitleInput.value,
    category_id: categorySelection.value,
    body: bodyInput.value,
    img: imageUpload.value
  }

  const reviewId = event.target.dataset.reviewid

  fetch(`/api/review/${reviewId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedPost)
  })
}

editReview.addEventListener('submit', handleSubmit)