var rso = document.getElementById('search');
var anchors = rso.getElementsByTagName('a');

function swapAnchor(a) {
    var newAnchor = document.createElement('a');
    newAnchor.href = a.href;
    a.parentNode.replaceChild(newAnchor, a);
    while (a.firstChild) {
        newAnchor.appendChild(a.firstChild);
    }
}

for (var i = 0; i < anchors.length; i++) {
    swapAnchor(anchors[i]);
}