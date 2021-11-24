var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScroll = window.pageYOffset;
    if (prevScrollpos > currentScroll) {
        document.getElementById("scrollSubHeader").style.top = "70px";
    } else {
        document.getElementById("scrollSubHeader").style.top = "0";
    }
    prevScrollpos = currentScroll;
}