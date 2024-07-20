//javascript:
(function(){
  var t=''+(window.getSelection ? window.getSelection(): document.getSelection ? document.getSelection(): document.selection.createRange().text);
  if(!t)t=prompt("bsr","");
  if(t)open('https://beatsaver.com/maps/'+t.toLowerCase(),'_blank');
})()
