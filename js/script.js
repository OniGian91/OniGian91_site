function readMore(section) {
    var dots = document.getElementById("dots" + section);
    var moreText = document.getElementById("more" + section);
    var btnText = document.getElementById("myBtn" + section);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "> More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "< Less";
        moreText.style.display = "inline";
    }
}
