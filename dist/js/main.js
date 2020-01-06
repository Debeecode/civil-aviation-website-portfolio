let mybtn = document.getElementById("top-btn");

window.onscroll = function() {
    showButton();
}

//show the button when the user scrolls 100px from top
let showButton = () => {
    if (document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100) {
            mybtn.style.display = "block";
        } else {
            mybtn.style.display = "none";
        }
}

let scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}