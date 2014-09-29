var lastElement = null;
var timer = null;

var h = 0;
var w = 0;

highlight('h0_w0');

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function highlight(classname){
  var randomColor = getRandomColor();
  $('.'+lastElement).empty();
  $('.'+lastElement).css('background-color', randomColor);
  //$('.'+classname).css('background-color', 'red');
  pulsate(classname);
  
  timer = setTimeout(function(){
      for (i=100; i >= 0; i--){
        if(i>0){
          if(i%2==0){
            $('.'+classname).animate({ backgroundColor:'red' }, i);
            $('.'+classname).empty().append('<img src="skull.png" style="width:100%;height:100%;"/>');
          }else{
            $('.'+classname).animate({ backgroundColor:'white' }, i);
          }
        }else{
         clearTimeout(timer);
        //  $('#main').append('<img src="skull.png" style="width:100%;height:100%;position:absolute;left:0px;top:0px;"/>');
          alert('you just died of boredom');
        }
      }  
      // Call reset timer here if you want the timer to start again
      // when the alert is closed
      
      // Otherwise, if you want to stop the timer forever,
      // remove the event handler from document.onkeydown
  }, 5000);
  
  lastElement = classname;
}

function pulsate(classname){
  for (i=0; i < 5; i++){
    $('.'+classname).animate({ backgroundColor:getRandomColor() }, 500);
  }
}

$(document).keydown(function(e) {
    clearTimeout(timer);
    if(h<=40&&h>=0&&w<=40&&w>=0){
      switch(e.which) {
          case 37: // left
            w = w-1;
            highlight('h'+h+'_w'+w);
          break;
  
          case 38: // up
            h = h-1;
            highlight('h'+h+'_w'+w);
          break;
  
          case 39: // right
            w = w+1;
            highlight('h'+h+'_w'+w);
          break;
  
          case 40: // down
            h = h+1;
            highlight('h'+h+'_w'+w);
          break;
  
          default: return; // exit this handler for other keys
      }
      
    console.log(h,w);
    }else{
      alert('you are dead');
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
