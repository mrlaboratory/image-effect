var imgs = document.querySelector("img");

var effect = ["effect0","effect1","effect2","effect3","effect4","effect5","effect6","effect7","effect8"];
var bttn = document.querySelectorAll("button");

/*for(var i=0;i<8;i++){
  
document.querySelectorAll("button")[i].addEventListener("click" , function(){ 
   text = document.querySelectorAll("button")[i];
alert(text);
   imgs.classList.add(effect[i]);
        
        });

}
*/
function eff(num){
    imgs.className ='effect'+num;

  
}

$(function(){
   $('#myFile').change(function(){
     var input = this;
     var url = $(this).val();
     var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
     if (input.files && input.files[0]&& (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) 
      {
         var reader = new FileReader();
 
         reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
         }
        reader.readAsDataURL(input.files[0]);
     }
     else
     {
       $('#img').attr('src', '/assets/no_preview.png');
     }
   });
 
 });