$( document ).ready(function() {
  
  $("#DogePic").click(function(){
    if($('#DogePic').position().left > 300){
      //Fixed for Charlie
      $("#gameOutput").value("YOU WIN!!!");
    }
  });
  
  $( "#DogePic").draggable()

});
