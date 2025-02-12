//implement.js
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

document.addEventListener('DOMContentLoaded', function () {
  const commentForm = document.querySelector('.anime__details__form form');
  const commentInput = document.querySelector('.anime__details__form textarea');
  const commentSection = document.getElementById('commentSection');

  commentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const commentText = commentInput.value.trim();

    if (commentText) {
      saveComment(commentText);
      commentInput.value = "";
      loadComments();
    }
  });

  loadComments();
});

function saveComment(commentText) {
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  const newComment = {
    username: members[i].name,
    text: commentText,
    date: new Date().toLocaleString()
  };
  comments.push(newComment);
  loadComments();
  localStorage.setItem('comments', JSON.stringify(comments));
}


function loadComments() {
  document.querySelector('div.anime__details__review').innerHTML = '';
  const comments = JSON.parse(localStorage.getItem('comments')) || [];

  comments.forEach(comment => {
    makeRow(comment);
  });
}

// row 생성.
function makeRow(data = {}) {
  const str = `<div class="anime__review__item">
  <div class="anime__review__item__pic">
      <img src="img/anime/review-7.jfif" alt="">
  </div>
  <div class="anime__review__item__text">
      <h6>${members[i].name}<span>${date}</span></h6>
      <p>${data.text}</p>
  </div>
</div>`;

  const target = document.querySelector('div.anime__details__review');
  target.insertAdjacentHTML('beforeend', str);
}