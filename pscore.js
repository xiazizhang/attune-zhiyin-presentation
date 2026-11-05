(function(){
  var C=[{"id":"p1","en":"Carer pushing a wheelchair","zh":"推轮椅的照护者","fail":false,"L":[["中年","Middle-aged"],["长袖上衣","Long-sleeved top"],["长裤","Trousers"],["轮椅","Wheelchair"],["couple","Pair"],["伫立","Standing"],["工作","Working"]]},{"id":"p3","en":"Wheelchair user","zh":"轮椅使用者","fail":false,"L":[["中年","Middle-aged"],["衬衫","Shirt"],["裤子","Trousers"],["轮椅","Wheelchair"],["couple","Pair"],["坐","Seated"],["休息","Resting"]]},{"id":"c1","en":"Child","zh":"儿童","fail":false,"L":[["幼年","Child"],["白色T恤","White T-shirt"],["蓝色牛仔裤","Blue jeans"],["None_visible","None visible"],["single","Alone"],["伫立","Standing"],["向外观察","Looking out"]]},{"id":"c2","en":"Young woman with a bag","zh":"背包的年轻人","fail":false,"L":[["青年","Young adult"],["棕色短袖T恤","Brown T-shirt"],["米色长裙","Beige long skirt"],["背包","Bag"],["couple","Pair"],["伫立","Standing"],["向外观察","Looking out"]]},{"id":"c4","en":"Detection failed","zh":"识别失败","fail":true,"L":[["Unknown","Unknown"],["Unknown","Unknown"],["Unknown","Unknown"],["Unknown","Unknown"],["失败","Failed"],["Unknown","Unknown"],["Unknown","Unknown"]]}];
  var F=[["Apparent age","外观年龄段","P"],["Top","上装描述","P"],["Bottom","下装描述","P"],["Carried items","随行物","P"],["Companionship","结伴关系","P"],["Posture","姿态类别","C"],["Social state","社交状态","C"]];
  var box=document.getElementById('pLabels'); if(!box) return;
  function show(id){
    var c=C.find(function(q){return q.id===id}); if(!c) return;
    document.querySelectorAll('[data-case]').forEach(function(b){ b.classList.toggle('on', b.dataset.case===id); });
    var rows=F.map(function(f,i){ var v=c.L[i]; return '<div class="pl-row" style="animation-delay:'+(i*70)+'ms"><span class="pl-k">'+f[0]+'<em>'+f[1]+'</em></span><span class="pl-v'+(c.fail?' fail':'')+'">'+v[1]+'<em>'+v[0]+'</em></span><span class="pl-to '+f[2]+'">'+(f[2]==='P'?'→ P score':'→ behaviour')+'</span></div>'; }).join('');
    box.innerHTML='<div class="pl-head"><b>'+c.en+'</b><span>'+c.zh+'</span><i class="'+(c.fail?'fail':'ok')+'">'+(c.fail?'failed · 识别失败':'completed · 已完成')+'</i></div>'+rows+
      '<div class="pl-foot">'+(c.fail?'<b>No labels, no score.</b> The frame is skipped instead of guessed.<span>识别失败时不猜测，本帧不评分。</span>':'<b>Five labels → P score</b> (who needs shade most). <b>Posture &amp; social state →</b> behaviour rules P1–C4.<span>前五项进入 P 评分（谁更需要遮阳）；姿态与社交状态进入行为规则。</span>')+'</div>';
  }
  document.querySelectorAll('[data-case]').forEach(function(b){ b.addEventListener('click',function(){ show(b.dataset.case); }); });
  show('p3');
})();