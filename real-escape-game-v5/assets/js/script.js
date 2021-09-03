$(function(){
 history.pushState(null, null, null); 
 $(window).on("popstate", function (event) {
   history.pushState(null, null, null);
   window.alert('テスト');
 });
});
