history.pushState(null, null, null);
$(window).addEventListener('popstate', function(event) {
  if (!event.originalEvent.state) {
    history.pushState(null, null, null);
    alert("戻れると思った？。");
    return;
  }
});
