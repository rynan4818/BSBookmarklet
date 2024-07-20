# BeatSaberのWebサイトで使えるブックマークレット

## BeatSaverのAlertsのリストをBeatSaberのプレイリストとして保存する

1. 下記文字列の右端のコピーボタンを押してコピーします
```
javascript:(function(d){let f=`BeatSaverAlerts${new Date().toLocaleString()}`,s=[],a=d.createElement("a");Array.from(d.querySelectorAll('a')).filter(e=>e.innerText.startsWith('#')).forEach(e=>{s.push({key:e.innerText.slice(1)});});d.body.appendChild(a);a.download=f+'.bplist';a.href=URL.createObjectURL(new Blob([JSON.stringify({playlistTitle:f,songs:s})],{type:'application/json'}));a.click();a.remove();URL.revokeObjectURL(url);})(document);
```
2. ブラウザのブックマークのURLにコピーした文字を貼り付けます。名前は適当に付けて下さい。

    ![image](https://github.com/user-attachments/assets/432e6ae4-70f1-42b7-902b-4e38389bc156)
3. BeatSaverのAlerts & Notificationsを開きます

    ![image](https://github.com/user-attachments/assets/3f220c47-f538-4121-b30d-e6acab9b948b)
4. リスト表示が多い場合は、最後までスクロールして表示させます

    ![image](https://github.com/user-attachments/assets/b3f3f073-f15b-40ab-9c91-5abdc4fe4146)
5. この状態で先ほど登録したブックマークを選択すると、プレイリストとして保存できます
6. プレイリストはBeatSaverのKey(bsr)のみ記載されているので、ダウンロード済みの譜面でも表示されません。そのため、DOWNLOADボタンを押して読み込みます

    ![image](https://github.com/user-attachments/assets/34981990-98bd-4593-bc85-08732816533a)
7. PlaylistManagerが自動的に不足する譜面をダウンロードしてくれます。

    ![image](https://github.com/user-attachments/assets/abee2438-e2d8-4583-93a7-8073343b11e7)

※李昊(misterlihao)さんの[Alertsのリストにdownloadボタンを追加するブックマークレット](https://x.com/misterlihao/status/1814543927762169927)を参考にさせて頂きました。こちらも便利なのでぜひ使って見ましょう。

## [bsr,beatsaver検索ブックマークレット](https://docs.google.com/document/d/1iqraopptZzW_y9I3TJo076GYlQ6PLYbzqduI66vhS74/edit?usp=sharing)
選択もしくは入力されたbsrのbeatsaverの譜面ページに飛ぶブックマークレットです。上記リンク先に説明があります。
