const editReview = document.getElementById('editPost')
const categorySelect = document.getElementById("category").options
const categoryId = document.getElementById("categoryId")

window.addEventListener("load", (event) => {
  let categoryid = categoryId.dataset.categoryid
  
  for (let i = 0; i < categorySelect.length; i++) {
    if (categorySelect[i].value === categoryid) {
      categorySelect[i].selected = true
    }
  }

})

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
  .then(response => {
    if (response.status === 200) {
      window.location.href = '/dashboard'
    }
  })
  .catch(err => console.log(err))
}

editReview.addEventListener('submit', handleSubmit)