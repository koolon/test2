history.pushState(null, null, null);

window.onpopstate = function (event) {
    history.pushState(null, null, null);
    alert("出られると思った？。");
