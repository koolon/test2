if(history && history.pushState && history.state != undefined){
  history.pushState(null, null, null);
  window.addEventListener("popstate", function() {
    history.pushState(null, null, null);
    window.onbeforeunload = function(e) {
      return 'このページから離れますか？';
    };
    alert("戻れると思った？");
  });
}

