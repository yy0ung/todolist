var loginForm = document.querySelector('#login');
var creatAccountForm = document.querySelector('#creatAccount');



document.querySelector("#accountLink").addEventListener("click", function(){
  loginForm.classList.add("form_hidden");
  creatAccountForm.classList.remove("form_hidden");
});

document.querySelector("#loginLink").addEventListener("click", function(){
  loginForm.classList.remove("form_hidden");
  creatAccountForm.classList.add("form_hidden");
});

var message = document.querySelector('#error1');
document.querySelector('#golist').addEventListener("click", function(){

  if(document.querySelector('#input1').value.length===0 || document.querySelector('#input2').value.length===0){
  message.innerHTML='Form is blank.';
}else{
  message.innerHTML=null;
  window.open("main.html");
}
});

var text = document.querySelector('#error2');
document.querySelector('#go').addEventListener("click", function(){

  if(document.querySelector('#input3').value.length===0 || document.querySelector('#input4').value.length===0 || document.querySelector('#input5').value.length===0 || document.querySelector('#input6').value.length===0){
  text.innerHTML='Form is blank.';
}else{
  text.innerHTML=null;
  window.open("main.html");
}
});
