//javascript:
(function(d){
  let f=`BeatSaverAlerts${new Date().toLocaleString()}`,s=[],a=d.createElement("a");
  Array.from(d.querySelectorAll('div.card-body')).forEach(e=>{s.push({key:Array.from(e.querySelectorAll('a')).filter(e=>e.innerText.startsWith('#'))[0].innerText.slice(1)});});
  d.body.appendChild(a);
  a.download=f+'.bplist';
  a.href=URL.createObjectURL(new Blob([JSON.stringify({playlistTitle:f,songs:s})],{type:'application/json'}));
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();
})(document);
