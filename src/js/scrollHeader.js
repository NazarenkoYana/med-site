var hideOnScrollOffset = 70;
var prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset;
    if (hideOnScrollOffset > currentScroll) {
        document.querySelector("#scrollSubHeader").style.top = "70px";
    } else {
        document.querySelector("#scrollSubHeader").style.top = "0";
    }
    prevScrollpos = currentScroll;
});