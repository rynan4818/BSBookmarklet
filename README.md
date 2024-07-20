# BeatSaberのWebサイトで使えるブックマークレット

## BeatSaverのAlertsのリストをBeatSaberのプレイリストとして保存する

下記文字列をコピーして、ブックマークのURLに入力します。

```
javascript:(function(d){let f=`BeatSaverAlerts${new Date().toLocaleString()}`,s=[],a=d.createElement("a");Array.from(d.querySelectorAll('a')).filter(e=>e.innerText.startsWith('#')).forEach(e=>{s.push({key:e.innerText.slice(1)});});d.body.appendChild(a);a.download=f+'.bplist';a.href=URL.createObjectURL(new Blob([JSON.stringify({playlistTitle:f,songs:s})],{type:'application/json'}));a.click();a.remove();URL.revokeObjectURL(url);})(document);
```