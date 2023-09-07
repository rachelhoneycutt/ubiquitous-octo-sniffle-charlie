$( document ).ready(function() {
  
  $("#DogePic").click(function(){
    if($('#DogePic').position().left > 300){
      //Fixed for Charlie
      $("#gameOutput").val("YOU WIN!!!");
    }
  });
  
  $( "#DogePic").draggable()

});
