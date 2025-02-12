document.querySelector('.follow-btn').addEventListener('click', function (event) {
  event.preventDefault();
  const heartIcon = this.querySelector('i');
  if (heartIcon.classList.contains('fa-heart-o')) {
    heartIcon.classList.remove('fa-heart-o');
    heartIcon.classList.add('fa-heart');
  } else {
    heartIcon.classList.remove('fa-heart');
    heartIcon.classList.add('fa-heart-o');
  }
});