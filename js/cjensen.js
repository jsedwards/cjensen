$(document).ready(function(){
  $("a.thumbnail").on("click",function(a){
    a.preventDefault();
  })
  $("body").on("click",  "img.forhire",function(a){
    a.preventDefault();
    $("#portfolio").modal('show');
  })
    $("a.thumbnail").on("click","img",function(a,b,c){
    a.preventDefault();
    var image = $(this).attr("src");
    image = image.replace(/thumbnail/,"fullsize");
    $("#largeImage").attr("src", image);
    $("#imageModal").modal('show');
  })
})
