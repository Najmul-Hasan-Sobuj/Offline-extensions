$(document).ready(function () {
    var keyCodes = [61, 107, 173, 109, 187, 189];

    document.addEventListener("mousewheel", function (event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    }, {passive: false});


    document.addEventListener("DOMMouseScroll", function (event) {
        if (event.ctrlKey == true) {
            event.preventDefault();
        }
    }, {passive: false});

    document.addEventListener("keydown", function (event) {
        if (event.ctrlKey == true && (keyCodes.indexOf(event.which) != -1)) {
            event.preventDefault();
        }
    }, {passive: false});
});