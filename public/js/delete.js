const dashboard = document.getElementById('dashboard')

dashboard.addEventListener('click', (event) => {
  let reviewId = event.target.dataset.reviewid
  if (event.target.matches('button')) {
    fetch(`/api/review/${reviewId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/dashboard'
      }
    })
    .catch(err => console.log(err))
  }
})
