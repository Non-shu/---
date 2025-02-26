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
let members = [];
document.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('members')) {
    const defaultMembers = [
      { id: "um_mu11@naver.com", pw: "qwerqwer", name: "감스트" },
      { id: "mandu@nate.com", pw: "1q2w3e4r", name: "유명한의유명한독침" },
      { id: "alskfl@gmail.com", pw: "qqqq1111", name: "5코스트밸류덱" },
      { id: "messibetter@than.ronaldo", pw: "asdfzxcv", name: "타코야끼 켄" },
      { id: "siuuuu@daum.net", pw: "qazwsx11", name: "테이져건사냥꾼정상수" }
    ];
    localStorage.setItem('members', JSON.stringify(defaultMembers));
  }
  const commentForm = document.querySelector('.anime__details__form form');
  const commentInput = document.querySelector('.anime__details__form textarea');
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
  const logInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const newComment = {
    username: logInUser ? loggedInUser.name : "익명",
    text: commentText,
    date: new Date().toLocaleString()
  };
  comments.push(newComment);  
  localStorage.setItem('comments', JSON.stringify(comments));
  loadComments();
}


function loadComments() {
  document.querySelector('div.review').innerHTML = '';
  const comments = JSON.parse(localStorage.getItem('comments')) || [];

  comments.forEach((comment, index) => {
    makeRow(comment, index);
  });
}

function removeComment(index) {
  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.splice(index, 1); 
  localStorage.setItem('comments', JSON.stringify(comments));
  loadComments(); 
}


// row 생성.
function makeRow(data = {}, index) {
  const str = `<div class="anime__review__item" data-index="${index}" style="position: relative;">
    <button class="delete-comment">❌</button>
    <div class="anime__review__item__pic">
        <img src="img/anime/review-7.jfif" alt="">
    </div>
    <div class="anime__review__item__text">
        <h6>${data.username} <span>${data.date}</span></h6>
        <p>${data.text}</p>
    </div>
  </div>`;

  const target = document.querySelector('div.review');
  target.insertAdjacentHTML('beforeend', str);

  //삭제 추가
  const deleteBtn = target.lastElementChild.querySelector('.delete-comment');
  deleteBtn.addEventListener('click', function () {
    removeComment(index);
  });
}


const MAX_COMMENTS = 10; // 최대 댓글 개수

function saveComment(commentText) {
  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  const newComment = {
    username: "익명",
    text: commentText,
    date: new Date().toLocaleString()
  };

  comments.push(newComment);
  
  // 오래된 댓글 삭제
  if (comments.length > MAX_COMMENTS) {
    comments.shift();
  }

  localStorage.setItem('comments', JSON.stringify(comments));
  loadComments();
}

const COMMENTS_PER_PAGE = 5; // 한 페이지당 댓글
let currentPage = 1;

function loadComments() {
  document.querySelector('div.review').innerHTML = '';
  const comments = JSON.parse(localStorage.getItem('comments')) || [];
  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  
  const startIndex = (currentPage - 1) * COMMENTS_PER_PAGE;
  const endIndex = startIndex + COMMENTS_PER_PAGE;
  const paginatedComments = comments.slice(startIndex, endIndex);

  paginatedComments.forEach(comment => {
    makeRow(comment);
  });

  updatePagination(totalPages);
}

// 페이지네이션 버튼
function updatePagination(totalPages) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.classList.add('page-btn');
    if (i === currentPage) btn.classList.add('active');

    btn.addEventListener('click', function () {
      currentPage = i;
      loadComments();
    });

    paginationContainer.appendChild(btn);
  }
}
