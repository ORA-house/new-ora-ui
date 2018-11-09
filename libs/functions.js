function incTemp() {
    var element = document.getElementById('setTemp');
    var num = element.innerHTML;
    num++;
    element.innerHTML = num;
}

function decTemp() {
    var element = document.getElementById('setTemp');
    var num = element.innerHTML;
    num--;
    element.innerHTML = num;
}

function goTo(link) {
    window.location.href = link;
}