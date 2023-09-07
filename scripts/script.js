$( document ).ready(function() {
  
  $("#DogePic").click(function(){
    if($('#DogePic').position().left > 300){
      //Fixed for Charlie
      $("#gameOutput").text("YOU WIN!!!");
    }
  });
  
  $( "#DogePic").draggable()

});
