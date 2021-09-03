history.replaceState(null, document.getElementsByTagName('title')[0].innerHTML, null);
if(history && history.pushState && history.state != undefined){
  history.pushState(null, null, null);
  window.addEventListener("popstate", function() {
    window.onbeforeunload = function(e) {
      return 'このページから離れますか？';
    };
    history.pushState(null, null, null);
    alert("戻れると思った？");
  });
}

