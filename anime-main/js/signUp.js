// signUp.js
document.forms['signupForm'].addEventListener('submit', handleSignupSubmit);

function handleSignupSubmit(event) {
  event.preventDefault();
  const userId = document.forms['signupForm'].user_id.value;
  const userName = document.forms['signupForm'].user_name.value;
  const userPw = document.forms['signupForm'].user_pw.value;

  let members = JSON.parse(localStorage.getItem('members')) || [];

  
  for (let i = 0; i < members.length; i++) {
    if (members[i].id === userId) {
      alert("이미 존재하는 아이디입니다.");
      return;
    }
  }  
  const newMember = {
    id: userId,
    name: userName,
    pw: userPw
  }; 
  members.push(newMember);
  localStorage.setItem('members', JSON.stringify(members));  
  alert("회원가입이 완료되었습니다!"); 
  window.location.href = 'login.html';
}


