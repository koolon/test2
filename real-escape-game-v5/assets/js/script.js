history.replaceState(null, null, null);
window.addEventListener('popstate', function(e) {
  alert('テスト');
});
