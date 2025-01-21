document.getElementById("#register").addEventListener("submit", function() {
 
  let userId = document.getElementById("#user-id").value;
  let userPw1 = document.getElementById("#user-pw1").value;
  let userPw2 = document.getElementById("#user-pw2").value;

  if (userId.length < 4 || userId.length > 15) {  
      alert("아이디는 4글자 이상, 15글자 이하로 입력해주세요.");     
    
      document.getElementById("#user-id").value = "";
      document.getElementById("#user-id").focus();        
    } 
  else if(userPw1.length < 8) {
    alert("비밀번호는 8자리 이상으로 입력해주세요.");
    document.getElementById("#user-pw1").value = "";
    document.getElementById("#user-pw1").focus();
  
}else if (userPw1 !== userPw2) {  
  alert("비밀번호가 일치하지 않습니다.");
  document.getElementById("#user-Pw2").value = "";
  document.getElementById("#user-Pw2").focus();
  return 
}
});


