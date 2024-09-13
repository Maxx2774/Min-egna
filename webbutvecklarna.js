const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#¤%&";

let interval = null;



document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 30)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}



$(document).ready(function(){
  $('select[name="inputType"]').on('change', function(e) {
    var v = $(this).val();
    $('img').removeClass('show').filter('#' + v + 'Picture').addClass('show');
  });
});






