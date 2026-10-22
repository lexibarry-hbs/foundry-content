// Expand/collapse FAQ and copy the support email.
(function(){
  var all=document.querySelectorAll('#questions details');
  document.getElementById('openAll').addEventListener('click',function(){all.forEach(function(d){d.open=true})});
  document.getElementById('closeAll').addEventListener('click',function(){all.forEach(function(d){d.open=false})});
  var btn=document.getElementById('copyBtn'), addr=document.getElementById('addr');
  btn.addEventListener('click',function(){
    var t=addr.textContent;
    function sel(){var r=document.createRange();r.selectNodeContents(addr);var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='Selected';}
    try{navigator.clipboard.writeText(t).then(function(){btn.textContent='Copied'},sel);}catch(e){sel();}
    setTimeout(function(){btn.textContent='Copy'},2000);
  });
})();
