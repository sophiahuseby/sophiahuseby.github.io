function unhide() {
    var show = document.getElementsByClassName("exp");
    if(show[0].offsetWidth > 0 && show[0].offsetHeight > 0) {
        show[0].style.visibility = "visible";
    }
}