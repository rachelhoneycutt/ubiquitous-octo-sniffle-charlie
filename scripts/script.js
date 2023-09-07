$( document ).ready(function() {
  
  $("#DogePic").click(function(){
    if($('#DogePic').position().left > 300){
      ($"#gameOutput").value("YOU WIN!!!");
    }
  });
  
  $( "#DogePic").draggable()

});
