
function scroll1() {
    window.scrollTo(0, 0);
}

function scroll2() {
    window.scrollTo(0, 770);
}

function scroll3() {
    window.scrollTo(0, 10000);
}


document.getElementById("vb").addEventListener("click", scroll1);
document.getElementById("pb").addEventListener("click", scroll2);
document.getElementById("ob").addEventListener("click", scroll3);
