history.pushState(null, null, null);

window.onpopstate = function (event) {
    history.pushState(null, null, null);
    alert("戻れると思った？。");
