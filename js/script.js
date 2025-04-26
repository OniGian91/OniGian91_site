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

document.addEventListener('DOMContentLoaded', function () {
    const hiddenDivs = document.querySelectorAll('.hidden-div');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    hiddenDivs.forEach(div => observer.observe(div));
});



window.addEventListener('keydown', function(e) {
  const keysToDisable = [32, 33, 34, 35, 36, 37, 38, 39, 40]; 

  if (keysToDisable.includes(e.keyCode)) {
    e.preventDefault();
  }
});
