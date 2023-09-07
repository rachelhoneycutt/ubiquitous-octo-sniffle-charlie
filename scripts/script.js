$( document ).ready(function() {
  
  $("#DogePic").click(function(){
    if($('#DogePic').position().left > 300){
      alert("YOU WIN!!!");
    }
  });
  
  $( "#DogePic").draggable()

});