$( document ).ready(function() {
  
  $("#DogePic").click(function(){
    if($('#DogePic').position().left > 300 && $('#DogePic').position().top > 300){
      //Fixed for Charlie, outputs instead of using alert and changed postion so you can read output
      $("#gameOutput").html("YOU WIN!!!"); 
    }
  });
  
  $( "#DogePic").draggable()
});