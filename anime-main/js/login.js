// log in . js
function handleLoginsubmit(event){
  event.preventDefault();
  const id= document.querySelector(`input[name="user_id"]`).value;
  const pw= document.querySelector(`input[name="user_pw"]`).value;
  //members의 저장값.
  let members = JSON.parse(localStorage.getItem('members')) || [];    
  for(let i = 0; i < members.length; i++){
    if(members[i].id == id && members[i].pw == pw){
      alert(`Welcome!! ${members[i].name}`);
      return;
    }
  }
  alert(`Check Your ID and PW`);
};
document.forms.loginForm.addEventListener('submit', handleLoginsubmit);