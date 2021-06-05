
var txt = document.getElementById('box');
var push = document.getElementById('send');
var empty = document.getElementById('todos');



push.addEventListener('click', function (){
  if(txt.value.length === 0){
    alert('Field is blank');

}
});

push.addEventListener('click', function(){
  var paragrah = document.createElement("p");
  paragrah.innerText = txt.value;
  empty.appendChild(paragrah);
  document.getElementById('box').value="";
  });

  txt.addEventListener('keydown',function(){
    if(event.keyCode==13){
      push.click();
      document.getElementById('box').value="";
    };
  });

  function nightDay(self){
    var target = document.querySelector('body');
    var group = document.querySelector('a');
    if(self.value==='night'){
      target.style.backgroundColor='#333030';
      target.style.color='white';
      group.style.color='powderblue';
      self.value ='day';
    }else{
      target.style.backgroundColor='white';
      target.style.color='black';
      group.style.color='blue';
      self.value ='night';
    };
  }
